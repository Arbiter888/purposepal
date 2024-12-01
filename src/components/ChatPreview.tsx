import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ChatPreview = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-6 max-w-2xl mx-auto"
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0" />
          <div className="glass rounded-2xl p-3 max-w-[80%]">
            <p>Hello! I'm your AI life coach. How can I help you today?</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3 justify-end">
          <div className="glass rounded-2xl p-3 max-w-[80%]">
            <p>I need help with setting career goals.</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0" />
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0" />
          <div className="glass rounded-2xl p-3 max-w-[80%]">
            <p>I'd be happy to help you set and achieve your career goals. Let's start by understanding your current situation and aspirations.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex gap-2">
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="flex-1 glass rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
        />
        <button className="glass p-2 rounded-full hover:bg-white/10 transition-colors">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default ChatPreview;