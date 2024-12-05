import { motion } from "framer-motion";
import { Heart, Users, Handshake, Brain, Target, ArrowRight, Sparkles, MessageSquare, UserCheck, Zap } from "lucide-react";
import { ConnectionCategory } from "../community/ConnectionCategory";
import { ProcessStep } from "../community/ProcessStep";

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
        <h2 className="text-4xl font-bold text-gradient-neon mb-4">AI-Powered Community Matching</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our AI coaches analyze your goals, values, and journey to connect you with like-minded individuals who can enrich your path to wellness and growth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {categories.map((category, index) => (
          <ConnectionCategory
            key={category.title}
            {...category}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">How AI Matching Works</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">Intelligent Connection Process</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our sophisticated AI system uses multiple layers of analysis to ensure meaningful and compatible connections.
          </p>
        </div>
        
        <div className="space-y-6">
          <ProcessStep
            index={0}
            icon={Brain}
            title="Deep Understanding"
            description="AI analyzes your personality traits, communication style, and life experiences through natural conversations"
          />
          <ProcessStep
            index={1}
            icon={Target}
            title="Precise Matching"
            description="Advanced algorithms identify potential connections based on compatibility scores across multiple dimensions"
          />
          <ProcessStep
            index={2}
            icon={MessageSquare}
            title="Guided Conversations"
            description="AI coaches facilitate initial interactions and suggest relevant topics to discuss"
          />
          <ProcessStep
            index={3}
            icon={UserCheck}
            title="Compatibility Verification"
            description="Continuous analysis of interaction patterns to ensure meaningful connection development"
          />
          <ProcessStep
            index={4}
            icon={Zap}
            title="Dynamic Adaptation"
            description="AI learns from your feedback and interactions to improve future matches and suggestions"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CommunityHealth;