import { motion } from "framer-motion";
import { 
  Brain, 
  Salad, 
  Heart, 
  Stethoscope, 
  Users, 
  Pill,
  Clock
} from "lucide-react";

const services = [
  {
    name: "Mental Health Therapy",
    icon: Brain,
    credits: 50,
    description: "One-on-one sessions with licensed therapists",
    duration: "50 minutes"
  },
  {
    name: "Nutrition Consultation",
    icon: Salad,
    credits: 35,
    description: "Personalized dietary guidance from registered dietitians",
    duration: "30 minutes"
  },
  {
    name: "Cardiology",
    icon: Heart,
    credits: 60,
    description: "Heart health consultations with specialists",
    duration: "40 minutes"
  },
  {
    name: "General Medicine",
    icon: Stethoscope,
    credits: 40,
    description: "Primary care physician consultations",
    duration: "30 minutes"
  },
  {
    name: "Group Therapy",
    icon: Users,
    credits: 25,
    description: "Guided group sessions with others on similar journeys",
    duration: "60 minutes"
  },
  {
    name: "Medication Management",
    icon: Pill,
    credits: 45,
    description: "Prescription reviews and adjustments",
    duration: "25 minutes"
  }
];

const TelehealthDirectory = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient-candy mb-4">
          Telehealth Services Directory
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with healthcare professionals from various specialties
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 glass rounded-xl">
                <service.icon className="w-8 h-8 text-gradient-candy" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gradient-candy">
                  {service.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              {service.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gradient-sunshine">
                {service.credits} Credits
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass px-6 py-2 rounded-full text-gradient-candy hover:bg-white/10 transition-colors"
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TelehealthDirectory;