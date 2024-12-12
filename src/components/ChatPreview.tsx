import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { suggestedMessages } from "@/data/chatMessages";
import { useVoiceSynthesis } from "@/hooks/useVoiceSynthesis";
import VoiceControl from "./VoiceControl";
import { supabase } from "@/integrations/supabase/client";

const voiceMap = {
  wellness: 'EXAVITQu4vr4xnSDxMaL', // Sarah - warm and professional
  nutrition: 'XB0fDUnXU5powFXDhCwa', // Charlotte - clear and informative
  spiritual: 'pFZP5JQG7iQjIQuC4Bku', // Lily - calm and soothing
  fitness: 'TX3LPaxmHKxFdv7VOQHJ', // Liam - energetic and motivating
  business: 'CwhRBWXzGAHq8TQ4Fs17', // Roger - authoritative and professional
};

interface ChatPreviewProps {
  messages: any[];
  service: string;
  onSendMessage?: (message: string) => void;
  isLoading?: boolean;
}

const ChatPreview = ({ messages, service, onSendMessage, isLoading }: ChatPreviewProps) => {
  const [inputValue, setInputValue] = useState("");
  const [volume, setVolume] = useState(1);
  const { synthesizeSpeech, isLoading: isSynthesizing } = useVoiceSynthesis(service as keyof typeof voiceMap);
  const suggestions = suggestedMessages[service as keyof typeof suggestedMessages] || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    
    onSendMessage?.(inputValue.trim());
    setInputValue("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (isLoading) return;
    onSendMessage?.(suggestion);
  };

  const playMessage = async (message: string) => {
    try {
      console.log('Fetching API key from Supabase...');
      const { data, error } = await supabase
        .from('secrets')
        .select('value')
        .eq('name', 'ELEVENLABS_API_KEY')
        .single();

      if (error) {
        console.error('Failed to fetch API key:', error);
        return;
      }

      if (!data?.value) {
        console.error('No API key found in secrets');
        return;
      }

      console.log('API key retrieved successfully, attempting speech synthesis...');
      const audio = await synthesizeSpeech(message, data.value);
      
      if (audio) {
        console.log('Speech synthesized successfully, playing audio...');
        audio.volume = volume;
        await audio.play();
      } else {
        console.error('No audio returned from synthesizeSpeech');
      }
    } catch (error) {
      console.error('Failed to play message:', error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-8 backdrop-blur-xl bg-black/40"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Chat with your coach</h3>
        <VoiceControl onVolumeChange={setVolume} />
      </div>

      <div className="space-y-4 mb-4">
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`glass px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {suggestion}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="space-y-6 max-h-[500px] overflow-y-auto mb-8 custom-scrollbar">
        {messages.map((message, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: message.type === 'ai' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-start gap-4 ${message.type === 'ai' ? '' : 'justify-end'}`}
          >
            {message.type === 'ai' && (
              <div 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex-shrink-0 animate-pulse flex items-center justify-center cursor-pointer"
                onClick={() => playMessage(message.content)}
              >
                <span className="text-white text-xl">🤖</span>
              </div>
            )}
            
            <div className="flex flex-col space-y-1 max-w-[80%]">
              {message.type === 'ai' ? (
                <div className="space-y-4">
                  {typeof message.content === 'string' ? (
                    <p className="text-lg text-white">
                      {message.content}
                    </p>
                  ) : (
                    message.content.map((item: string, idx: number) => (
                      <p key={idx} className="text-lg text-white">
                        {item}
                      </p>
                    ))
                  )}
                </div>
              ) : (
                <div className="relative glass rounded-2xl p-4 bg-white/5">
                  <p className="text-lg bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                    {message.content}
                  </p>
                </div>
              )}
            </div>

            {message.type === 'user' && (
              <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-xl">👤</span>
              </div>
            )}
          </motion.div>
        ))}
        {(isLoading || isSynthesizing) && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </motion.div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..." 
          className="flex-1 glass rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-lg bg-white/5 text-white"
          disabled={isLoading}
        />
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`glass p-4 rounded-full hover:bg-white/10 transition-colors group ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          <Send className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-white" />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ChatPreview;