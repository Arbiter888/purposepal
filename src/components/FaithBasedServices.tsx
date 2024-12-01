import { motion } from "framer-motion";
import { PrayingHands, Users, Book, Heart } from "lucide-react";

const faithServices = [
  {
    icon: PrayingHands,
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
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {faithServices.map((service, index) => (
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
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FaithBasedServices;