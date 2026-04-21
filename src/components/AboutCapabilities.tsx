import { motion } from "framer-motion";
import { Check, Cpu, Smartphone, Layout } from "lucide-react";

const capabilities = [
  {
    title: "Web Dynamics",
    description: "Architecting high-performance web systems that scale with your ambitions. We don't just build sites; we craft digital ecosystems optimized for speed, SEO, and user retention.",
    icon: <Cpu size={32} className="text-primary" />,
    items: ["Adaptive Frameworks", "Edge Computing", "SEO Dominance", "Bespoke CMS"]
  },
  {
    title: "Mobile Mastery",
    description: "Driving engagement through native and cross-platform mobile apps. Our focus is on frictionless performance and intuitive gestures that keep users coming back.",
    icon: <Smartphone size={32} className="text-secondary" />,
    items: ["Full-Stack Native", "Swift & Kotlin", "Real-time Push", "Offline First"]
  },
  {
    title: "Creative Logic",
    description: "Bridging the gap between aesthetic beauty and technical logic. Our UI/UX designs are rooted in behavioral data and human-centric psychology.",
    icon: <Layout size={32} className="text-accent" />,
    items: ["Data-Driven UX", "Interaction Design", "Motion Branding", "WCAG Compliance"]
  }
];

const AboutCapabilities = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-8">
              Engineering <span className="gradient-text">Experiences</span> <br />
              That Leave a Mark.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 space-y-6"
          >
            <p className="text-foreground/70 text-lg leading-relaxed border-l-4 border-primary pl-8 italic">
              "At DevCraft, we reject the ordinary. We are pioneers of digital innovation, 
              turning complex technical debts into streamlined assets that propel growth."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border/50 p-10 rounded-[2rem] hover:border-primary/30 transition-all duration-500 relative group overflow-hidden"
            >
              {/* Animated Corner Hint */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent group-hover:from-primary/20 transition-all duration-500" />
              
              <div className="mb-8 p-5 rounded-2xl bg-background border border-border inline-block group-hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all">
                {cap.icon}
              </div>

              <h3 className="text-2xl font-bold mb-6 font-display">{cap.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-10 min-h-[80px]">
                {cap.description}
              </p>
              
              <div className="space-y-4">
                {cap.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                    <Check size={16} className="text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCapabilities;
