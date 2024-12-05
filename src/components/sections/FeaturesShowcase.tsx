import { motion } from "framer-motion";
import { Brain, Heart, Globe, DollarSign } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Personal Growth",
    description: [
      "Your dedicated AI avatar coach available 24/7",
      "Personalized development roadmaps",
      "Access to wellness, nutrition & fitness guidance"
    ],
    savings: "Save $200+/month on traditional coaching",
    costComparison: "Traditional coaching: $150-200/session vs. Unlimited AI support including wellness, nutrition, and fitness coaching"
  },
  {
    icon: Heart,
    title: "Life Design",
    description: [
      "Comprehensive life assessment tools",
      "Spiritual & financial wellness guidance",
      "Holistic lifestyle optimization"
    ],
    savings: "Save $300+/month on life coaching",
    costComparison: "Life coach: $200/session vs. Continuous guidance including spiritual and financial coaching"
  },
  {
    icon: Globe,
    title: "Global Living",
    description: [
      "International relocation guidance",
      "Cultural integration support",
      "Access to global wellness resources"
    ],
    savings: "Save $500+/month on relocation services",
    costComparison: "Relocation consultant: $250/hour vs. Complete support package with worldwide wellness network"
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
        <h2 className="text-4xl font-bold text-gradient-aurora mb-4">Meet Presence, Your AI Avatar Coach</h2>
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