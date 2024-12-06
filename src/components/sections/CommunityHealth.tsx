import { motion, AnimatePresence } from "framer-motion";
import { Heart, Bot, Sparkles } from "lucide-react";
import { ConnectionCategory } from "../community/ConnectionCategory";
import { useState, useEffect } from "react";

const categories = [
  {
    title: "Wellness Friends",
    description: "Connect with people who share your wellness journey and mindful living practices",
    icon: Sparkles,
    iconColor: "text-cyan-500",
    matches: [
      {
        name: "Sarah Chen",
        image: "https://i.pravatar.cc/150?img=47",
        aiCoach: "Wellness AI Coach Ava",
        aiSuggestion: "Sarah's dedication to mindfulness and holistic wellness aligns perfectly with your journey to inner peace.",
        interests: ["Meditation", "Yoga", "Mindful Living"]
      },
      {
        name: "David Park",
        image: "https://i.pravatar.cc/150?img=12",
        aiCoach: "Wellness AI Coach Ava",
        aiSuggestion: "David's focus on work-life balance and stress management could complement your wellness goals.",
        interests: ["Stress Management", "Mindfulness", "Healthy Living"]
      }
    ]
  },
  {
    title: "Spiritual Friends",
    description: "Find companions who share your spiritual journey and personal growth aspirations",
    icon: Heart,
    iconColor: "text-purple-500",
    matches: [
      {
        name: "Michael Rivera",
        image: "https://i.pravatar.cc/150?img=68",
        aiCoach: "Spiritual Guide Amara",
        aiSuggestion: "Michael's deep interest in meditation and spiritual growth resonates with your quest for inner wisdom.",
        interests: ["Spiritual Growth", "Meditation", "Personal Development"]
      },
      {
        name: "Lisa Wong",
        image: "https://i.pravatar.cc/150?img=32",
        aiCoach: "Spiritual Guide Amara",
        aiSuggestion: "Lisa's commitment to spiritual practices and community building aligns with your path.",
        interests: ["Spiritual Community", "Mindfulness", "Inner Peace"]
      }
    ]
  },
  {
    title: "Growth Friends",
    description: "Connect with people focused on personal development and mutual support",
    icon: Bot,
    iconColor: "text-pink-500",
    matches: [
      {
        name: "Emma Thompson",
        image: "https://i.pravatar.cc/150?img=45",
        aiCoach: "Financial Advisor Maya",
        aiSuggestion: "Emma shares your interest in personal growth and financial wellness journey.",
        interests: ["Personal Growth", "Financial Wellness", "Life Balance"]
      },
      {
        name: "James Wilson",
        image: "https://i.pravatar.cc/150?img=15",
        aiCoach: "Fitness Coach Amber",
        aiSuggestion: "James's holistic approach to fitness and wellness matches your goals.",
        interests: ["Fitness Journey", "Wellness", "Active Lifestyle"]
      }
    ]
  }
];

const CommunityHealth = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeMatch, setActiveMatch] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
    2: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMatch((prev) => {
        const newState = { ...prev };
        newState[activeCategory] = (prev[activeCategory] + 1) % categories[activeCategory].matches.length;
        return newState;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeCategory]);

  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <AnimatePresence mode="wait">
          <motion.h2
            key="main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-rainbow mb-4"
          >
            And meet your new circle of friends
          </motion.h2>
        </AnimatePresence>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our AI coaches analyze your journey and connect you with like-minded individuals who can enrich your path to wellness and growth.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setActiveCategory(index)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${index}-${activeMatch[index]}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`cursor-pointer ${activeCategory === index ? 'scale-105' : 'scale-95'} transition-all duration-300`}
              >
                <ConnectionCategory
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  iconColor={category.iconColor}
                  match={category.matches[activeMatch[index]]}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CommunityHealth;