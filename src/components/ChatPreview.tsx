import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { suggestedMessages } from "@/data/chatMessages";

interface ChatPreviewProps {
  messages: any[];
  service: string;
  onSendMessage?: (message: string) => void;
}

const ChatPreview = ({ messages, service, onSendMessage }: ChatPreviewProps) => {
  const [inputValue, setInputValue] = useState("");
  const suggestions = suggestedMessages[service as keyof typeof suggestedMessages] || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    onSendMessage?.(inputValue.trim());
    setInputValue("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSendMessage?.(suggestion);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-8 backdrop-blur-xl bg-black/40"
    >
      <div className="space-y-4 mb-4">
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleSuggestionClick(suggestion)}
              className="glass px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors"
            >
              {suggestion}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="space-y-6 max-h-[500px] overflow-y-auto mb-8">
        {messages.map((message, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: message.type === 'ai' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-start gap-4 ${message.type === 'ai' ? '' : 'justify-end'}`}
          >
            {message.type === 'ai' && (
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex-shrink-0 animate-pulse flex items-center justify-center">
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
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..." 
          className="flex-1 glass rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-lg bg-white/5 text-white"
        />
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass p-4 rounded-full hover:bg-white/10 transition-colors group"
        >
          <Send className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-white" />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ChatPreview;