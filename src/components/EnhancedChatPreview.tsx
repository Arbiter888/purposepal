import { motion, AnimatePresence } from "framer-motion";
import { Bot, User } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  wellnessMessages, 
  nutritionMessages, 
  spiritualMessages, 
  fitnessMessages,
  financialMessages,
  serviceHighlight 
} from "@/data/chatMessages";

interface EnhancedChatPreviewProps {
  onServiceChange: (service: string) => void;
}

const EnhancedChatPreview = ({ onServiceChange }: EnhancedChatPreviewProps) => {
  const [activeTab, setActiveTab] = useState("wellness");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onServiceChange(value);
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
        <TabsList className="flex flex-col sm:grid sm:grid-cols-5 gap-2 sm:gap-0 mb-8 p-2">
          <TabsTrigger 
            value="wellness" 
            className="w-full text-sm sm:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:via-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:bg-opacity-20"
          >
            Ava
          </TabsTrigger>
          <TabsTrigger 
            value="nutrition" 
            className="w-full text-sm sm:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:via-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:bg-opacity-20"
          >
            Olivia
          </TabsTrigger>
          <TabsTrigger 
            value="spiritual" 
            className="w-full text-sm sm:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:via-orange-500 data-[state=active]:to-red-500 data-[state=active]:bg-opacity-20"
          >
            Amara
          </TabsTrigger>
          <TabsTrigger 
            value="fitness" 
            className="w-full text-sm sm:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-lime-400 data-[state=active]:via-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:bg-opacity-20"
          >
            Amber
          </TabsTrigger>
          <TabsTrigger 
            value="financial" 
            className="w-full text-sm sm:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-400 data-[state=active]:via-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:bg-opacity-20"
          >
            Maya
          </TabsTrigger>
        </TabsList>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-muted rounded-3xl p-4 sm:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-50" />
          
          <div className="space-y-4 sm:space-y-6 mb-8 max-h-[400px] sm:max-h-[500px] overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="sync">
              {getActiveMessages().map((message, index) => (
                <motion.div 
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0, x: message.type === 'ai' ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: message.type === 'ai' ? -20 : 20 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-start gap-3 sm:gap-4 ${message.type === 'user' ? 'justify-end' : ''}`}
                >
                  {message.type === 'ai' && (
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${serviceHighlight[message.service]} flex items-center justify-center flex-shrink-0`}>
                      <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  )}
                  
                  <div className={`relative ${message.type === 'user' ? 'bg-accent/10' : 'bg-muted/80'} rounded-2xl p-3 sm:p-4 max-w-[85%] sm:max-w-[80%] ${
                    message.type === 'ai' ? 'rounded-tl-sm' : 'rounded-tr-sm'
                  }`}>
                    {message.type === 'ai' && (
                      <div className="absolute left-[-8px] top-4 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-muted/80 border-b-[8px] border-b-transparent" />
                    )}
                    {message.type === 'user' && (
                      <div className="absolute right-[-8px] top-4 w-0 h-0 border-t-[8px] border-t-transparent border-l-[8px] border-l-accent/10 border-b-[8px] border-b-transparent" />
                    )}
                    <p className={`text-base sm:text-lg whitespace-pre-line ${
                      message.type === 'user' 
                        ? 'text-gradient-sunshine' 
                        : 'text-gradient-candy'
                    }`}>
                      {message.content}
                    </p>
                  </div>

                  {message.type === 'user' && (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </Tabs>
    </div>
  );
};

export default EnhancedChatPreview;