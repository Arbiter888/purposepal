import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  bgColor: string;
  iconColor: string;
}

export const ProcessStep = ({ 
  icon: Icon, 
  title, 
  description, 
  index,
  bgColor,
  iconColor 
}: ProcessStepProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="glass p-6 rounded-xl hover:shadow-lg transition-shadow"
  >
    <div className="flex items-start gap-4">
      <div className="relative">
        <div className={`absolute -left-2 -top-2 w-12 h-12 ${bgColor} rounded-full animate-pulse`} />
        <div className={`relative z-10 w-8 h-8 flex items-center justify-center ${bgColor} rounded-full`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </motion.div>
);