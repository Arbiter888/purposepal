import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const ProcessStep = ({ icon: Icon, title, description, index }: ProcessStepProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="glass p-6 rounded-xl hover:shadow-lg transition-shadow"
  >
    <div className="flex items-start gap-4">
      <div className="relative">
        <div className="absolute -left-2 -top-2 w-12 h-12 bg-secondary/10 rounded-full animate-pulse" />
        <div className="relative z-10 w-8 h-8 flex items-center justify-center bg-secondary/20 rounded-full">
          <Icon className="w-5 h-5 text-gradient-sunshine" />
        </div>
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </motion.div>
);