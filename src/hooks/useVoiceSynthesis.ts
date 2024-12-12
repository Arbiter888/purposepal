import { useState, useCallback } from 'react';

const ELEVEN_LABS_API_ENDPOINT = 'https://api.elevenlabs.io/v1/text-to-speech';

const voiceMap = {
  wellness: 'EXAVITQu4vr4xnSDxMaL', // Sarah - warm and professional
  nutrition: 'XB0fDUnXU5powFXDhCwa', // Charlotte - clear and informative
  spiritual: 'pFZP5JQG7iQjIQuC4Bku', // Lily - calm and soothing
  fitness: 'TX3LPaxmHKxFdv7VOQHJ', // Liam - energetic and motivating
  business: 'CwhRBWXzGAHq8TQ4Fs17', // Roger - authoritative and professional
};

export const useVoiceSynthesis = (service: keyof typeof voiceMap) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const synthesizeSpeech = useCallback(async (text: string, apiKey: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${ELEVEN_LABS_API_ENDPOINT}/${voiceMap[service]}`, {
        method: 'POST',
        headers: {
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

      if (!response.ok) {
        throw new Error('Failed to synthesize speech');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      
      return audio;
    } catch (err) {
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