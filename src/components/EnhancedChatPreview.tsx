import { motion } from "framer-motion";
import { useState } from "react";
import { CoachSelector } from "./chat-preview/CoachSelector";
import { Coach } from "./chat-preview/types";

interface EnhancedChatPreviewProps {
  onServiceChange: (service: string) => void;
}

const coaches: Coach[] = [
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

  const handleCoachChange = (coach: Coach) => {
    setActiveCoach(coach);
    onServiceChange(coach.id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <CoachSelector 
        coaches={coaches}
        activeCoach={activeCoach}
        onCoachChange={handleCoachChange}
      />
    </div>
  );
};

export default EnhancedChatPreview;