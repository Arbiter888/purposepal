import { motion } from "framer-motion";
import { 
  Brain, 
  Salad, 
  Heart,
  Dumbbell,
  Clock,
  MessageCircle,
  Video
} from "lucide-react";

const services = [
  {
    name: "Mental Wellness Coach",
    title: "Licensed Therapist",
    icon: Brain,
    emoji: "🧠",
    credits: 50,
    description: "Virtual therapy sessions with licensed mental health professionals focused on holistic wellness and emotional balance.",
    duration: "50 minutes",
    features: [
      "Stress and anxiety management",
      "Mindfulness techniques",
      "Emotional wellness coaching",
      "Personal growth guidance"
    ]
  },
  {
    name: "Nutrition Expert",
    title: "Registered Dietitian",
    icon: Salad,
    emoji: "🥗",
    credits: 35,
    description: "Connect with certified nutritionists for personalized dietary guidance and healthy lifestyle planning.",
    duration: "30 minutes",
    features: [
      "Personalized meal planning",
      "Dietary assessments",
      "Nutritional counseling",
      "Wellness diet strategies"
    ]
  },
  {
    name: "Spiritual Guide",
    title: "Wellness Coach",
    icon: Heart,
    emoji: "✨",
    credits: 40,
    description: "Engage in meaningful conversations about spiritual wellness and personal development with experienced guides.",
    duration: "45 minutes",
    features: [
      "Spiritual wellness coaching",
      "Meditation guidance",
      "Mindfulness practices",
      "Personal growth support"
    ]
  },
  {
    name: "Fitness Expert",
    title: "Certified Trainer",
    icon: Dumbbell,
    emoji: "💪",
    credits: 45,
    description: "Virtual fitness consultations with certified trainers for personalized exercise guidance and wellness planning.",
    duration: "40 minutes",
    features: [
      "Custom workout planning",
      "Form and technique guidance",
      "Fitness goal setting",
      "Exercise modifications"
    ]
  }
];

const TelehealthDirectory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient-candy mb-4">
          Connect with Wellness Experts
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Expert guidance for your mind, body, and spirit through secure virtual consultations
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-2xl hover-lift group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 glass rounded-xl">
                <service.icon className="w-8 h-8 text-gradient" />
                <span className="text-2xl ml-2">{service.emoji}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gradient-candy">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.title}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{service.duration}</span>
            </div>
            
            <p className="text-base text-muted-foreground mb-6">
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
    </div>
  );
};

export default TelehealthDirectory;