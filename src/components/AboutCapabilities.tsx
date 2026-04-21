import { motion } from "framer-motion";
import { Check, Cpu, Smartphone, Layout } from "lucide-react";

const capabilities = [
  {
    title: "Web Dynamics",
    description: "Architecting high-performance web systems that scale with your ambitions. We don't just build sites; we craft digital ecosystems optimized for speed, SEO, and user retention.",
    icon: <Cpu size={32} className="text-primary" />,
    items: ["Adaptive Frameworks", "Edge Computing", "SEO Dominance", "Bespoke CMS"],
    glintColor: "rgba(0, 240, 255, 0.1)"
  },
  {
    title: "Mobile Mastery",
    description: "Driving engagement through native and cross-platform mobile apps. Our focus is on frictionless performance and intuitive gestures that keep users coming back.",
    icon: <Smartphone size={32} className="text-secondary" />,
    items: ["Full-Stack Native", "Swift & Kotlin", "Real-time Push", "Offline First"],
    glintColor: "rgba(139, 92, 246, 0.1)"
  },
  {
    title: "Creative Logic",
    description: "Bridging the gap between aesthetic beauty and technical logic. Our UI/UX designs are rooted in behavioral data and human-centric psychology.",
    icon: <Layout size={32} className="text-accent" />,
    items: ["Data-Driven UX", "Interaction Design", "Motion Branding", "WCAG Compliance"],
    glintColor: "rgba(244, 63, 94, 0.1)"
  }
];

const AboutCapabilities = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
              Engineering <span className="text-primary italic">Experiences</span> <br />
              That Leave a Mark.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 pt-4"
          >
            <p className="text-slate-600 text-xl leading-relaxed border-l-4 border-primary/20 pl-10 font-medium">
              "At DevCraft, we reject the ordinary. We are pioneers of digital innovation, 
              turning complex technical debts into streamlined assets that propel growth."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
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
              whileHover={{ y: -15 }}
              className="bg-white border border-slate-100 p-12 rounded-[3rem] hover:border-primary/20 transition-all duration-700 relative group overflow-hidden shadow-xl shadow-slate-200/40"
            >
              {/* Holographic Light Sweep (Glint) */}
              <motion.div 
                initial={{ left: "-150%" }}
                whileInView={{ left: "150%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), ease: "easeInOut" }}
                className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none z-10"
              />
              
              <div className="mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-100 inline-block group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_15px_30px_rgba(34,211,238,0.3)] transition-all duration-500">
                {cap.icon}
              </div>

              <h3 className="text-3xl font-bold mb-6 tracking-tight text-slate-900">{cap.title}</h3>
              <p className="text-slate-500 text-base leading-relaxed mb-12 font-medium">
                {cap.description}
              </p>
              
              <div className="grid grid-cols-1 gap-4 pt-4 border-t border-slate-50">
                {cap.items.map((item, j) => (
                  <motion.div 
                    key={j} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (i * 0.1) + (j * 0.05) }}
                    className="flex items-center gap-4 text-sm font-bold text-slate-700 group/item"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* Unique Shadow Effect */}
              <div className="absolute inset-x-12 -bottom-4 h-10 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCapabilities;
