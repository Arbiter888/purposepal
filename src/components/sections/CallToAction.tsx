import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const handleStartJourney = () => {
    const subject = "Ready to Start My Journey with BornPurpose";
    const body = "Hello,\n\nI'm ready to start my journey with BornPurpose. Please provide me with information about getting started.";
    
    const mailtoLink = `mailto:membership@bornpurpose.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="section-padding bg-muted">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gradient-sunshine">Ready to Transform Your Life?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join thousands of users who are already achieving their goals with BornPurpose
        </p>
        <motion.button
          onClick={handleStartJourney}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 glass px-8 py-4 rounded-full font-medium hover-lift inline-flex items-center gap-2"
        >
          Start Your Journey Now
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CallToAction;