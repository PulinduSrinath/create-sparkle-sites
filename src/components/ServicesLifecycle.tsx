import { motion } from "framer-motion";

const stages = [
  {
    step: "01",
    title: "Discovery",
    desc: "Rigorous market research and stakeholder alignment to define core objectives.",
    color: "bg-primary"
  },
  {
    step: "02",
    title: "Strategy",
    desc: "Developing a technical roadmap and architectural blueprint for performance.",
    color: "bg-secondary"
  },
  {
    step: "03",
    title: "Forge",
    desc: "Agile engineering and meticulous design to build a world-class product.",
    color: "bg-accent"
  },
  {
    step: "04",
    title: "Evolution",
    desc: "Deployment, stabilization, and data-driven optimizations for long-term growth.",
    color: "bg-orange-500"
  }
];

const ServicesLifecycle = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-8">
              The Digital <br />
              <span className="gradient-text">Lifecycle</span> of Excellence.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <p className="text-muted-foreground leading-relaxed">
              We leverage a structured yet adaptive cycle that ensures every project is delivered with surgical precision and creative brilliance.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-border hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative mb-12">
                  <div className={`w-16 h-16 rounded-2xl ${stage.color} text-white flex items-center justify-center font-bold text-xl shadow-xl group-hover:scale-110 transition-transform`}>
                    {stage.step}
                  </div>
                  {/* Decorative Dot on Line */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-4 border-primary hidden lg:block" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-display">{stage.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesLifecycle;
