import { motion } from "framer-motion";
import EnhancedChatPreview from "../EnhancedChatPreview";

const InteractiveDemo = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient mb-4">Experience the AI Difference</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See how our AI coach adapts to your needs and provides personalized guidance in real-time
        </p>
      </motion.div>

      <EnhancedChatPreview />
    </section>
  );
};

export default InteractiveDemo;