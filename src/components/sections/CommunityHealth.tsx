import { motion } from "framer-motion";
import { Users, Stethoscope, Heart, MessageCircle, Video, Calendar } from "lucide-react";

const CommunityHealth = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient mb-4">Join Our Supportive Community</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with like-minded individuals and healthcare professionals who understand your journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Users className="w-12 h-12 mb-4 text-gradient" />
          <h3 className="text-xl font-semibold text-gradient mb-3">Peer Support Groups</h3>
          <p className="text-muted-foreground">
            Join virtual support groups led by experienced facilitators and connect with others on similar journeys
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Stethoscope className="w-12 h-12 mb-4 text-gradient" />
          <h3 className="text-xl font-semibold text-gradient mb-3">Telehealth Services</h3>
          <p className="text-muted-foreground">
            Access licensed healthcare professionals for virtual consultations and ongoing support
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Heart className="w-12 h-12 mb-4 text-gradient" />
          <h3 className="text-xl font-semibold text-gradient mb-3">Holistic Wellness</h3>
          <p className="text-muted-foreground">
            Integrate physical, mental, and spiritual health with guidance from our community experts
          </p>
        </motion.div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-3 glass px-6 py-3 rounded-full"
        >
          <MessageCircle className="w-5 h-5" />
          <span>24/7 Chat Support</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 glass px-6 py-3 rounded-full"
        >
          <Video className="w-5 h-5" />
          <span>Video Consultations</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-3 glass px-6 py-3 rounded-full"
        >
          <Calendar className="w-5 h-5" />
          <span>Regular Check-ins</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityHealth;