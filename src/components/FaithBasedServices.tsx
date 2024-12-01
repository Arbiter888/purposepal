import { motion } from "framer-motion";
import { HandHeart, Users, Book, Heart } from "lucide-react";

const faithServices = [
  {
    icon: HandHeart,
    title: "Faith-Based Coaching",
    description: "Integrate your spiritual beliefs into your personal growth journey with coaches who share your values.",
  },
  {
    icon: Users,
    title: "Faith Community",
    description: "Connect with like-minded individuals from your faith community for support and fellowship.",
  },
  {
    icon: Book,
    title: "Spiritual Resources",
    description: "Access curated content and resources aligned with your faith tradition.",
  },
  {
    icon: Heart,
    title: "Values-Based Goals",
    description: "Set and achieve goals that align with your spiritual values and beliefs.",
  },
];

const FaithBasedServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {faithServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-2xl hover-lift group"
          >
            <div className="relative">
              <service.icon className="w-16 h-16 mb-6 text-gradient transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl font-semibold text-gradient mb-4">{service.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{service.description}</p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full glass px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 text-base font-medium group"
            >
              Learn More
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaithBasedServices;