import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: ["Basic AI coaching", "Goal setting", "Progress tracking"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Advanced AI coaching", "Priority support", "Professional network access", "Telehealth sessions"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom AI models", "Dedicated support", "API access", "Custom integrations"],
  },
];

const PricingSection = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient">Simple Pricing</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that's right for you
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass p-8 rounded-2xl hover-lift"
          >
            <h3 className="text-2xl font-semibold text-gradient">{plan.name}</h3>
            <div className="mt-4 text-4xl font-bold text-gradient">{plan.price}</div>
            <ul className="mt-8 space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full glass px-6 py-3 rounded-full font-medium hover-lift">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;