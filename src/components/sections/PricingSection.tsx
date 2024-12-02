import { motion } from "framer-motion";
import { Check, MessageSquare, Users, Crown, Globe, DollarSign } from "lucide-react";

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
    comparison: "Traditional coaching: $480/month vs. $29/month for AI-powered support"
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
    comparison: "Traditional services: $1000+/month vs. $99/month for comprehensive support"
  },
  {
    name: "Another Life",
    price: "$199",
    description: "Global transformation with AI guidance",
    icon: Globe,
    features: [
      "Everything in Whole Life plan",
      "AI-guided relocation planning",
      "Expert visa consultation",
      "Global housing search assistance",
      "Cultural integration coaching",
      "Language learning with AI",
      "International banking guidance",
      "Global career coaching",
      "Expat community access",
      "24/7 global transition support"
    ],
    credits: "Unlimited credits",
    creditValue: "Complete AI and expert support for global transitions",
    savings: "Save up to $2000/month",
    comparison: "Traditional relocation: $2200+/month vs. $199/month for AI-powered support"
  },
];

const PricingSection = () => {
  const handleGetStarted = (planName: string, price: string) => {
    const subject = `Get Started with BornPurpose ${planName} Plan`;
    const body = `Hello,\n\nI would like to get started with the ${planName} plan at ${price}/month.\n\nPlease provide me with more information about getting started.`;
    
    const mailtoLink = `mailto:membership@bornpurpose.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="section-padding relative overflow-hidden">
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
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <plan.icon className="w-12 h-12 text-gradient relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 blur-xl" />
                </div>
              </div>
              
              <h3 className={`text-2xl font-semibold ${
                plan.name === "Pro" 
                  ? "text-gradient-candy"
                  : plan.name === "Whole Life" 
                    ? "text-gradient-sunshine"
                    : "text-gradient-aurora"
              } mb-2`}>{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className={`text-4xl font-bold ${
                plan.name === "Pro" 
                  ? "text-gradient-candy"
                  : plan.name === "Whole Life"
                    ? "text-gradient-sunshine"
                    : "text-gradient-aurora"
              } mb-6`}>
                {plan.price}<span className="text-lg">/month</span>
              </div>
              
              <div className="mb-6 p-4 glass rounded-xl">
                <p className="text-lg font-semibold mb-2">{plan.credits}</p>
                <p className="text-sm text-muted-foreground">{plan.creditValue}</p>
              </div>

              <div className="mb-6 p-4 glass rounded-xl bg-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-gradient-sunshine" />
                  <p className="font-semibold text-gradient-sunshine">{plan.savings}</p>
                </div>
                <p className="text-sm text-muted-foreground/80">{plan.comparison}</p>
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
                onClick={() => handleGetStarted(plan.name, plan.price)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full glass px-6 py-3 rounded-full font-medium hover-lift transition-all duration-300
                  border border-white/10 hover:border-white/20 backdrop-blur-lg
                  ${plan.name === "Pro" 
                    ? "text-gradient-candy" 
                    : plan.name === "Whole Life"
                      ? "text-gradient-sunshine"
                      : "text-gradient-aurora"} 
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