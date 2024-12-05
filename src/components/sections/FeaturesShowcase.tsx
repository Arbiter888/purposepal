import { motion } from "framer-motion";
import { Brain, Heart, Globe, Users, Sparkles, DollarSign } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Your Personal Guide",
    description: [
      "24/7 AI avatar coach support",
      "Personalized development roadmaps",
      "Comprehensive life assessment tools",
      "Spiritual & financial wellness guidance",
      "International relocation support"
    ],
    savings: "Save $500+/month on coaching services",
    costComparison: "Traditional coaching: $150-200/session vs. Unlimited AI support across all life areas"
  },
  {
    icon: Users,
    title: "Meet Her Friends",
    description: [
      "Connect with specialized AI coaches",
      "Wellness & nutrition guidance",
      "Spiritual & mindfulness support",
      "Fitness & health expertise",
      "Financial planning assistance"
    ],
    savings: "Save $300+/month on specialized coaching",
    costComparison: "Specialized coaches: $200+/session vs. Access to multiple AI expert coaches"
  },
  {
    icon: Sparkles,
    title: "Community Matchmaker",
    description: [
      "Connect with like-minded individuals",
      "Find relationship matches",
      "Discover business partnerships",
      "Access real-world experts",
      "Join supportive communities"
    ],
    savings: "Save $400+/month on networking services",
    costComparison: "Professional matchmaking: $250+/month vs. AI-powered connections and introductions"
  }
];

const FeaturesShowcase = () => {
  const totalMonthlySavings = features.reduce((acc, feature) => {
    const savingsMatch = feature.savings.match(/\$(\d+)/);
    return acc + (savingsMatch ? parseInt(savingsMatch[1]) : 0);
  }, 0);

  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-tertiary/5" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl font-bold text-gradient-aurora mb-4">Meet Presence, Your Personal Coach</h2>
        <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto mb-12">
          Meet your dedicated BornPurpose AI Avatar Coach - your personal guide to transformation. Experience 24/7 support and expert guidance tailored just for you. <span className="text-gradient-sunshine font-semibold">Save up to ${totalMonthlySavings}+ monthly</span> compared to traditional coaching services.
        </p>
        
        <div className="max-w-3xl mx-auto mb-16 relative">
          <div className="aspect-video rounded-2xl overflow-hidden glass border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/bMmirsbJPEc"
              title="Preview Your BornPurpose AI Avatar Coach"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-sm text-muted-foreground/70 mt-4">Preview how your personalized AI avatar coach will guide and support you on your journey</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
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
                
                <h3 className="text-xl font-semibold text-gradient-aurora mb-3 group-hover:text-gradient-rainbow transition-all duration-500">
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