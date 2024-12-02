import { motion } from "framer-motion";
import { Star, MessageCircle, Video, HandHeart, Bot } from "lucide-react";

const professionals = [
  {
    name: "Dr. Sarah Johnson",
    title: "BornPurpose Career Expert Friend",
    rating: 4.9,
    reviews: 128,
    image: "https://i.pravatar.cc/150?img=1",
    specialties: ["Career Transition", "Leadership", "Work-Life Balance"],
    faithBased: false,
  },
  {
    name: "Rabbi David Cohen",
    title: "BornPurpose Faith Expert Friend",
    rating: 5.0,
    reviews: 156,
    image: "https://i.pravatar.cc/150?img=4",
    specialties: ["Jewish Spirituality", "Life Purpose", "Values Integration"],
    faithBased: true,
  },
  {
    name: "Imam Hassan Ahmed",
    title: "BornPurpose Spiritual Expert Friend",
    rating: 4.9,
    reviews: 142,
    image: "https://i.pravatar.cc/150?img=5",
    specialties: ["Islamic Mindfulness", "Personal Growth", "Community Building"],
    faithBased: true,
  },
  {
    name: "Pastor Grace Williams",
    title: "BornPurpose Faith Expert Friend",
    rating: 4.8,
    reviews: 134,
    image: "https://i.pravatar.cc/150?img=6",
    specialties: ["Biblical Counseling", "Purpose Discovery", "Faith Journey"],
    faithBased: true,
  },
];

const ProfessionalDirectory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gradient-aurora mb-4">Meet Your BornPurpose Expert Friends</h2>
        <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto">
          Your AI avatar coach can introduce you to these trusted experts who are ready to support your journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {professionals.map((professional, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass p-8 rounded-2xl hover-lift group"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                src={professional.image}
                alt={professional.name}
                className="w-20 h-20 rounded-full object-cover ring-2 ring-white/20 group-hover:ring-white/40 transition-all"
              />
              <div>
                <h3 className="text-xl font-semibold text-gradient">{professional.name}</h3>
                <p className="text-base text-muted-foreground">{professional.title}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-lg">{professional.rating}</span>
              <span className="text-muted-foreground">({professional.reviews} reviews)</span>
              {professional.faithBased && (
                <HandHeart className="w-5 h-5 ml-2 text-gradient" />
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-base font-medium mb-3">Specialties:</p>
              <div className="flex flex-wrap gap-2">
                {professional.specialties.map((specialty, i) => (
                  <span 
                    key={i} 
                    className="glass px-4 py-2 rounded-full text-sm group-hover:bg-white/10 transition-colors"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 glass px-4 py-3 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Bot className="w-5 h-5" />
                <span>Connect via AI Coach</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalDirectory;