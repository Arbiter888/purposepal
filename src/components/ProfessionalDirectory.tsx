import { motion } from "framer-motion";
import { Star, MessageCircle, Video, HandHeart } from "lucide-react";

const professionals = [
  {
    name: "Dr. Sarah Johnson",
    title: "Career Coach",
    rating: 4.9,
    reviews: 128,
    image: "https://i.pravatar.cc/150?img=1",
    specialties: ["Career Transition", "Leadership", "Work-Life Balance"],
    faithBased: false,
  },
  {
    name: "Rabbi David Cohen",
    title: "Faith-Based Life Coach",
    rating: 5.0,
    reviews: 156,
    image: "https://i.pravatar.cc/150?img=4",
    specialties: ["Jewish Spirituality", "Life Purpose", "Values Integration"],
    faithBased: true,
  },
  {
    name: "Imam Hassan Ahmed",
    title: "Spiritual Wellness Coach",
    rating: 4.9,
    reviews: 142,
    image: "https://i.pravatar.cc/150?img=5",
    specialties: ["Islamic Mindfulness", "Personal Growth", "Community Building"],
    faithBased: true,
  },
  {
    name: "Pastor Grace Williams",
    title: "Christian Life Coach",
    rating: 4.8,
    reviews: 134,
    image: "https://i.pravatar.cc/150?img=6",
    specialties: ["Biblical Counseling", "Purpose Discovery", "Faith Journey"],
    faithBased: true,
  },
];

const ProfessionalDirectory = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {professionals.map((professional, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass p-6 rounded-2xl hover-lift"
          >
            <div className="flex items-center gap-4">
              <img
                src={professional.image}
                alt={professional.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-gradient">{professional.name}</h3>
                <p className="text-sm text-muted-foreground">{professional.title}</p>
              </div>
            </div>
            
            <div className="mt-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>{professional.rating}</span>
              <span className="text-muted-foreground">({professional.reviews} reviews)</span>
              {professional.faithBased && (
                <HandHeart className="w-4 h-4 ml-2 text-gradient" />
              )}
            </div>
            
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Specialties:</p>
              <div className="flex flex-wrap gap-2">
                {professional.specialties.map((specialty, i) => (
                  <span key={i} className="glass px-3 py-1 rounded-full text-sm">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex gap-2">
              <button className="flex-1 glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Chat
              </button>
              <button className="flex-1 glass px-4 py-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <Video className="w-4 h-4" />
                Call
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalDirectory;
