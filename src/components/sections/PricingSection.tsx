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
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient">Choose Your Journey</h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Select the plan that best fits your transformation goals
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`glass p-8 rounded-2xl hover-lift relative ${
              plan.name === "Pro" ? "border-2 border-secondary" : ""
            }`}
          >
            {plan.name === "Pro" && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="flex items-center justify-center mb-6">
              <plan.icon className="w-12 h-12 text-gradient" />
            </div>
            
            <h3 className="text-2xl font-semibold text-gradient mb-2">{plan.name}</h3>
            <p className="text-muted-foreground mb-4">{plan.description}</p>
            <div className="text-4xl font-bold text-gradient mb-6">{plan.price}<span className="text-lg">/month</span></div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full glass px-6 py-3 rounded-full font-medium hover-lift transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;