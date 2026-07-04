import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Smartphone, Palette, ShieldCheck, Code2, Brain } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Engineering", description: "Building high-performance enterprise platforms with global scalability and zero-latency UX. We engineer for the next generation of web traffic and mission-critical reliability.", color: "hsl(221 100% 50%)", visual: "neural-orb", tag: "Scalable Systems" },
  { icon: Smartphone, title: "Mobile Force", description: "Military-grade mobile ecosystems that dominate App Stores. We create native and cross-platform solutions that unify brand identity and user engagement across every device.", color: "hsl(210 100% 50%)", visual: "hologram-prism", tag: "Native Excellence" },
  { icon: Palette, title: "Creative Mastery", description: "Designing the fluid balance between aesthetic elegance and technical function. Our UI/UX architects craft interfaces that convert users into loyal brand advocates.", color: "hsl(264 100% 56%)", visual: "digital-canvas", tag: "Design Architecture" },
  { icon: ShieldCheck, title: "Security & Support", description: "Iron-clad technical guardianship for your digital empire. 24/7 monitoring, rigourous audits, and continuous optimization to keep you at the peak of performance.", color: "hsl(240 100% 55%)", visual: "encryption-grid", tag: "Zero-Vulnerability" },
  { icon: Brain, title: "AI & Machine", description: "Deploying cutting-edge artificial intelligence and machine learning solutions — from predictive models and NLP to computer vision and intelligent automation that transforms business outcomes.", color: "hsl(276 100% 60%)", visual: "ai-brain", tag: "Intelligence Layer" }
];

const VisualComponent = ({ type, color }: { type: string; color: string }) => {
  let imgPath = "";
  let glowColor = "rgba(0, 82, 255, 0.4)";
  let alt = "";

  if (type === "neural-orb") {
    imgPath = "/services/web-engineering.webp";
    glowColor = "rgba(0, 82, 255, 0.45)";
    alt = "Web Engineering";
  } else if (type === "hologram-prism") {
    imgPath = "/services/mobile-force.webp";
    glowColor = "rgba(122, 34, 255, 0.45)";
    alt = "Mobile Force";
  } else if (type === "digital-canvas") {
    imgPath = "/services/creative-mastery.webp";
    glowColor = "rgba(159, 51, 255, 0.45)";
    alt = "Creative Mastery";
  } else if (type === "ai-brain") {
    imgPath = "/services/ai-machine.webp";
    glowColor = "rgba(180, 50, 255, 0.5)";
    alt = "AI & Machine Learning";
  } else {
    imgPath = "/services/security-support.webp";
    glowColor = "rgba(90, 34, 255, 0.45)";
    alt = "Security & Support";
  }

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center scale-110 lg:scale-125">
      {/* Background radial glow */}
      <div 
        className="absolute w-80 h-80 rounded-full blur-[100px] animate-pulse pointer-events-none"
        style={{ backgroundColor: glowColor.replace(/[^,]+(?=\))/, "0.15") }}
      />
      {/* Floating abstract decorative elements to match spark-site aesthetics */}
      <div className="absolute w-[110%] h-[110%] border border-dashed border-white/5 rounded-full animate-spin-slow pointer-events-none" />
      
      {/* Premium graphic display container */}
      <div 
        className="relative z-10 w-80 h-80 rounded-[2.5rem] overflow-hidden glass-card border border-white/10 flex items-center justify-center p-6 hover:scale-105 transition-transform duration-700 shadow-2xl"
        style={{ boxShadow: `0 30px 100px -20px ${glowColor}` }}
      >
        <img 
          src={imgPath} 
          alt={alt}
          className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-2xl"
          loading="lazy"
        />
      </div>
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
