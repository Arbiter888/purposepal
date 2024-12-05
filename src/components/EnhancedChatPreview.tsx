import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
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

const coaches = [
  { id: "wellness", name: "Ava", gradient: "from-green-400 via-cyan-500 to-blue-500" },
  { id: "nutrition", name: "Olivia", gradient: "from-pink-500 via-purple-500 to-indigo-500" },
  { id: "spiritual", name: "Amara", gradient: "from-yellow-400 via-orange-500 to-red-500" },
  { id: "fitness", name: "Amber", gradient: "from-lime-400 via-emerald-500 to-teal-500" },
  { id: "financial", name: "Maya", gradient: "from-blue-400 via-indigo-500 to-purple-500" },
];

const EnhancedChatPreview = ({ onServiceChange }: EnhancedChatPreviewProps) => {
  const [activeCoach, setActiveCoach] = useState(coaches[0]);

  const handleCoachChange = (coach: typeof coaches[0]) => {
    setActiveCoach(coach);
    onServiceChange(coach.id);
  };

  const getActiveMessages = () => {
    switch (activeCoach.id) {
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
      <div className="mb-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full h-14 text-lg font-medium bg-gradient-to-r from-[#4ADE80] to-[#2DD4BF] hover:opacity-90 transition-opacity rounded-2xl border-none text-white"
            >
              {activeCoach.name}
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full min-w-[200px] bg-black/90 backdrop-blur-lg border border-white/10">
            {coaches.map((coach) => (
              <DropdownMenuItem
                key={coach.id}
                className={`text-lg py-3 px-4 focus:bg-white/10 focus:text-white cursor-pointer ${
                  activeCoach.id === coach.id ? 'bg-white/10' : ''
                }`}
                onClick={() => handleCoachChange(coach)}
              >
                {coach.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

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
                key={`${activeCoach.id}-${index}`}
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
    </div>
  );
};

export default EnhancedChatPreview;