import { useState, useCallback } from 'react';

const ELEVEN_LABS_API_ENDPOINT = 'https://api.elevenlabs.io/v1/text-to-speech';

const voiceMap = {
  wellness: 'EXAVITQu4vr4xnSDxMaL',
  nutrition: 'XB0fDUnXU5powFXDhCwa',
  spiritual: 'pFZP5JQG7iQjIQuC4Bku',
  fitness: 'TX3LPaxmHKxFdv7VOQHJ',
  business: 'CwhRBWXzGAHq8TQ4Fs17',
};

export const useVoiceSynthesis = (service: keyof typeof voiceMap) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const synthesizeSpeech = useCallback(async (text: string, apiKey: string) => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Starting speech synthesis with text:', text);
      console.log('Using voice ID:', voiceMap[service]);
      
      const response = await fetch(`${ELEVEN_LABS_API_ENDPOINT}/${voiceMap[service]}`, {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': apiKey,
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5,
          },
        }),
      });

      console.log('ElevenLabs API response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('ElevenLabs API error:', errorText);
        throw new Error(`Failed to synthesize speech: ${errorText}`);
      }

      console.log('Successfully received audio response');
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      
      return audio;
    } catch (err) {
      console.error('Error in synthesizeSpeech:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [service]);

  return {
    synthesizeSpeech,
    isLoading,
    error,
  };
};