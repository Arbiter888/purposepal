import { motion } from "framer-motion";
import { Check, Users, Crown } from "lucide-react";

const plans = [
  {
    name: "Pro",
    price: "$29",
    description: "Your personal AI Avatar Coach for growth",
    icon: Users,
    features: [
      "24/7 AI Avatar Coach access (10 credits/session)",
      "2 Expert Friend introductions/month (50 credits each)",
      "Smart goal tracking by your AI Coach (30 credits)",
      "Priority AI response time",
      "Basic wellness planning with AI",
      "Progress analytics from your coach",
      "Regular check-ins with your AI Avatar"
    ],
    credits: "200 credits/month",
    creditValue: "Perfect for regular AI coaching and guidance",
    savings: "Save up to $450/month",
    comparison: "Traditional coaching: $480/month vs. $29/month for AI-powered support",
    buttonColor: "text-gradient-candy"
  },
  {
    name: "Whole Life",
    price: "$99",
    description: "Enhanced AI coaching with expert support",
    icon: Crown,
    features: [
      "Unlimited AI Avatar Coach access",
      "6 Expert Friend introductions/month",
      "Advanced goal tracking & insights",
      "1-on-1 expert consultations",
      "Priority scheduling with experts",
      "Custom AI-powered programs",
      "Family access to AI coaching",
      "Exclusive community events",
      "Emergency expert support"
    ],
    credits: "500 credits/month",
    creditValue: "Full access to AI coaching and expert network",
    savings: "Save up to $900/month",
    comparison: "Traditional services: $1000+/month vs. $99/month for comprehensive support",
    buttonColor: "text-gradient-sunshine"
  },
  {
    name: "Life Together",
    price: "$199",
    description: "Community-focused transformation with AI guidance",
    icon: Users,
    features: [
      "Everything in Whole Life plan",
      "Advanced community matching",
      "Personalized group activities",
      "Community leadership opportunities",
      "Group goal setting and tracking",
      "Exclusive community events",
      "Priority community support",
      "Custom group challenges",
      "Mentorship opportunities",
      "24/7 community access"
    ],
    credits: "Unlimited credits",
    creditValue: "Complete AI and community support for transformation",
    savings: "Save up to $2000/month",
    comparison: "Traditional programs: $2200+/month vs. $199/month for AI-powered community",
    buttonColor: "text-gradient-aurora"
  }
];

const PricingSection = () => {
  const handleGetStarted = (planName: string) => {
    // Handle the get started action
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
