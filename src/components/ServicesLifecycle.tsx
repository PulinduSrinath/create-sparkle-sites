import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-32 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              The Digital <br />
              <span className="text-primary italic">Lifecycle</span> of Excellence.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/3 pt-6"
          >
            <p className="text-slate-500 text-xl font-medium leading-relaxed">
              We leverage a structured yet adaptive cycle that ensures every project is delivered with surgical precision and creative brilliance.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Animated Connecting Line (Drawing SVG) */}
          <div className="absolute top-10 left-0 right-0 hidden lg:block h-2 z-0">
            <svg width="100%" height="20" viewBox="0 0 1200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="10" x2="1200" y2="10" stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round" />
              <motion.line 
                x1="0" y1="10" x2="1200" y2="10" 
                stroke="var(--primary)" 
                strokeWidth="4" 
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.2,
                  type: "spring",
                  damping: 20
                }}
                className="group"
              >
                <div className="relative mb-14">
                  {/* Step Marker */}
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 rounded-[2rem] ${stage.color} text-white flex items-center justify-center font-bold text-2xl shadow-2xl relative z-10 overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 tracking-tight">{stage.step}</span>
                  </motion.div>

                  {/* Active Indicator Pulse */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i * 0.2) + 0.5, duration: 0.8 }}
                    className="absolute top-10 left-10 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-primary/20 rounded-full animate-ping hidden lg:block" 
                  />
                  
                  {/* Join Dot */}
                  <div className="absolute top-10 left-10 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary z-20 hidden lg:block shadow-lg" />
                </div>
                
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-slate-900 group-hover:text-primary transition-colors duration-300">{stage.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-lg">
                  {stage.desc}
                </p>
                
                {/* Visual Progress Bar (Mobile/Tablet) */}
                <div className="mt-8 h-1 w-full bg-slate-50 rounded-full overflow-hidden lg:hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className={`h-full ${stage.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesLifecycle;
