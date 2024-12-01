import { motion } from "framer-motion";

const GradientShowcase = () => {
  const gradients = [
    {
      name: "Sunshine",
      class: "text-gradient-sunshine",
      description: "Warm blend of yellow through orange to red"
    },
    {
      name: "Rainbow",
      class: "text-gradient-rainbow",
      description: "Vibrant violet through pink to yellow"
    },
    {
      name: "Aurora",
      class: "text-gradient-aurora",
      description: "Cool green through cyan to blue"
    },
    {
      name: "Candy",
      class: "text-gradient-candy",
      description: "Sweet pink through purple to indigo"
    },
    {
      name: "Neon",
      class: "text-gradient-neon",
      description: "Electric lime through emerald to teal"
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
        <h2 className="text-4xl font-bold text-gradient mb-4">Vibrant Gradients</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of energetic text gradients
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