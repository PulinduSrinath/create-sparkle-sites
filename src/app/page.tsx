import { useEffect, useRef, Suspense, lazy } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, animate, useScroll } from "framer-motion";
import { 
  ArrowRight, Sparkles, Globe, Smartphone, Palette, ShieldCheck, Code2, 
  Users, Target, Shield, ArrowUpRight, Zap, 
  Terminal, Layers, Box, Cpu, Cloud, Database, Layout, Server 
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBackground from "@/components/FloatingBackground";
const CTASection = lazy(() => import("@/components/CTASection"));

// ==========================================
// HERO SECTION
// ==========================================
const StatCard = ({ value, label, icon: Icon }: { value: string; label: string; icon: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const numValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, numValue, { duration: 2, ease: "easeOut" });
      return animation.stop;
    }
  }, [isInView, numValue, count]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex items-center gap-6 p-6 md:p-8 rounded-[2.5rem] bg-slate-950 border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-2xl overflow-hidden min-w-0"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-primary flex items-center justify-center text-black relative z-10 shadow-[0_0_30px_rgba(34,211,238,0.4)] flex-shrink-0">
        <Icon size={32} className="md:w-10 md:h-10" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col relative z-10 text-left min-w-0">
        <div className="font-display text-4xl md:text-5xl font-black text-white flex items-center leading-none tracking-tighter">
          <motion.span>{rounded}</motion.span><span>{suffix}</span>
        </div>
        <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary mt-2 leading-tight">
          {label}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-40 transition-opacity" />
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-40 lg:pb-56">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div animate={{ x: [0, 50, 0], y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(172 80% 50% / 0.3), transparent)" }} />
        <motion.div animate={{ x: [0, -40, 0], y: [0, 40, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(260 70% 60% / 0.3), transparent)" }} />
        <motion.div animate={{ x: [0, 30, 0], y: [0, 50, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-05" style={{ background: "radial-gradient(circle, hsl(150 70% 45% / 0.3), transparent)" }} />
      </div>
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(hsl(172 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(172 80% 50%) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <Sparkles size={14} className="text-primary" /><span className="text-sm text-primary font-medium">We Build Digital Experiences</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-6 text-balance">
              Crafting <span className="gradient-text">Websites</span> & <span className="gradient-text">Apps</span> That Matter
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10">
              We design and develop high-performance web and mobile applications using Next.js, React, and cutting-edge technologies.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="flex justify-center lg:justify-start">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl font-bold text-black bg-primary hover:scale-105 active:scale-95 transition-all text-xl shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                Start Your Project <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, type: "spring", bounce: 0.4 }} className="lg:w-2/5 relative flex justify-center items-center">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[120%] h-[120%] border border-dashed border-primary/20 rounded-full" />
            <motion.div animate={{ y: [0, -20, 0], rotateY: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-full max-w-[400px] aspect-square">
              <img src="/premium-logo-icon.webp" alt="ZetasBuild Premium Logo" className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(34,211,238,0.4)]" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 pointer-events-none" />
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full blur-md" />
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary rounded-full blur-md" />
            </motion.div>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="absolute -bottom-4 -right-4 glass-card p-4 rounded-2xl border border-white/20 shadow-xl z-20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Sparkles size={20} /></div>
              <div className="flex flex-col"><span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Precision Built</span><span className="text-sm font-bold">Standard of Excellence</span></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid - Moved to full width for clarity */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {[
            { value: "100%", label: "Client Satisfaction", icon: Users }, 
            { value: "10+", label: "Completed Projects", icon: Terminal }, 
            { value: "150+", label: "Design Resources", icon: Layers }
          ].map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ==========================================
// SERVICES SECTION
// ==========================================
const services = [
  { icon: Globe, title: "Web Engineering", description: "Building high-performance enterprise platforms with global scalability and zero-latency UX. We engineer for the next generation of web traffic and mission-critical reliability.", color: "hsl(172 80% 50%)", visual: "neural-orb", tag: "Scalable Systems" },
  { icon: Smartphone, title: "Mobile Force", description: "Military-grade mobile ecosystems that dominate App Stores. We create native and cross-platform solutions that unify brand identity and user engagement across every device.", color: "hsl(260 70% 60%)", visual: "hologram-prism", tag: "Native Excellence" },
  { icon: Palette, title: "Creative Mastery", description: "Designing the fluid balance between aesthetic elegance and technical function. Our UI/UX architects craft interfaces that convert users into loyal brand advocates.", color: "hsl(150 70% 45%)", visual: "digital-canvas", tag: "Design Architecture" },
  { icon: ShieldCheck, title: "Security & Support", description: "Iron-clad technical guardianship for your digital empire. 24/7 monitoring, rigourous audits, and continuous optimization to keep you at the peak of performance.", color: "hsl(30 100% 50%)", visual: "encryption-grid", tag: "Zero-Vulnerability" }
];

const VisualComponent = ({ type, color }: { type: string, color: string }) => {
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
  return (
    <div className="relative w-full h-full flex items-center justify-center scale-125">
      <div className="absolute inset-x-0 h-[1px] bg-primary/20 rotate-45" /><div className="absolute inset-x-0 h-[1px] bg-primary/20 -rotate-45" />
      <div className="relative w-40 h-40 glass-card border border-primary/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.2)]"><ShieldCheck size={48} className="text-primary" /></div>
    </div>
  );
};

const ServiceSection = ({ service, index }: { service: typeof services[0], index: number }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const textX = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const visualX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);

  return (
    <div ref={container} className="min-h-screen sticky top-0 flex items-center justify-center bg-[#030712] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0,transparent_100%)] opacity-20" style={{'--primary': service.color} as any} />
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

// ==========================================
// ABOUT SECTION
// ==========================================
const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] opacity-40" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24">
          <span className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase px-6 py-2 rounded-full border border-primary/20 bg-primary/5 shadow-sm">Who We Are</span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mt-8">The ZetasBuild <span className="text-primary italic">Philosophy.</span></h2>
        </motion.div>
        <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="col-span-12 lg:col-span-8 bg-white border border-slate-100 rounded-[2.5rem] p-12 md:p-16 flex flex-col justify-between relative overflow-hidden group shadow-xl shadow-slate-200/40">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">We don't just build websites; we craft <span className="text-primary italic">digital experiences</span> that redefine industries.</h3>
              <p className="text-slate-600 text-xl leading-relaxed max-w-2xl font-medium">Our approach merges architectural precision with creative soul. Every line of code we write is a building block for a scalable, high-performance legacy.</p>
            </div>
            <Link to="/about#testimonials" className="mt-12 inline-block group/btn">
              <div className="h-14 px-8 rounded-full border border-slate-200 hover:border-primary/50 text-slate-900 font-bold flex items-center justify-center gap-3 transition-all hover:bg-primary/5 shadow-sm">
                What Our Clients Said <ArrowUpRight size={20} className="text-primary" />
              </div>
            </Link>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-slate-50 rounded-full group-hover:scale-110 transition-transform duration-1000" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="col-span-12 lg:col-span-4 bg-primary/5 border border-primary/10 rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg shadow-primary/5">
            <div className="relative z-10 w-full">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="w-48 h-48 border border-primary/10 rounded-full mx-auto flex items-center justify-center">
                <div className="w-40 h-40 border border-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 blur-xl animate-pulse" />
                </div>
              </motion.div>
              <div className="absolute inset-x-0 top-[4.5rem] flex flex-col items-center text-center">
                <span className="text-7xl font-bold text-slate-900 tracking-tighter">100%</span><span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mt-2">Client Satisfaction</span>
              </div>
            </div>
            <p className="mt-10 text-slate-500 font-medium italic relative z-10 text-lg">"Exceptional code, stunning design, and a partner you can trust globally."</p>
          </motion.div>
          {[
            { icon: Users, title: "Client-Centric", desc: "Lasting partnerships built on your performance-critical goals.", color: "text-primary", bg: "bg-primary/5" },
            { icon: Zap, title: "Result-Driven", desc: "Every logic cycle is dedicated to measurable market impact.", color: "text-secondary", bg: "bg-secondary/5" },
            { icon: Shield, title: "Quality Excellence", desc: "Military-grade standards for security, speed, and design.", color: "text-accent", bg: "bg-accent/5" }
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }} className="col-span-12 md:col-span-6 lg:col-span-4 bg-white border border-slate-100 rounded-[2.5rem] p-10 group hover:border-primary/20 hover:shadow-xl transition-all shadow-md shadow-slate-100">
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-8 shadow-inner`}><item.icon size={26} /></div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h4>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// TECH STACK SECTION
// ==========================================
const row1 = [
  { name: "Next.js", category: "Framework", icon: Globe, color: "#ffffff" },
  { name: "React", category: "Library", icon: Code2, color: "#61dafb" },
  { name: "TypeScript", category: "Language", icon: Terminal, color: "#3178c6" },
  { name: "Node.js", category: "Runtime", icon: Server, color: "#68a063" },
  { name: "Tailwind CSS", category: "Styling", icon: Palette, color: "#06b6d4" },
  { name: "PostgreSQL", category: "Database", icon: Database, color: "#336791" },
];

const row2 = [
  { name: "React Native", category: "Mobile", icon: Smartphone, color: "#61dafb" },
  { name: "AWS", category: "Cloud", icon: Cloud, color: "#ff9900" },
  { name: "Docker", category: "DevOps", icon: Box, color: "#2496ed" },
  { name: "GraphQL", category: "API", icon: Cpu, color: "#e535ab" },
  { name: "Figma", category: "Design", icon: Layers, color: "#f24e1e" },
  { name: "Vercel", category: "Hosting", icon: Layout, color: "#ffffff" },
];

const MarqueeRow = ({ items, reverse = false }: { items: typeof row1, reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden group select-none">
      <motion.div animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear", repeatType: "loop" }} className="flex gap-6 pr-6 whitespace-nowrap min-w-full items-center">
        {[...items, ...items].map((tech, i) => <TechCard key={`${tech.name}-${i}`} tech={tech} />)}
      </motion.div>
    </div>
  );
};

const TechCard = ({ tech }: { tech: typeof row1[0] }) => {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} className="relative flex-shrink-0 w-64 bg-white/[0.03] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 group cursor-default" style={{'--tech-color': tech.color} as any}>
      <div className="flex items-center gap-5 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center transition-transform group-hover:scale-110 shadow-inner" style={{ color: tech.color }}><tech.icon size={24} /></div>
        <div>
          <h3 className="text-white font-bold tracking-tight text-lg">{tech.name}</h3><span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{tech.category}</span>
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" style={{ background: tech.color }} />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--tech-color)] to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />
    </motion.div>
  );
};

const TechStackSection = () => {
  return (
    <section id="tech" className="py-32 relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.05)_0,transparent_100%)] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10 mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase px-6 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 inline-block">Technological Core</span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">The <span className="gradient-text">Tech Stack</span></h2>
          <p className="text-slate-400 text-xl font-medium mt-6 max-w-2xl mx-auto leading-relaxed">Engineered with a carefully curated ecosystem of enterprise-grade tools.</p>
        </motion.div>
      </div>
      <div className="space-y-8 relative z-10">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

// ==========================================
// MAIN INDEX PAGE
// ==========================================
const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingBackground />
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="h-20" />}>
        <ServicesSection />
        <AboutSection />
        <TechStackSection />
        <CTASection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
