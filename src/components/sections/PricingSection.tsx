import { motion } from "framer-motion";
import { Check, Users, Crown } from "lucide-react";

const plans = [
  {
    name: "Pro",
    price: "$29",
    description: "Essential AI coaching for personal growth",
    icon: Users,
    features: [
      "Daily AI coaching sessions",
      "Personal goal tracking",
      "Basic wellness planning",
      "Progress reports",
      "Community access"
    ],
    credits: "200 credits/month",
    creditValue: "Perfect for regular coaching support",
    savings: "Save $450/month",
    comparison: "vs. Traditional coaching at $480/month",
    buttonColor: "text-gradient-candy"
  },
  {
    name: "Whole Life",
    price: "$99",
    description: "Comprehensive AI coaching & expert support",
    icon: Crown,
    features: [
      "Unlimited AI coaching",
      "Priority expert matching",
      "Advanced wellness programs",
      "Custom growth roadmaps",
      "Expert consultations",
      "Family account access"
    ],
    credits: "500 credits/month",
    creditValue: "Full access to AI & expert support",
    savings: "Save $900/month",
    comparison: "vs. Traditional services at $1000/month",
    buttonColor: "text-gradient-sunshine"
  },
  {
    name: "Life Together",
    price: "$199",
    description: "Premium community & transformation support",
    icon: Users,
    features: [
      "All Whole Life features",
      "VIP community matching",
      "Group coaching sessions",
      "Leadership opportunities",
      "Exclusive events access",
      "Priority support 24/7"
    ],
    credits: "Unlimited credits",
    creditValue: "Complete access to all services",
    savings: "Save $2000/month",
    comparison: "vs. Premium programs at $2200/month",
    buttonColor: "text-gradient-aurora"
  }
];

const PricingSection = () => {
  const handleGetStarted = (planName: string) => {
    console.log(`Getting started with ${planName} plan`);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient-sunshine mb-4">Choose Your Journey</h2>
        <p className="text-xl text-muted-foreground">
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
            className="glass p-8 rounded-2xl relative"
          >
            <div className="mb-8">
              <h3 className={`text-2xl font-bold ${plan.buttonColor} mb-2`}>{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
              <div className={`text-4xl font-bold ${plan.buttonColor} mb-6`}>
                {plan.price}<span className="text-lg">/month</span>
              </div>
            </div>

            <div className="glass p-4 rounded-xl mb-6">
              <p className="font-semibold mb-1">{plan.credits}</p>
              <p className="text-sm text-muted-foreground">{plan.creditValue}</p>
            </div>

            <div className="glass p-4 rounded-xl mb-6">
              <p className={`font-semibold ${plan.buttonColor} mb-1`}>{plan.savings}</p>
              <p className="text-sm text-muted-foreground">{plan.comparison}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleGetStarted(plan.name)}
              className={`w-full py-3 px-6 rounded-full glass ${plan.buttonColor} font-semibold transition-all duration-300 hover:scale-105`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
