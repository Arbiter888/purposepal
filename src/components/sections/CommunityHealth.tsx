import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Handshake } from "lucide-react";
import { ConnectionCategory } from "../community/ConnectionCategory";
import { useState, useEffect } from "react";

const categories = [
  {
    title: "Business Connections",
    titleText: "Meet your New Business Partner",
    description: "Find partners who share your vision and values for professional growth",
    icon: Handshake,
    iconColor: "text-cyan-500",
    matches: [
      {
        name: "Sarah Chen",
        image: "https://i.pravatar.cc/150?img=47",
        aiCoach: "Career AI Coach",
        aiSuggestion: "Sarah's focus on mindful leadership and sustainable business practices aligns perfectly with your entrepreneurial goals.",
        interests: ["Entrepreneurship", "Wellness", "Innovation"]
      },
      {
        name: "David Park",
        image: "https://i.pravatar.cc/150?img=12",
        aiCoach: "Career AI Coach",
        aiSuggestion: "David's expertise in sustainable business models could complement your growth strategy.",
        interests: ["Sustainability", "Tech", "Leadership"]
      }
    ]
  },
  {
    title: "Friendship Matches",
    titleText: "Meet your New Friend",
    description: "Connect with like-minded individuals who share your interests and values",
    icon: Users,
    iconColor: "text-purple-500",
    matches: [
      {
        name: "Michael Rivera",
        image: "https://i.pravatar.cc/150?img=68",
        aiCoach: "Wellness AI Coach",
        aiSuggestion: "Michael's dedication to personal growth and meditation practice resonates with your spiritual journey.",
        interests: ["Meditation", "Fitness", "Reading"]
      },
      {
        name: "Lisa Wong",
        image: "https://i.pravatar.cc/150?img=32",
        aiCoach: "Wellness AI Coach",
        aiSuggestion: "Lisa's passion for mindfulness and community building aligns with your interests.",
        interests: ["Yoga", "Art", "Community"]
      }
    ]
  },
  {
    title: "Romantic Connections",
    titleText: "Meet your Life Partner",
    description: "Discover meaningful relationships based on shared values and life goals",
    icon: Heart,
    iconColor: "text-pink-500",
    matches: [
      {
        name: "Emma Thompson",
        image: "https://i.pravatar.cc/150?img=45",
        aiCoach: "Relationship AI Coach",
        aiSuggestion: "Emma's approach to life-work balance and spiritual growth mirrors yours beautifully.",
        interests: ["Travel", "Wellness", "Arts"]
      },
      {
        name: "James Wilson",
        image: "https://i.pravatar.cc/150?img=15",
        aiCoach: "Relationship AI Coach",
        aiSuggestion: "James shares your passion for personal development and mindful living.",
        interests: ["Mindfulness", "Nature", "Growth"]
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
    // Reduced interval from 5000ms to 3000ms for more frequent transitions
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
            key={categories[activeCategory].titleText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }} // Reduced from 0.5 to 0.3 for faster transitions
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-rainbow mb-4"
          >
            {categories[activeCategory].titleText}
          </motion.h2>
        </AnimatePresence>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our AI coaches analyze your goals, values, and journey to connect you with like-minded individuals who can enrich your path to wellness and growth.
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
                transition={{ duration: 0.3 }} // Reduced from 0.5 to 0.3 for faster transitions
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