import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const wellnessMessages = [
  {
    type: "ai",
    content: "Hello! I'm your AI wellness coach. I can help you create a balanced lifestyle that nurtures your mind, body, and spirit. What would you like to focus on today?",
    service: "wellness"
  },
  {
    type: "user",
    content: "I've been feeling stressed lately and would like to improve my overall well-being.",
  },
  {
    type: "ai",
    content: "I understand you're dealing with stress. Let me assess your situation:\n\n1. You're seeking overall well-being improvement\n2. Stress is affecting your daily life\n3. You're ready to make positive changes\n\nBased on this, I recommend starting with stress management techniques and building a holistic wellness routine. To provide you with the most personalized support:\n\n1. Let's schedule a video consultation with one of our wellness experts:\n📅 Tomorrow at 2:00 PM\n📅 Wednesday at 11:00 AM\n📅 Friday at 3:30 PM\n\n2. I can also set up smart scheduling for:\n⏰ Daily meditation reminders\n🧘‍♀️ Stress-relief exercise prompts\n😌 Mindfulness practice notifications\n\nWould you like to book a consultation and set up these wellness reminders?",
    service: "wellness"
  }
];

const nutritionMessages = [
  {
    type: "ai",
    content: "Welcome! I'm your AI nutrition guide. I can help you develop healthy eating habits and create personalized meal plans. What are your nutrition goals?",
    service: "nutrition"
  },
  {
    type: "user",
    content: "I want to eat healthier but struggle with meal planning and portion control.",
  },
  {
    type: "ai",
    content: "Thank you for sharing. Let me analyze your concerns:\n\n1. You want to improve your eating habits\n2. Meal planning is a challenge\n3. Portion control is an area for improvement\n\nBased on this assessment, you would benefit from structured guidance and practical meal planning strategies. Here's what I recommend:\n\n1. Schedule a video consultation with our certified nutritionist:\n📅 Today at 4:00 PM\n📅 Thursday at 1:30 PM\n📅 Saturday at 10:00 AM\n\n2. Let's set up smart scheduling for:\n📱 Weekly meal prep reminders\n⏰ Regular eating schedule alerts\n📝 Guided portion control check-ins\n🛒 Grocery shopping reminders\n\nWould you like to book a consultation and activate these nutrition support tools?",
    service: "nutrition"
  }
];

const spiritualMessages = [
  {
    type: "ai",
    content: "Greetings! I'm your AI spiritual companion. I'm here to support your faith journey and help you grow in your spiritual practice. How can I assist you today?",
    service: "spiritual"
  },
  {
    type: "user",
    content: "I'd like to develop a stronger daily spiritual practice but struggle with consistency.",
  },
  {
    type: "ai",
    content: "I hear your desire for spiritual growth. Let me assess your situation:\n\n1. You're seeking a deeper spiritual connection\n2. Consistency is your main challenge\n3. You're looking for daily practice structure\n\nBased on this, I recommend a combination of guided support and structured practice. Here's my suggestion:\n\n1. Let's schedule a video session with one of our spiritual mentors:\n📅 Tomorrow at 9:00 AM\n📅 Thursday at 5:00 PM\n📅 Sunday at 2:00 PM\n\n2. I can help establish a consistent practice with:\n⏰ Daily devotional reminders\n🙏 Customized prayer time notifications\n📖 Scripture reading schedules\n✨ Reflection journal prompts\n\nWould you like to connect with a mentor and set up these spiritual practice reminders?",
    service: "spiritual"
  }
];

const fitnessMessages = [
  {
    type: "ai",
    content: "Hi there! I'm your AI fitness coach. I can help you achieve your fitness goals through personalized workout plans and expert guidance. What are your fitness objectives?",
    service: "fitness"
  },
  {
    type: "user",
    content: "I want to get stronger and more flexible, but I'm not sure where to start.",
  },
  {
    type: "ai",
    content: "Let me analyze your fitness goals:\n\n1. You want to build strength\n2. Improving flexibility is important to you\n3. You need guidance on getting started\n\nBased on this assessment, I recommend a structured approach combining expert guidance with consistent practice. Here's my plan:\n\n1. Let's schedule a video session with a certified fitness trainer:\n📅 Today at 6:00 PM\n📅 Wednesday at 7:30 AM\n📅 Friday at 4:00 PM\n\n2. I'll set up smart scheduling for:\n💪 Progressive strength training reminders\n🧘‍♀️ Daily flexibility sessions\n📊 Progress tracking check-ins\n🎯 Goal milestone celebrations\n\nWould you like to book a trainer consultation and set up these fitness reminders?",
    service: "fitness"
  }
];

const serviceHighlight = {
  wellness: "bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500",
  nutrition: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
  spiritual: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
  fitness: "bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-500"
};

const EnhancedChatPreview = () => {
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState("wellness");

  const getActiveMessages = () => {
    switch (activeTab) {
      case "wellness":
        return wellnessMessages;
      case "nutrition":
        return nutritionMessages;
      case "spiritual":
        return spiritualMessages;
      case "fitness":
        return fitnessMessages;
      default:
        return wellnessMessages;
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Tabs defaultValue="wellness" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="wellness" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:via-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:bg-opacity-20">
            Wellness
          </TabsTrigger>
          <TabsTrigger value="nutrition" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:via-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:bg-opacity-20">
            Nutrition
          </TabsTrigger>
          <TabsTrigger value="spiritual" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:via-orange-500 data-[state=active]:to-red-500 data-[state=active]:bg-opacity-20">
            Spiritual
          </TabsTrigger>
          <TabsTrigger value="fitness" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-lime-400 data-[state=active]:via-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:bg-opacity-20">
            Fitness
          </TabsTrigger>
        </TabsList>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-50" />
          
          <div className="space-y-6 mb-8 max-h-[500px] overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
              {getActiveMessages().map((message, index) => (
                <motion.div 
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, x: message.type === 'ai' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: message.type === 'ai' ? -20 : 20 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-start gap-4 ${message.type === 'user' ? 'justify-end' : ''}`}
                >
                  {message.type === 'ai' && (
                    <div className={`w-10 h-10 rounded-full ${serviceHighlight[message.service]} flex items-center justify-center flex-shrink-0`}>
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
      </Tabs>
    </div>
  );
};

export default EnhancedChatPreview;