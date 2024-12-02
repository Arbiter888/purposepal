import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ChatPreview = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-3xl p-8 max-w-3xl mx-auto backdrop-blur-xl"
    >
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex-shrink-0 animate-pulse" />
          <div className="glass rounded-2xl p-4 max-w-[80%] rounded-tl-none relative before:absolute before:left-[-8px] before:top-4 before:border-8 before:border-transparent before:border-r-white/5">
            <p className="text-lg">Hello! I'm your AI life coach. How can I help you today?</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-start gap-4 justify-end"
        >
          <div className="glass rounded-2xl p-4 max-w-[80%] rounded-tr-none relative before:absolute before:right-[-8px] before:top-4 before:border-8 before:border-transparent before:border-l-white/5">
            <p className="text-lg">I need help with setting career goals.</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-secondary flex-shrink-0" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex-shrink-0 animate-pulse" />
          <div className="glass rounded-2xl p-4 max-w-[80%] rounded-tl-none relative before:absolute before:left-[-8px] before:top-4 before:border-8 before:border-transparent before:border-r-white/5">
            <p className="text-lg">I'd be happy to help you set and achieve your career goals. Let's start by understanding your current situation and aspirations.</p>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-8 flex gap-3">
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="flex-1 glass rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-lg"
        />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glass p-4 rounded-full hover:bg-white/10 transition-colors group"
        >
          <Send className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ChatPreview;