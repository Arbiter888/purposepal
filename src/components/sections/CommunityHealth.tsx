import { motion } from "framer-motion";
import { Heart, Users, Handshake, Brain, Target, ArrowRight } from "lucide-react";

const CommunityHealth = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient-neon mb-4">Community Matching System</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Based on your goals and coach recommendations, our AI-powered system matches you with like-minded individuals across three dimensions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Heart className="w-12 h-12 mb-4 text-pink-500" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Romantic Matches</h3>
          <p className="text-muted-foreground">
            Find meaningful connections with partners who share your wellness journey and lifestyle goals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Users className="w-12 h-12 mb-4 text-purple-500" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Friendship Matches</h3>
          <p className="text-muted-foreground">
            Connect with like-minded individuals who complement your interests and support your personal growth
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Handshake className="w-12 h-12 mb-4 text-cyan-500" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Business Matches</h3>
          <p className="text-muted-foreground">
            Network with professionals who align with your career aspirations and entrepreneurial goals
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 max-w-4xl mx-auto glass p-8 rounded-2xl"
      >
        <h3 className="text-2xl font-semibold text-gradient-neon mb-6 text-center">How Matching Works</h3>
        <div className="space-y-6">
          <div className="glass p-4 rounded-xl">
            <div className="flex items-center gap-4">
              <Brain className="w-6 h-6 text-gradient-sunshine" />
              <div>
                <h4 className="font-semibold mb-1">AI-Powered Analysis</h4>
                <p className="text-sm text-muted-foreground">Our system analyzes your goals, interests, and lifestyle patterns</p>
              </div>
            </div>
          </div>
          
          <div className="glass p-4 rounded-xl">
            <div className="flex items-center gap-4">
              <Target className="w-6 h-6 text-gradient-sunshine" />
              <div>
                <h4 className="font-semibold mb-1">Coach Recommendations</h4>
                <p className="text-sm text-muted-foreground">Personal coaches provide insights to enhance matching accuracy</p>
              </div>
            </div>
          </div>
          
          <div className="glass p-4 rounded-xl">
            <div className="flex items-center gap-4">
              <ArrowRight className="w-6 h-6 text-gradient-sunshine" />
              <div>
                <h4 className="font-semibold mb-1">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">The system evolves with your feedback and changing preferences</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CommunityHealth;