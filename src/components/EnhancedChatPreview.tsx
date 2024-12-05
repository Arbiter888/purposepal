import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface EnhancedChatPreviewProps {
  onServiceChange: (service: string) => void;
}

const coaches = [
  { 
    id: "wellness", 
    name: "Ava",
    title: "Wellness Coach",
    gradient: "from-green-400 via-cyan-500 to-blue-500",
    bgGradient: "bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500",
    examples: [
      "How can I manage daily stress?",
      "What are some good meditation practices?",
      "Tips for better sleep habits?"
    ],
    capabilities: [
      "Personalized wellness plans",
      "Stress management techniques",
      "Work-life balance guidance"
    ]
  },
  { 
    id: "nutrition", 
    name: "Olivia",
    title: "Nutrition Expert",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    bgGradient: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
    examples: [
      "How can I plan healthy meals?",
      "What's a balanced breakfast?",
      "Tips for portion control?"
    ],
    capabilities: [
      "Meal planning assistance",
      "Dietary recommendations",
      "Nutritional guidance"
    ]
  },
  { 
    id: "spiritual", 
    name: "Amara",
    title: "Spiritual Guide",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    bgGradient: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
    examples: [
      "How to start meditation?",
      "Daily spiritual practices?",
      "Finding inner peace?"
    ],
    capabilities: [
      "Meditation guidance",
      "Spiritual development",
      "Mindfulness practices"
    ]
  },
  { 
    id: "fitness", 
    name: "Amber",
    title: "Fitness Coach",
    gradient: "from-lime-400 via-emerald-500 to-teal-500",
    bgGradient: "bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-500",
    examples: [
      "Best exercises for beginners?",
      "How to improve flexibility?",
      "Creating a workout routine?"
    ],
    capabilities: [
      "Custom workout plans",
      "Form guidance",
      "Progress tracking"
    ]
  },
  { 
    id: "financial", 
    name: "Maya",
    title: "Financial Advisor",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
    bgGradient: "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500",
    examples: [
      "How to start budgeting?",
      "Investment tips for beginners?",
      "Saving for retirement?"
    ],
    capabilities: [
      "Financial planning",
      "Investment guidance",
      "Budget management"
    ]
  },
];

const EnhancedChatPreview = ({ onServiceChange }: EnhancedChatPreviewProps) => {
  const [activeCoach, setActiveCoach] = useState(coaches[0]);

  const handleCoachChange = (coach: typeof coaches[0]) => {
    setActiveCoach(coach);
    onServiceChange(coach.id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className={`w-full h-14 text-lg font-medium ${activeCoach.bgGradient} hover:opacity-90 transition-opacity rounded-2xl border-none text-white`}
            >
              Chat with {activeCoach.name} - Your {activeCoach.title}
              <MessageSquare className="ml-2 h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full min-w-[200px] bg-black/90 backdrop-blur-lg border border-white/10">
            {coaches.map((coach) => (
              <DropdownMenuItem
                key={coach.id}
                className={`text-lg py-3 px-4 focus:bg-white/10 focus:text-white cursor-pointer group ${
                  activeCoach.id === coach.id ? 'bg-white/10' : ''
                }`}
                onClick={() => handleCoachChange(coach)}
              >
                <div className={`w-full h-full bg-gradient-to-r ${coach.gradient} bg-clip-text text-transparent group-hover:text-white transition-colors`}>
                  {coach.name} - {coach.title}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="glass rounded-3xl p-6 space-y-4">
          <h3 className={`text-xl font-semibold bg-gradient-to-r ${activeCoach.gradient} bg-clip-text text-transparent`}>
            Example Questions
          </h3>
          <ul className="space-y-3">
            {activeCoach.examples.map((example, index) => (
              <motion.li
                key={example}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 text-white/90"
              >
                <div className={`w-2 h-2 rounded-full ${activeCoach.bgGradient}`} />
                <span>{example}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-3xl p-6 space-y-4">
          <h3 className={`text-xl font-semibold bg-gradient-to-r ${activeCoach.gradient} bg-clip-text text-transparent`}>
            How I Can Help
          </h3>
          <ul className="space-y-3">
            {activeCoach.capabilities.map((capability, index) => (
              <motion.li
                key={capability}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 text-white/90"
              >
                <div className={`w-2 h-2 rounded-full ${activeCoach.bgGradient}`} />
                <span>{capability}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default EnhancedChatPreview;