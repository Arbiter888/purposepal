import { motion } from "framer-motion";
import { Running, Timer, Trophy, Users, Video, Calendar, DollarSign } from "lucide-react";

const CommunityHealth = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient-neon mb-4">Your AI Running Coach Journey</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your running experience with personalized AI coaching. Connect with fellow runners and track your progress with advanced analytics.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Running className="w-12 h-12 mb-4 text-gradient" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Personalized Training</h3>
          <p className="text-muted-foreground">
            Get customized running plans that adapt to your progress, fitness level, and goals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Timer className="w-12 h-12 mb-4 text-gradient" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Real-time Feedback</h3>
          <p className="text-muted-foreground">
            Receive instant guidance on pace, form, and performance during your runs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Trophy className="w-12 h-12 mb-4 text-gradient" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Goal Achievement</h3>
          <p className="text-muted-foreground">
            Track your milestones and celebrate progress with personalized achievements
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 max-w-4xl mx-auto glass p-8 rounded-2xl"
      >
        <h3 className="text-2xl font-semibold text-gradient-neon mb-6 text-center">Featured Runner Success Story</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 glass rounded-xl relative overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{ backgroundImage: 'url(/lovable-uploads/b30aef96-040a-42a7-aca9-99e70c70fe68.png)' }}
            />
            <div className="relative z-10">
              <Timer className="w-8 h-8 mx-auto mb-2 text-gradient-sunshine" />
              <h4 className="font-semibold mb-2">Sarah's Progress</h4>
              <p className="text-muted-foreground text-sm">5K Time: 28min</p>
              <p className="text-xs text-muted-foreground mt-2">Started at 35min</p>
            </div>
          </div>
          <div className="text-center p-4 glass rounded-xl relative overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{ backgroundImage: 'url(/lovable-uploads/7c701826-e490-434c-b542-59f3652c6375.png)' }}
            />
            <div className="relative z-10">
              <Running className="w-8 h-8 mx-auto mb-2 text-gradient-sunshine" />
              <h4 className="font-semibold mb-2">Weekly Mileage</h4>
              <p className="text-muted-foreground text-sm">25 miles/week</p>
              <p className="text-xs text-muted-foreground mt-2">Up from 10 miles</p>
            </div>
          </div>
          <div className="text-center p-4 glass rounded-xl relative overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{ backgroundImage: 'url(/lovable-uploads/861126b1-a991-4d52-b668-2a2ba821a15c.png)' }}
            />
            <div className="relative z-10">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-gradient-sunshine" />
              <h4 className="font-semibold mb-2">Achievements</h4>
              <p className="text-muted-foreground text-sm">10 medals earned</p>
              <p className="text-xs text-muted-foreground mt-2">Marathon ready!</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-4">
          *Results vary based on individual commitment and training consistency
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 glass px-6 py-3 rounded-full"
        >
          <Users className="w-5 h-5" />
          <span>Running Community Support</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-3 glass px-6 py-3 rounded-full"
        >
          <Video className="w-5 h-5" />
          <span>Form Analysis</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-3 glass px-6 py-3 rounded-full"
        >
          <Calendar className="w-5 h-5" />
          <span>Adaptive Training Plans</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityHealth;