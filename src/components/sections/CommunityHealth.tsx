import { motion } from "framer-motion";
import { Heart, Users, Handshake, Brain, Target, Sparkles, MessageSquare, UserCheck, Zap } from "lucide-react";
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

const experts = [
  {
    name: "Dr. Sarah Chen",
    role: "Life Purpose Coach",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80",
    description: "Helping you align career and personal goals",
    expertise: ["Career Development", "Life Planning", "Personal Growth"]
  },
  {
    name: "Emma Thompson",
    role: "Relationship Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    description: "Creating meaningful connections through understanding",
    expertise: ["Dating Strategy", "Communication", "Self-Discovery"]
  },
  {
    name: "Dr. Michelle Wang",
    role: "Wellness Coach",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    description: "Balancing mind, body, and relationships",
    expertise: ["Holistic Wellness", "Mindfulness", "Lifestyle Design"]
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
        className="mt-16 max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Your Journey to Meaningful Connections</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">Personalized Matching Process</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform guides you through a journey of self-discovery to meaningful connections
          </p>
        </div>
        
        <div className="space-y-6">
          <ProcessStep
            index={0}
            icon={Brain}
            title="AI Understanding"
            description="Presence AI engages in natural conversations to understand your personality, aspirations, and life goals"
          />
          <ProcessStep
            index={1}
            icon={UserCheck}
            title="Expert Guidance"
            description="Connect with professional coaches who help refine your goals and prepare you for meaningful relationships"
          />
          <ProcessStep
            index={2}
            icon={Target}
            title="Personalized Matching"
            description="Our AI combines insights from your journey and expert guidance to find truly compatible connections"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h4 className="text-2xl font-semibold text-center mb-8">Meet Our Expert Guides</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <motion.div
                key={expert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h5 className="text-white font-semibold text-lg">{expert.name}</h5>
                    <p className="text-white/80 text-sm">{expert.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{expert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {expert.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full glass bg-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommunityHealth;
