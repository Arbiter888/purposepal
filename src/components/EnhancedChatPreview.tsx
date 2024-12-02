import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  wellnessMessages, 
  nutritionMessages, 
  spiritualMessages, 
  fitnessMessages,
  financialMessages,
  suggestedMessages,
  serviceHighlight 
} from "@/data/chatMessages";

interface EnhancedChatPreviewProps {
  onServiceChange: (service: string) => void;
}

const EnhancedChatPreview = ({ onServiceChange }: EnhancedChatPreviewProps) => {
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState("wellness");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onServiceChange(value);
  };

  const handleSuggestedMessage = (message: string) => {
    setInputValue(message);
  };

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
      case "financial":
        return financialMessages;
      default:
        return wellnessMessages;
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Tabs defaultValue="wellness" className="w-full" onValueChange={handleTabChange}>
        <TabsList className="grid w-full grid-cols-5 mb-8">
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
          <TabsTrigger value="financial" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-400 data-[state=active]:via-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:bg-opacity-20">
            Financial
          </TabsTrigger>
        </TabsList>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-muted rounded-3xl p-8 relative overflow-hidden"
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
                  
                  <div className={`bg-muted/80 rounded-2xl p-4 max-w-[80%] ${message.type === 'ai' ? 'rounded-tl-sm' : 'rounded-tr-sm'} ${message.type === 'user' ? 'bg-accent/10' : ''}`}>
                    <p className={`text-lg whitespace-pre-line ${
                      message.type === 'user' 
                        ? 'text-gradient-sunshine' 
                        : 'text-gradient-candy'
                    }`}>
                      {message.content}
                    </p>
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
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..." 
                className="flex-1 bg-muted/80 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all text-lg"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-muted/80 p-4 rounded-full hover:bg-white/10 transition-colors group"
              >
                <Send className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {suggestedMessages[activeTab as keyof typeof suggestedMessages].map((message, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestedMessage(message)}
                  className="text-sm hover:bg-accent/10"
                >
                  {message}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>
      </Tabs>
    </div>
  );
};

export default EnhancedChatPreview;