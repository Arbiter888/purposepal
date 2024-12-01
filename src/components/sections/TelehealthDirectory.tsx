import { motion } from "framer-motion";
import { 
  Brain, 
  Salad, 
  Stethoscope, 
  Clock,
  MessageCircle,
  Video
} from "lucide-react";

const services = [
  {
    name: "Mental Health Therapy",
    icon: Brain,
    emoji: "🧠",
    credits: 50,
    description: "Virtual therapy sessions with licensed mental health professionals. Get support for anxiety, depression, stress, and more.",
    duration: "50 minutes",
    features: [
      "Video counseling sessions",
      "Cognitive behavioral therapy",
      "Stress management techniques",
      "Mental health assessments"
    ]
  },
  {
    name: "Nutrition Consultation",
    icon: Salad,
    emoji: "🥗",
    credits: 35,
    description: "Virtual consultations with registered dietitians for personalized nutrition advice and meal planning",
    duration: "30 minutes",
    features: [
      "Personalized meal plans",
      "Diet assessments",
      "Weight management guidance",
      "Nutritional counseling"
    ]
  },
  {
    name: "General Practitioner",
    icon: Stethoscope,
    emoji: "👨‍⚕️",
    credits: 40,
    description: "Online consultations with licensed physicians for general health concerns and medical advice",
    duration: "30 minutes",
    features: [
      "General health check-ups",
      "Prescription renewals",
      "Basic health assessments",
      "Medical consultations"
    ]
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
          Virtual Healthcare Services
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with healthcare professionals from the comfort of your home
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
              <div className="p-3 glass rounded-xl flex items-center gap-2">
                <service.icon className="w-8 h-8 text-gradient-candy" />
                <span className="text-2xl">{service.emoji}</span>
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

            <div className="mb-6">
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Services Include:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gradient-sunshine">
                {service.credits} Credits
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass px-4 py-2 rounded-full text-gradient-candy hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass px-4 py-2 rounded-full text-gradient-candy hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  Video
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TelehealthDirectory;