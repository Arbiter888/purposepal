import { motion } from "framer-motion";
import { ArrowRight, Check, Apple, Dumbbell, Brain, ShoppingBag } from "lucide-react";
import ChatPreview from "@/components/ChatPreview";
import ProfessionalDirectory from "@/components/ProfessionalDirectory";
import HeroSection from "@/components/HeroSection";
import FaithBasedServices from "@/components/FaithBasedServices";
import EnhancedChatPreview from "@/components/EnhancedChatPreview";

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

const aiServices = [
  {
    icon: Apple,
    title: "AI Dietician",
    description: "Get personalized meal plans and nutrition advice tailored to your goals and preferences.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Coach",
    description: "Custom workout plans and real-time form corrections for optimal results.",
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    description: "24/7 support for meditation, stress management, and emotional well-being.",
  },
];

const recommendedProducts = [
  {
    title: "Premium Yoga Mat",
    description: "Perfect for your morning meditation routine",
    price: "$49.99",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9b3?w=500",
  },
  {
    title: "Smart Food Scale",
    description: "Track your portions with precision",
    price: "$79.99",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?w=500",
  },
  {
    title: "Mindfulness Journal",
    description: "Document your personal growth journey",
    price: "$24.99",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      
      {/* Faith-Based Services Section */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient">Faith-Based Guidance</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Integrate your spiritual journey with personal growth
          </p>
        </motion.div>
        <FaithBasedServices />
      </section>

      {/* Chat Preview Section */}
      <section className="section-padding bg-muted">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient mb-4">Experience AI Coaching</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized guidance from our advanced AI coach that understands both your professional goals and spiritual journey
          </p>
        </motion.div>
        <EnhancedChatPreview />
      </section>

      {/* AI Services Section */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient">AI-Powered Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Personalized guidance for every aspect of your life
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {aiServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover-lift"
            >
              <service.icon className="w-12 h-12 mb-4 text-gradient" />
              <h3 className="text-xl font-semibold text-gradient">{service.title}</h3>
              <p className="text-muted-foreground mt-2">{service.description}</p>
              <button className="mt-4 glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors w-full">
                Try Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recommended Products Section */}
      <section className="section-padding bg-muted">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient">Recommended for You</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Products and services aligned with your goals
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {recommendedProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover-lift overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <span className="inline-block glass px-3 py-1 rounded-full text-sm mb-2">
                {product.category}
              </span>
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-muted-foreground mt-2">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-gradient">{product.price}</span>
                <button className="glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
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
            <h2 className="text-4xl font-bold text-gradient">Features</h2>
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
                <h3 className="text-xl font-semibold text-gradient">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Directory Section */}
      <section className="section-padding bg-muted">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gradient">Meet Our Professionals</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect with experienced coaches and therapists
          </p>
        </motion.div>
        <ProfessionalDirectory />
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
            <h2 className="text-4xl font-bold text-gradient">Simple Pricing</h2>
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
          <h2 className="text-4xl font-bold text-gradient">Ready to Transform Your Life?</h2>
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
