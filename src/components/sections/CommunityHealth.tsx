import { motion } from "framer-motion";
import { Globe, Plane, Building, Users, Video, Calendar, DollarSign } from "lucide-react";

const CommunityHealth = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient-neon mb-4">Your Journey to International Living</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your life by exploring opportunities abroad. Connect with expats and experts who've successfully made the transition.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Globe className="w-12 h-12 mb-4 text-gradient" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Global Opportunities</h3>
          <p className="text-muted-foreground">
            Discover career opportunities, housing options, and lifestyle possibilities in countries around the world
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Plane className="w-12 h-12 mb-4 text-gradient" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Relocation Support</h3>
          <p className="text-muted-foreground">
            Get expert guidance on visas, international moving, and settling into your new home country
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Building className="w-12 h-12 mb-4 text-gradient" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Local Integration</h3>
          <p className="text-muted-foreground">
            Learn about local culture, customs, and connect with established expat communities in your target country
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 max-w-4xl mx-auto glass p-8 rounded-2xl"
      >
        <h3 className="text-2xl font-semibold text-gradient-neon mb-6 text-center">Featured Destination: Kuala Lumpur, Malaysia</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 glass rounded-xl relative overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{ backgroundImage: 'url(/lovable-uploads/b30aef96-040a-42a7-aca9-99e70c70fe68.png)' }}
            />
            <div className="relative z-10">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-gradient-sunshine" />
              <h4 className="font-semibold mb-2">Kuala Lumpur</h4>
              <p className="text-muted-foreground text-sm">$1,800/month</p>
              <p className="text-xs text-muted-foreground mt-2">Average living costs</p>
            </div>
          </div>
          <div className="text-center p-4 glass rounded-xl relative overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{ backgroundImage: 'url(/lovable-uploads/7c701826-e490-434c-b542-59f3652c6375.png)' }}
            />
            <div className="relative z-10">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-gradient-sunshine" />
              <h4 className="font-semibold mb-2">London</h4>
              <p className="text-muted-foreground text-sm">$4,800/month</p>
              <p className="text-xs text-muted-foreground mt-2">167% more expensive</p>
            </div>
          </div>
          <div className="text-center p-4 glass rounded-xl relative overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{ backgroundImage: 'url(/lovable-uploads/861126b1-a991-4d52-b668-2a2ba821a15c.png)' }}
            />
            <div className="relative z-10">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-gradient-sunshine" />
              <h4 className="font-semibold mb-2">New York</h4>
              <p className="text-muted-foreground text-sm">$5,500/month</p>
              <p className="text-xs text-muted-foreground mt-2">205% more expensive</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-4">
          *Costs include rent, utilities, food, transportation, and basic entertainment for one person
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
          <span>Global Community Support</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-3 glass px-6 py-3 rounded-full"
        >
          <Video className="w-5 h-5" />
          <span>Virtual Consultations</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-3 glass px-6 py-3 rounded-full"
        >
          <Calendar className="w-5 h-5" />
          <span>Personalized Planning</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityHealth;