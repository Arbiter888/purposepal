import { motion } from "framer-motion";
import { Heart, Users, Handshake } from "lucide-react";
import { ConnectionCategory } from "../community/ConnectionCategory";

const categories = [
  {
    title: "Business Connections",
    description: "Find partners who share your vision and values for professional growth",
    icon: Handshake,
    iconColor: "text-cyan-500",
    match: {
      name: "Sarah Chen",
      image: "https://i.pravatar.cc/150?img=47",
      aiCoach: "Career AI Coach",
      aiSuggestion: "Sarah's focus on mindful leadership and sustainable business practices aligns perfectly with your entrepreneurial goals. Her experience in wellness integration in the workplace could create powerful synergies for both your ventures.",
      interests: ["Entrepreneurship", "Wellness", "Innovation"]
    }
  },
  {
    title: "Friendship Matches",
    description: "Connect with like-minded individuals who share your interests and values",
    icon: Users,
    iconColor: "text-purple-500",
    match: {
      name: "Michael Rivera",
      image: "https://i.pravatar.cc/150?img=68",
      aiCoach: "Wellness AI Coach",
      aiSuggestion: "Michael's dedication to personal growth and meditation practice resonates with your spiritual journey. His experience organizing wellness retreats could offer valuable perspectives for your own practice.",
      interests: ["Meditation", "Fitness", "Reading"]
    }
  },
  {
    title: "Romantic Connections",
    description: "Discover meaningful relationships based on shared values and life goals",
    icon: Heart,
    iconColor: "text-pink-500",
    match: {
      name: "Emma Thompson",
      image: "https://i.pravatar.cc/150?img=45",
      aiCoach: "Relationship AI Coach",
      aiSuggestion: "Emma's approach to life-work balance and spiritual growth mirrors yours beautifully. Your shared values around mindfulness and personal development suggest a potential for deep, meaningful connection.",
      interests: ["Travel", "Wellness", "Arts"]
    }
  }
];

const CommunityHealth = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient-rainbow mb-4">
          AI-Powered Community Matching
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our AI coaches analyze your goals, values, and journey to connect you with like-minded individuals who can enrich your path to wellness and growth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <ConnectionCategory
            key={category.title}
            {...category}
          />
        ))}
      </div>
    </section>
  );
};

export default CommunityHealth;