import { motion } from "framer-motion";
import { Heart, Users, Handshake, Brain, Target, Sparkles, MessageSquare, UserCheck, Zap } from "lucide-react";
import { ConnectionCategory } from "../community/ConnectionCategory";
import { ProcessStep } from "../community/ProcessStep";
import { TestimonialCard } from "../chat-preview/TestimonialCard";

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

const testimonials = [
  {
    quote: "The AI coach helped me find my perfect business partner. Our values and vision aligned perfectly!",
    author: "Sarah Chen",
    initials: "SC",
    image: "photo-1649972904349-6e44c42644a7",
    gradient: "bg-gradient-to-r from-secondary to-accent"
  },
  {
    quote: "Through expert guidance, I discovered what I truly wanted in relationships and found amazing connections.",
    author: "Emma Thompson",
    initials: "ET",
    image: "photo-1581091226825-a6a2a5aee158",
    gradient: "bg-gradient-to-r from-tertiary to-highlight"
  },
  {
    quote: "The personalized matching process introduced me to people who share my values and aspirations.",
    author: "Michael Rivera",
    initials: "MR",
    image: "photo-1581092795360-fd1ca04f0952",
    gradient: "bg-gradient-to-r from-highlight to-secondary"
  }
];

const processSteps = [
  {
    icon: Brain,
    title: "AI Understanding",
    description: "Presence AI engages in natural conversations to understand your personality, aspirations, and life goals",
    bgColor: "bg-red-500/20",
    iconColor: "text-red-500"
  },
  {
    icon: UserCheck,
    title: "Expert Guidance",
    description: "Connect with professional coaches who help refine your goals and prepare you for meaningful relationships",
    bgColor: "bg-amber-500/20",
    iconColor: "text-amber-500"
  },
  {
    icon: Target,
    title: "Personalized Matching",
    description: "Our AI combines insights from your journey and expert guidance to find truly compatible connections",
    bgColor: "bg-green-500/20",
    iconColor: "text-green-500"
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
          <h3 className="text-3xl font-bold mb-4">How AI Matching Works</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform guides you through a journey of self-discovery to meaningful connections
          </p>
        </div>
        
        <div className="space-y-6 mb-16">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              {...step}
              index={index}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h4 className="text-2xl font-semibold text-center mb-8">What Our Members Say</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CommunityHealth;
