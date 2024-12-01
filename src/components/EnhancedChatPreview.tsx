import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, ThumbsUp, Brain, Apple, Dumbbell } from "lucide-react";
import { useState } from "react";

const messages = [
  {
    type: "ai",
    content: "Hello! I'm your AI life coach. I can help with spiritual guidance, mental wellness, nutrition, and fitness. What would you like to focus on today?",
    service: "general"
  },
  {
    type: "user",
    content: "I've been struggling with maintaining a healthy lifestyle while staying true to my faith.",
  },
  {
    type: "ai",
    content: "I understand the challenge of balancing physical and spiritual well-being. Let's break this down:\n\n1. 🏋️ Fitness: I can create a workout plan that fits your schedule\n2. 🍎 Nutrition: We'll develop a meal plan aligned with your values\n3. 🧘 Mental Wellness: Including faith-based meditation practices\n\nWhich aspect would you like to explore first?",
    service: "wellness"
  },
  {
    type: "user",
    content: "I'd like to start with nutrition. I want to make better food choices.",
  },
  {
    type: "ai",
    content: "Great choice! As your AI nutritionist, I'll help you create a sustainable and mindful eating plan. Here's what I suggest:\n\n1. Start with a food diary to track your current habits\n2. Set realistic goals that align with your faith and health\n3. Learn about mindful eating practices\n\nWould you like me to create a personalized meal plan based on your preferences?",
    service: "nutrition"
  }
];

const features = [
  {
    icon: Brain,
    title: "Holistic Wellness",
    description: "Integrated approach to mental, physical, and spiritual health"
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    description: "Personalized meal plans and mindful eating practices"
  },
  {
    icon: Dumbbell,
    title: "Fitness Coaching",
    description: "Custom workout plans aligned with your goals"
  }
];

const serviceHighlight = {
  general: "bg-gradient-to-r from-secondary to-accent",
  wellness: "bg-gradient-to-r from-blue-500 to-purple-500",
  nutrition: "bg-gradient-to-r from-green-500 to-emerald-500",
  fitness: "bg-gradient-to-r from-orange-500 to-red-500"
};

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
                  <div className={`w-10 h-10 rounded-full ${message.service ? serviceHighlight[message.service] : serviceHighlight.general} flex items-center justify-center flex-shrink-0`}>
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                )}
                
                <div className={`glass rounded-2xl p-4 max-w-[80%] ${message.type === 'ai' ? 'rounded-tl-sm' : 'rounded-tr-sm'} ${message.type === 'user' ? 'bg-accent/10' : ''}`}>
                  <p className="text-lg whitespace-pre-line">{message.content}</p>
                </div>

                {message.type === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
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
            placeholder="Ask about nutrition, fitness, or spiritual guidance..." 
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