import { motion } from "framer-motion";
import { Brain, Apple, Dumbbell, Heart, Book, Star } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Mental Wellness",
    description: "Access personalized AI-powered support for meditation, stress management, and emotional well-being. Our platform offers guided sessions, mood tracking, and adaptive techniques to help you maintain mental balance in your daily life."
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    description: "Receive customized meal plans and mindful eating practices aligned with your values and dietary preferences. Get real-time nutritional insights, recipe suggestions, and expert guidance to support your healthy eating journey."
  },
  {
    icon: Dumbbell,
    title: "Fitness Coaching",
    description: "Experience personalized workout plans with real-time form guidance for optimal results. Our AI coach adapts to your progress, provides motivation, and helps prevent injuries while working towards your fitness goals."
  },
  {
    icon: Heart,
    title: "Spiritual Growth",
    description: "Embark on a meaningful spiritual journey with faith-based guidance and support. Access daily devotionals, prayer tracking, and community connections to nurture your spiritual well-being and personal faith practice."
  },
  {
    icon: Book,
    title: "Personal Development",
    description: "Follow tailored learning paths and skill development programs designed for your growth. Track your progress, set meaningful goals, and access resources that align with your personal and professional aspirations."
  },
  {
    icon: Star,
    title: "Goal Achievement",
    description: "Transform your aspirations into reality with strategic planning and accountability tools. Our platform helps you break down large goals into manageable steps, track progress, and celebrate milestones along the way."
  }
];

const FeaturesShowcase = () => {
  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-tertiary/5" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl font-bold text-gradient-aurora mb-4">Comprehensive Support</h2>
        <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto">
          Experience holistic growth with our AI-powered features designed to support every aspect of your journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="group relative"
          >
            <div className="glass rounded-2xl p-8 h-full border border-white/10 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform duration-500" />
                  <feature.icon className="w-12 h-12 relative z-10 text-gradient-aurora transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <h3 className="text-xl font-semibold text-gradient-aurora mb-3 group-hover:text-gradient-rainbow transition-all duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground/90 group-hover:text-muted-foreground transition-colors duration-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesShowcase;