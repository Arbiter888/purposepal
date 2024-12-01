import { motion } from "framer-motion";
import { Brain, Apple, Dumbbell, Heart, Book, Star } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Mental Wellness",
    description: "AI-powered support for meditation, stress management, and emotional well-being"
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    description: "Personalized meal plans and mindful eating practices aligned with your values"
  },
  {
    icon: Dumbbell,
    title: "Fitness Coaching",
    description: "Custom workout plans and real-time form guidance for optimal results"
  },
  {
    icon: Heart,
    title: "Spiritual Growth",
    description: "Faith-based guidance and support for your spiritual journey"
  },
  {
    icon: Book,
    title: "Personal Development",
    description: "Tailored learning paths and skill development programs"
  },
  {
    icon: Star,
    title: "Goal Achievement",
    description: "Strategic planning and accountability for reaching your goals"
  }
];

const FeaturesShowcase = () => {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient-mystic mb-4">Comprehensive Support</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience holistic growth with our AI-powered features designed to support every aspect of your journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <feature.icon className="w-12 h-12 mb-4 text-gradient" />
            <h3 className="text-xl font-semibold text-gradient-mystic mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesShowcase;