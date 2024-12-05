import { motion } from "framer-motion";
import { Bot, MessageCircle } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ConnectionCategoryProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  match: {
    name: string;
    image: string;
    aiSuggestion: string;
    interests: string[];
    aiCoach: string;
  };
}

export const ConnectionCategory = ({
  title,
  description,
  icon: Icon,
  iconColor,
  match,
}: ConnectionCategoryProps) => {
  return (
    <motion.div
      className="glass p-8 rounded-2xl hover:scale-[1.02] transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className={`p-3 rounded-xl glass ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gradient-rainbow mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <motion.div 
        className="glass bg-white/5 p-6 rounded-xl mb-6"
        initial={{ rotateX: -180 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-start gap-4 mb-4">
          <motion.img
            src={match.image}
            alt={match.name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-white/20"
            whileHover={{ scale: 1.1 }}
          />
          <div>
            <h4 className="font-semibold text-gradient">{match.name}</h4>
            <p className="text-sm text-muted-foreground">Featured Match</p>
          </div>
        </div>
        
        <div className="mb-4 glass bg-white/5 p-4 rounded-xl">
          <div className="flex items-start gap-3">
            <Bot className="w-5 h-5 mt-1 text-secondary flex-shrink-0" />
            <div className="space-y-2">
              <div className="text-sm text-secondary font-medium">{match.aiCoach}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {match.aiSuggestion}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {match.interests.map((interest) => (
            <motion.span
              key={interest}
              className="text-xs px-3 py-1 rounded-full glass bg-white/5"
              whileHover={{ scale: 1.1 }}
            >
              {interest}
            </motion.span>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 glass px-4 py-2 rounded-full hover:bg-white/10 transition-all text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Connect through AI Coach</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};