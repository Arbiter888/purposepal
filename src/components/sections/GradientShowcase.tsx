import { motion } from "framer-motion";

const GradientShowcase = () => {
  const gradients = [
    {
      name: "Dawn",
      class: "text-gradient-dawn",
      description: "A gentle blend of secondary and highlight tones"
    },
    {
      name: "Dusk",
      class: "text-gradient-dusk",
      description: "Soft tertiary fading into secondary hues"
    },
    {
      name: "Forest",
      class: "text-gradient-forest",
      description: "Natural highlight transitioning to accent"
    },
    {
      name: "Mystic",
      class: "text-gradient-mystic",
      description: "Ethereal accent merging with highlight"
    },
    {
      name: "Cosmic",
      class: "text-gradient-cosmic",
      description: "Celestial tertiary blending into highlight"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gradient mb-4">Gradient Showcase</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our new collection of text gradients
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {gradients.map((gradient, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass p-8 rounded-2xl hover-lift group"
          >
            <h3 className={`text-4xl font-bold ${gradient.class} mb-4`}>
              {gradient.name}
            </h3>
            <p className="text-lg text-muted-foreground">
              {gradient.description}
            </p>
            <div className={`mt-4 text-2xl ${gradient.class}`}>
              Sample Text
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GradientShowcase;