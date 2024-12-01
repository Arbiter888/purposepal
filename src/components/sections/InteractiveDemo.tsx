import { motion } from "framer-motion";
import { MessageSquare, Video, Calendar } from "lucide-react";
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
        <h2 className="text-4xl font-bold text-gradient-cosmic mb-4">Experience Our Platform</h2>
        <p className="text-xl text-secondary-light/90 max-w-2xl mx-auto">
          See how our AI-powered platform can transform your journey to wellness and personal growth
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-2xl hover-lift border border-tertiary/20"
        >
          <MessageSquare className="w-12 h-12 text-gradient-aurora mb-4" />
          <h3 className="text-xl font-semibold text-gradient-cosmic mb-3">AI Chat Support</h3>
          <p className="text-secondary-light/80">
            24/7 intelligent chat support to guide you through your wellness journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl hover-lift border border-tertiary/20"
        >
          <Video className="w-12 h-12 text-gradient-candy mb-4" />
          <h3 className="text-xl font-semibold text-gradient-cosmic mb-3">Video Sessions</h3>
          <p className="text-secondary-light/80">
            High-quality video consultations with wellness experts and coaches
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-8 rounded-2xl hover-lift border border-tertiary/20"
        >
          <Calendar className="w-12 h-12 text-gradient-ocean mb-4" />
          <h3 className="text-xl font-semibold text-gradient-cosmic mb-3">Smart Scheduling</h3>
          <p className="text-secondary-light/80">
            AI-powered scheduling to help you maintain your wellness routine
          </p>
        </motion.div>
      </div>

      <div>
        <EnhancedChatPreview />
      </div>
    </section>
  );
};

export default InteractiveDemo;