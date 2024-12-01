import { motion } from "framer-motion";
import { Brain, Salad, Heart, Dumbbell, Clock, MessageCircle, Video } from "lucide-react";

const services = [
  {
    id: "wellness",
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
    id: "nutrition",
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
    id: "spiritual",
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
    id: "fitness",
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

interface TelehealthDirectoryProps {
  activeService: string;
}

const TelehealthDirectory = ({ activeService }: TelehealthDirectoryProps) => {
  const activeExpert = services.find(service => service.id === activeService) || services[0];
  const Icon = activeExpert.icon;

  return (
    <motion.div
      key={activeService}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass p-8 rounded-2xl hover-lift relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-50" />
      
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center text-4xl">
            {activeExpert.emoji}
          </div>
        </div>
        
        <div className="flex-grow space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-gradient-candy mb-1">
              {activeExpert.name}
            </h3>
            <p className="text-muted-foreground">
              {activeExpert.title}
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground">
            {activeExpert.description}
          </p>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{activeExpert.duration}</span>
          </div>
          
          <div className="space-y-2">
            <p className="font-medium">Services Include:</p>
            <ul className="grid grid-cols-2 gap-2">
              {activeExpert.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center justify-between pt-4">
            <div className="text-2xl font-bold text-gradient-sunshine">
              {activeExpert.credits} Credits
            </div>
            <div className="flex gap-3">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass px-6 py-3 rounded-full text-gradient-candy hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Now
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass px-6 py-3 rounded-full text-gradient-candy hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Video className="w-5 h-5" />
                Video Call
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TelehealthDirectory;