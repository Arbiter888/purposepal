import { motion } from "framer-motion";
import EnhancedChatPreview from "@/components/EnhancedChatPreview";

interface InteractiveDemoProps {
  onServiceChange: (service: string) => void;
}

const InteractiveDemo = ({ onServiceChange }: InteractiveDemoProps) => {
  return (
    <motion.section 
      className="glass rounded-3xl p-4 md:p-6 lg:p-8 h-full flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <EnhancedChatPreview onServiceChange={onServiceChange} />
    </motion.section>
  );
};

export default InteractiveDemo;