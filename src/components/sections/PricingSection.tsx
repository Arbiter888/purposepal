import { motion } from "framer-motion";
import { Check, MessageSquare, Users, Crown } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with AI-powered guidance",
    icon: MessageSquare,
    features: [
      "Basic AI chatbot access",
      "Goal setting tools",
      "Progress tracking",
      "Community forum access"
    ],
    credits: "10 credits/month",
    creditValue: "Each credit = 1 minute of AI chat time"
  },
  {
    name: "Pro",
    price: "$29",
    description: "Enhanced support for serious growth",
    icon: Users,
    features: [
      "Advanced AI coaching",
      "Priority support",
      "Professional network access",
      "Telehealth sessions",
      "Group coaching sessions",
      "Personalized wellness plans",
      "Progress analytics"
    ],
    credits: "100 credits/month",
    creditValue: "Credits can be used for AI chat (1 credit/min) or telehealth services (25-60 credits/session)"
  },
  {
    name: "Whole Life",
    price: "$99",
    description: "Complete transformation support",
    icon: Crown,
    features: [
      "Personal concierge service",
      "Everything in Pro plan",
      "1-on-1 expert consultations",
      "Priority scheduling",
      "Custom wellness programs",
      "Family account access",
      "Exclusive events access",
      "Emergency support line"
    ],
    credits: "400 credits/month",
    creditValue: "Unlimited AI chat + Premium credits for telehealth services"
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-secondary/20 via-accent/20 to-secondary/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl font-bold text-gradient-sunshine">Choose Your Journey</h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Select the plan that best fits your transformation goals
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`glass p-8 rounded-2xl hover-lift relative backdrop-blur-lg 
              ${plan.name === "Pro" ? "border-2 border-secondary/50" : "border border-white/10"}
              before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/5 before:to-transparent before:pointer-events-none
              after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-white/5 after:to-transparent after:pointer-events-none`}
          >
            {plan.name === "Pro" && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 glass px-4 py-1 rounded-full text-sm font-medium border border-secondary/50 backdrop-blur-md">
                Most Popular
              </div>
            )}
            
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <plan.icon className="w-12 h-12 text-gradient relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 blur-xl" />
                </div>
              </div>
              
              <h3 className={`text-2xl font-semibold ${
                plan.name === "Free" 
                  ? "text-gradient-aurora" 
                  : plan.name === "Pro" 
                    ? "text-gradient-candy"
                    : "text-gradient-sunshine"
              } mb-2`}>{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className={`text-4xl font-bold ${
                plan.name === "Free" 
                  ? "text-gradient-aurora" 
                  : plan.name === "Pro"
                    ? "text-gradient-candy"
                    : "text-gradient-sunshine"
              } mb-6`}>
                {plan.price}<span className="text-lg">/month</span>
              </div>
              
              <div className="mb-6 p-4 glass rounded-xl">
                <p className="text-lg font-semibold mb-2">{plan.credits}</p>
                <p className="text-sm text-muted-foreground">{plan.creditValue}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 group">
                    <div className="relative">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 relative z-10" />
                      <div className="absolute inset-0 bg-secondary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full glass px-6 py-3 rounded-full font-medium hover-lift transition-all duration-300
                  border border-white/10 hover:border-white/20 backdrop-blur-lg
                  ${plan.name === "Free" 
                    ? "text-gradient-aurora" 
                    : plan.name === "Pro"
                      ? "text-gradient-candy"
                      : "text-gradient-sunshine"} 
                  bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/15`}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;