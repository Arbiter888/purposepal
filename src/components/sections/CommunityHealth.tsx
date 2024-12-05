import { motion } from "framer-motion";
import { Heart, Users, Handshake, Brain, Target, ArrowRight, Bot, Sparkles } from "lucide-react";

const featuredMatches = [
  {
    name: "Sarah Chen",
    type: "Business Match",
    image: "https://i.pravatar.cc/150?img=47",
    reason: "Both focused on sustainable business practices and mindful leadership",
    interests: ["Entrepreneurship", "Wellness", "Innovation"],
    icon: Handshake,
    iconColor: "text-cyan-500",
  },
  {
    name: "Michael Rivera",
    type: "Friendship Match",
    image: "https://i.pravatar.cc/150?img=68",
    reason: "Shared interest in personal development and spiritual growth",
    interests: ["Meditation", "Fitness", "Reading"],
    icon: Users,
    iconColor: "text-purple-500",
  },
  {
    name: "Emma Thompson",
    type: "Romantic Match",
    image: "https://i.pravatar.cc/150?img=45",
    reason: "Compatible life goals and values alignment",
    interests: ["Travel", "Wellness", "Arts"],
    icon: Heart,
    iconColor: "text-pink-500",
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
    
    <div className="mb-4">
      <div className="flex items-start gap-2 text-sm text-muted-foreground">
        <Bot className="w-4 h-4 mt-1 text-secondary" />
        <p>{match.reason}</p>
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
        <h2 className="text-4xl font-bold text-gradient-neon mb-4">Community Matching System</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Based on your goals and coach recommendations, our AI-powered system matches you with like-minded individuals across three dimensions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        <FeatureCard
          icon={Heart}
          title="Romantic Matches"
          description="Find meaningful connections with partners who share your wellness journey and lifestyle goals"
          color="text-pink-500"
        />
        <FeatureCard
          icon={Users}
          title="Friendship Matches"
          description="Connect with like-minded individuals who complement your interests and support your personal growth"
          color="text-purple-500"
        />
        <FeatureCard
          icon={Handshake}
          title="Business Matches"
          description="Network with professionals who align with your career aspirations and entrepreneurial goals"
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
            <span className="text-sm font-medium text-secondary">Featured Matches</span>
          </div>
          <h3 className="text-2xl font-semibold text-gradient-neon">
            Example Matches Suggested by AI Coaches
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
        <h3 className="text-2xl font-semibold text-gradient-neon mb-6 text-center">How Matching Works</h3>
        <div className="space-y-6">
          <ProcessStep
            icon={Brain}
            title="AI-Powered Analysis"
            description="Our system analyzes your goals, interests, and lifestyle patterns"
          />
          <ProcessStep
            icon={Target}
            title="Coach Recommendations"
            description="Personal coaches provide insights to enhance matching accuracy"
          />
          <ProcessStep
            icon={ArrowRight}
            title="Continuous Learning"
            description="The system evolves with your feedback and changing preferences"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default CommunityHealth;
