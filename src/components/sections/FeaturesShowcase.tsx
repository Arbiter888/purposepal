import { motion } from "framer-motion";
import { Brain, Apple, Dumbbell, Heart, Book, Star, DollarSign } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Mental Wellness",
    description: [
      "24/7 AI-powered emotional support and guidance",
      "Personalized meditation and stress management techniques",
      "Real-time mood tracking and pattern recognition"
    ],
    savings: "Save $200+/month on traditional therapy sessions",
    costComparison: "Traditional therapy: $150-200/session vs. Unlimited AI support"
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    description: [
      "Custom meal plans aligned with your goals and preferences",
      "Real-time nutritional analysis and recommendations",
      "Smart grocery lists and recipe suggestions"
    ],
    savings: "Save $120+/month on nutritionist consultations",
    costComparison: "Nutritionist: $100/session vs. Continuous AI guidance"
  },
  {
    icon: Dumbbell,
    title: "Fitness Coaching",
    description: [
      "Personalized workout plans with form guidance",
      "Progress tracking and adaptive programming",
      "Injury prevention recommendations"
    ],
    savings: "Save $250+/month on personal training",
    costComparison: "Personal trainer: $60-80/session vs. Daily AI coaching"
  },
  {
    icon: Heart,
    title: "Spiritual Growth",
    description: [
      "Guided spiritual practices and meditation sessions",
      "Personal faith development resources",
      "Community connection opportunities"
    ],
    savings: "Save $100+/month on spiritual counseling",
    costComparison: "Spiritual advisor: $80-100/session vs. Unlimited access"
  },
  {
    icon: Book,
    title: "Personal Development",
    description: [
      "Customized learning paths and skill development",
      "Progress tracking and milestone achievements",
      "Resource library and expert insights"
    ],
    savings: "Save $150+/month on life coaching",
    costComparison: "Life coach: $125/session vs. Continuous guidance"
  },
  {
    icon: Star,
    title: "Goal Achievement",
    description: [
      "Strategic goal planning and breakdown",
      "Progress tracking and accountability tools",
      "Milestone celebration and adjustment support"
    ],
    savings: "Save $180+/month on achievement coaching",
    costComparison: "Achievement coach: $150/session vs. Daily support"
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
              
              <div className="relative z-10 flex flex-col items-start">
                <feature.icon className="w-12 h-12 text-gradient-aurora transform group-hover:scale-110 transition-transform duration-500" />
                
                <h3 className="text-xl font-semibold text-gradient-aurora mt-3 mb-3 group-hover:text-gradient-rainbow transition-all duration-500">
                  {feature.title}
                </h3>
                
                <ul className="space-y-2 mb-6">
                  {feature.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground/90 group-hover:text-muted-foreground transition-colors duration-500">
                      <span className="text-secondary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 p-4 glass rounded-xl bg-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-gradient-sunshine" />
                    <p className="font-semibold text-gradient-sunshine">{feature.savings}</p>
                  </div>
                  <p className="text-sm text-muted-foreground/80">{feature.costComparison}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesShowcase;
