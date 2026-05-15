import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Smartphone, Palette, ShieldCheck, Code2, Brain } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Engineering", description: "Building high-performance enterprise platforms with global scalability and zero-latency UX. We engineer for the next generation of web traffic and mission-critical reliability.", color: "hsl(172 80% 50%)", visual: "neural-orb", tag: "Scalable Systems" },
  { icon: Smartphone, title: "Mobile Force", description: "Military-grade mobile ecosystems that dominate App Stores. We create native and cross-platform solutions that unify brand identity and user engagement across every device.", color: "hsl(260 70% 60%)", visual: "hologram-prism", tag: "Native Excellence" },
  { icon: Palette, title: "Creative Mastery", description: "Designing the fluid balance between aesthetic elegance and technical function. Our UI/UX architects craft interfaces that convert users into loyal brand advocates.", color: "hsl(150 70% 45%)", visual: "digital-canvas", tag: "Design Architecture" },
  { icon: ShieldCheck, title: "Security & Support", description: "Iron-clad technical guardianship for your digital empire. 24/7 monitoring, rigourous audits, and continuous optimization to keep you at the peak of performance.", color: "hsl(30 100% 50%)", visual: "encryption-grid", tag: "Zero-Vulnerability" },
  { icon: Brain, title: "AI & Machine", description: "Deploying cutting-edge artificial intelligence and machine learning solutions — from predictive models and NLP to computer vision and intelligent automation that transforms business outcomes.", color: "hsl(270 80% 65%)", visual: "ai-brain", tag: "Intelligence Layer" }
];

const VisualComponent = ({ type, color }: { type: string; color: string }) => {
  if (type === "neural-orb") return (
    <div className="relative w-full h-full flex items-center justify-center scale-125">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-80 h-80 border border-primary/20 rounded-full" />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="w-48 h-48 bg-primary/20 rounded-full blur-[60px]" />
      <div className="absolute w-32 h-32 rounded-full glass-card border border-primary/30 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.2)]"><Globe size={48} className="text-primary" /></div>
    </div>
  );
  if (type === "hologram-prism") return (
    <div className="relative w-full h-full flex items-center justify-center scale-125">
      <motion.div animate={{ rotateY: 360, rotateX: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="w-56 h-56 border-2 border-secondary/30 rounded-3xl" />
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-40 h-40 bg-secondary/20 blur-[80px]" />
      <div className="absolute w-28 h-28 glass-card border border-secondary/30 rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.2)] rotate-12"><Smartphone size={40} className="text-secondary" /></div>
    </div>
  );
  if (type === "digital-canvas") return (
    <div className="relative w-full h-full flex items-center justify-center scale-125">
      <div className="absolute grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => <motion.div key={i} animate={{ opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }} className="w-10 h-10 bg-accent rounded-sm" />)}
      </div>
      <div className="relative w-40 h-40 glass-card border border-accent/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.2)]"><Palette size={48} className="text-accent" /></div>
    </div>
  );
  if (type === "ai-brain") return (
    <div className="relative w-full h-full flex items-center justify-center scale-125">
      {[80, 140, 200, 260].map((size, i) => (
        <motion.div key={size} animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }} transition={{ duration: 8 + i * 3, repeat: Infinity, ease: "linear" }} className="absolute rounded-full border border-violet-500/20" style={{ width: size, height: size }} />
      ))}
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-40 h-40 rounded-full blur-[60px]" style={{ background: "hsl(270 80% 65% / 0.4)" }} />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <motion.div key={deg} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, delay: i * 0.25, repeat: Infinity }} className="absolute w-2.5 h-2.5 rounded-full bg-violet-400" style={{ transform: `rotate(${deg}deg) translateX(100px)`, transformOrigin: "center" }} />
      ))}
      <div className="absolute w-32 h-32 glass-card border border-violet-500/40 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.4)] z-10">
        <Brain size={52} className="text-violet-400" />
      </div>
    </div>
  );
  return (
    <div className="relative w-full h-full flex items-center justify-center scale-125">
      <div className="absolute inset-x-0 h-[1px] bg-primary/20 rotate-45" /><div className="absolute inset-x-0 h-[1px] bg-primary/20 -rotate-45" />
      <div className="relative w-40 h-40 glass-card border border-primary/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.2)]"><ShieldCheck size={48} className="text-primary" /></div>
    </div>
  );
};

const ServiceSection = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const textX = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const visualX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);

  return (
    <div ref={container} className="min-h-screen sticky top-0 flex items-center justify-center bg-[#030712] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0,transparent_100%)] opacity-20" style={{'--primary': service.color} as React.CSSProperties} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <motion.div style={{ opacity, scale }} className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div style={{ x: visualX }} className={`relative ${index % 2 === 1 ? 'lg:order-last' : ''} hidden lg:flex items-center justify-center h-[500px]`}>
          <VisualComponent type={service.visual} color={service.color} />
        </motion.div>
        <motion.div style={{ x: textX }} className="space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-[0.4em] shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <Code2 size={14} />{service.tag}
          </div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-tight">{service.title.split(' ')[0]} <br /><span className="gradient-text">{service.title.split(' ').slice(1).join(' ')}</span></h2>
          <p className="text-2xl text-slate-300 leading-relaxed max-w-xl font-medium">{service.description}</p>
        </motion.div>
        <div className="lg:hidden flex items-center justify-center h-[300px]">
          <VisualComponent type={service.visual} color={service.color} />
        </div>
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-[#030712]">
      <div className="h-screen flex flex-col items-center justify-center text-center px-6 sticky top-0 z-0">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-8">
          <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase px-6 py-2 rounded-full border border-primary/20 bg-primary/5">Our Engineering Arsenal</span>
        </motion.div>
        <h2 className="text-7xl md:text-[12rem] font-bold tracking-tighter text-white leading-[0.8] mb-12">What We <br /><span className="gradient-text underline decoration-white/5 underline-offset-[20px]">Do.</span></h2>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
      </div>
      <div className="relative z-10">
        {services.map((service, i) => <ServiceSection key={service.title} service={service} index={i} />)}
      </div>
      <div className="h-[20vh] bg-background" />
    </section>
  );
};

export default ServicesSection;
