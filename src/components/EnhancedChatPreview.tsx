import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, ThumbsUp, Brain } from "lucide-react";
import { useState } from "react";

const messages = [
  {
    type: "ai",
    content: "Hello! I'm your AI life coach. I'm here to help you grow personally, professionally, and spiritually. What would you like to focus on today?",
  },
  {
    type: "user",
    content: "I've been feeling stuck in my career and spiritual journey lately.",
  },
  {
    type: "ai",
    content: "I understand how challenging that can feel. Let's break this down into two areas. First, regarding your career - could you tell me about your current role and where you'd like to be? Also, what aspects of your spiritual journey would you like to explore?",
  },
  {
    type: "user",
    content: "I'm a software developer but I feel called to do something more meaningful. I want to align my work with my faith.",
  },
  {
    type: "ai",
    content: "That's a beautiful aspiration! There are many ways to integrate faith and technology. Have you considered:\n\n1. Developing tools for faith communities\n2. Using your skills for non-profit organizations\n3. Mentoring others in tech while incorporating spiritual guidance\n\nWhich of these resonates with you?",
  }
];

const features = [
  {
    icon: Brain,
    title: "Personalized Growth",
    description: "AI-driven insights tailored to your unique journey"
  },
  {
    icon: Sparkles,
    title: "Faith Integration",
    description: "Seamlessly blend spiritual guidance with practical advice"
  },
  {
    icon: ThumbsUp,
    title: "24/7 Support",
    description: "Always available for guidance and encouragement"
  }
];

const EnhancedChatPreview = () => {
  const [inputValue, setInputValue] = useState("");
  const [showFeatures, setShowFeatures] = useState(true);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <feature.icon className="w-10 h-10 mb-4 text-gradient" />
            <h3 className="text-xl font-semibold mb-2 text-gradient">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-50" />
        
        <div className="space-y-6 mb-8 max-h-[500px] overflow-y-auto custom-scrollbar">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: message.type === 'ai' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-start gap-4 ${message.type === 'user' ? 'justify-end' : ''}`}
              >
                {message.type === 'ai' && (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-black" />
                  </div>
                )}
                
                <div className={`glass rounded-2xl p-4 max-w-[80%] ${message.type === 'ai' ? 'rounded-tl-sm' : 'rounded-tr-sm'} ${message.type === 'user' ? 'bg-accent/10' : ''}`}>
                  <p className="text-lg whitespace-pre-line">{message.content}</p>
                </div>

                {message.type === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-black" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-8 flex gap-3">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
    </div>
  );
};

export default EnhancedChatPreview;