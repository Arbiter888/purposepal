import { motion } from "framer-motion";
import { Heart, Users, Handshake, Brain, Target, ArrowRight, Bot, Sparkles, MessageCircle } from "lucide-react";

const featuredMatches = [
  {
    name: "Sarah Chen",
    type: "Business Match",
    image: "https://i.pravatar.cc/150?img=47",
    aiSuggestion: "Based on Sarah's focus on mindful leadership and your interest in sustainable business practices, I believe you two would make excellent business partners. She's also passionate about wellness integration in the workplace, which aligns with your goals.",
    interests: ["Entrepreneurship", "Wellness", "Innovation"],
    icon: Handshake,
    iconColor: "text-cyan-500",
    aiCoach: "Career AI Coach"
  },
  {
    name: "Michael Rivera",
    type: "Friendship Match",
    image: "https://i.pravatar.cc/150?img=68",
    aiSuggestion: "I noticed you both share a deep interest in personal development and meditation. Michael's experience in organizing wellness retreats could complement your journey perfectly. You both value authentic connections and spiritual growth.",
    interests: ["Meditation", "Fitness", "Reading"],
    icon: Users,
    iconColor: "text-purple-500",
    aiCoach: "Wellness AI Coach"
  },
  {
    name: "Emma Thompson",
    type: "Romantic Match",
    image: "https://i.pravatar.cc/150?img=45",
    aiSuggestion: "Emma's approach to life-work balance and spiritual growth mirrors yours beautifully. You both prioritize personal development and have compatible values around mindfulness and wellness. I think you'd have meaningful conversations about your spiritual journeys.",
    interests: ["Travel", "Wellness", "Arts"],
    icon: Heart,
    iconColor: "text-pink-500",
    aiCoach: "Relationship AI Coach"
  },
];

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
  >
    <Icon className={`w-12 h-12 mb-4 ${color}`} />
    <h3 className="text-xl font-semibold text-gradient-neon mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const MatchCard = ({ match, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300"
  >
    <div className="flex items-start gap-4 mb-4">
      <img
        src={match.image}
        alt={match.name}
        className="w-16 h-16 rounded-full object-cover ring-2 ring-white/20"
      />
      <div>
        <h4 className="font-semibold text-gradient">{match.name}</h4>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <match.icon className={`w-4 h-4 ${match.iconColor}`} />
          <span>{match.type}</span>
        </div>
      </div>
    </div>
    
    <div className="mb-4 glass bg-white/5 p-4 rounded-xl">
      <div className="flex items-start gap-3">
        <Bot className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
        <div className="space-y-2">
          <div className="text-sm text-secondary font-medium">{match.aiCoach}</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {match.aiSuggestion}
          </p>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-2">
      {match.interests.map((interest) => (
        <span
          key={interest}
          className="text-xs px-3 py-1 rounded-full glass bg-white/5"
        >
          {interest}
        </span>
      ))}
    </div>
    
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full mt-4 flex items-center justify-center gap-2 glass px-4 py-2 rounded-full hover:bg-white/10 transition-all text-sm"
    >
      <MessageCircle className="w-4 h-4" />
      <span>Connect through AI Coach</span>
    </motion.button>
  </motion.div>
);

const ProcessStep = ({ icon: Icon, title, description }) => (
  <div className="glass p-4 rounded-xl">
    <div className="flex items-center gap-4">
      <Icon className="w-6 h-6 text-gradient-sunshine" />
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

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
        <FeatureCard
          icon={Heart}
          title="Romantic Connections"
          description="Find meaningful relationships with partners who share your wellness journey and spiritual values"
          color="text-pink-500"
        />
        <FeatureCard
          icon={Users}
          title="Friendship Matches"
          description="Connect with like-minded individuals who complement your interests and support your growth"
          color="text-purple-500"
        />
        <FeatureCard
          icon={Handshake}
          title="Business Networks"
          description="Build professional relationships with others who align with your values and aspirations"
          color="text-cyan-500"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-4">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">AI Coach Suggestions</span>
          </div>
          <h3 className="text-2xl font-semibold text-gradient-neon">
            Personalized Match Recommendations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredMatches.map((match, index) => (
            <MatchCard key={match.name} match={match} index={index} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 max-w-4xl mx-auto glass p-8 rounded-2xl"
      >
        <h3 className="text-2xl font-semibold text-gradient-neon mb-6 text-center">How AI Matching Works</h3>
        <div className="space-y-6">
          <ProcessStep
            icon={Brain}
            title="Deep Understanding"
            description="AI coaches analyze your goals, interests, and lifestyle patterns"
          />
          <ProcessStep
            icon={Target}
            title="Precise Matching"
            description="Advanced algorithms find meaningful connections based on compatibility"
          />
          <ProcessStep
            icon={ArrowRight}
            title="Guided Introductions"
            description="AI coaches facilitate natural connections and conversations"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CommunityHealth;
