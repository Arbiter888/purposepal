import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const features = [
  {
    title: "AI-Powered Coaching",
    description: "Get personalized guidance from our advanced AI coach, available 24/7.",
  },
  {
    title: "Goal Tracking",
    description: "Set and track your goals with our intuitive progress system.",
  },
  {
    title: "Professional Network",
    description: "Connect with mentors and experts in your field.",
  },
  {
    title: "Telehealth Integration",
    description: "Access healthcare professionals from the comfort of your home.",
  },
];

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

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-sm font-medium text-secondary">Welcome to BornPurpose</span>
          <h1 className="mt-6 text-6xl font-bold tracking-tight">
            Your AI-Powered
            <span className="text-gradient"> Life Coach</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Transform your life with personalized guidance and support from our advanced AI coach.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button className="glass px-8 py-3 rounded-full font-medium hover-lift">
              Get Started
              <ArrowRight className="ml-2 inline-block h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold">Features</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to achieve your goals
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover-lift"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold">Simple Pricing</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that's right for you
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover-lift"
              >
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <div className="mt-4 text-4xl font-bold">{plan.price}</div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold">Ready to Transform Your Life?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of users who are already achieving their goals with BornPurpose
          </p>
          <button className="mt-8 glass px-8 py-3 rounded-full font-medium hover-lift">
            Get Started Now
            <ArrowRight className="ml-2 inline-block h-4 w-4" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;