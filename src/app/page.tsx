import { useEffect, useRef, Suspense, lazy, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Sparkles, Users, Terminal, Layers, Brain
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBackground from "@/components/FloatingBackground";
const CTASection = lazy(() => import("@/components/CTASection"));
const ServicesSection = lazy(() => import("./ServicesSection"));
const AboutSection = lazy(() => import("./AboutSection"));
const TechStackSection = lazy(() => import("./TechStackSection"));

// ==========================================
// HERO SECTION
// ==========================================
const StatCard = ({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) => {
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

// AI keyword cycler component
const aiKeywords = ["AI Solutions", "ML Models", "Neural Nets", "Automation", "Deep Learning"];

const AITerminalWidget = () => {
  const lines = [
    { text: "$ zetas-ai --init", delay: 0 },
    { text: "> Loading neural engine...", delay: 0.6 },
    { text: "> Model accuracy: 98.7%", delay: 1.2 },
    { text: "> AI pipeline ready ✓", delay: 1.8 },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="absolute -bottom-2 -left-6 z-20 glass-card border border-primary/30 rounded-2xl shadow-2xl overflow-hidden w-64"
      style={{ background: "rgba(3,7,18,0.85)", backdropFilter: "blur(20px)" }}
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="text-[10px] text-white/30 font-mono ml-2">zetas-ai terminal</span>
      </div>
      <div className="p-4 font-mono text-xs space-y-1">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay + 1.4, duration: 0.4 }}
            className={line.text.startsWith("$") ? "text-primary" : line.text.includes("✓") ? "text-green-400" : "text-slate-400"}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-2 h-3 bg-primary ml-0.5 mt-1"
        />
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [kwIndex, setKwIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setKwIndex(i => (i + 1) % aiKeywords.length), 2200);
    return () => clearInterval(t);
  }, []);

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
            {/* AI/ML animated keyword banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30">
                <Brain size={14} className="text-violet-400" />
                <span className="text-xs text-violet-300 font-semibold uppercase tracking-widest">Now offering</span>
              </div>
              <div className="relative h-8 w-44 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={kwIndex}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute font-bold text-lg gradient-text"
                  >
                    {aiKeywords[kwIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10">
              We design and develop high-performance web and mobile applications using Vite, React, and cutting-edge <span className="text-primary font-semibold">AI & ML technologies</span>.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl font-bold text-black bg-primary hover:scale-105 active:scale-95 transition-all text-xl shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                Start Your Project <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/services" className="group inline-flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-bold border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 hover:scale-105 active:scale-95 transition-all text-lg">
                <Brain size={20} /> Explore AI Services
              </Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, type: "spring", bounce: 0.4 }} className="lg:w-2/5 relative flex justify-center items-center">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute w-[120%] h-[120%] border border-dashed border-primary/20 rounded-full" />
            <motion.div animate={{ y: [0, -20, 0], rotateY: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-full max-w-[400px] aspect-square">
              <img
                src="/premium-logo-icon.webp"
                alt="ZetasBuild Premium Logo"
                width={400}
                height={400}
                sizes="(max-width: 768px) 90vw, 400px"
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(34,211,238,0.4)]"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 pointer-events-none" />
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full blur-md" />
              <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary rounded-full blur-md" />
            </motion.div>
            <AITerminalWidget />
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
// MAIN INDEX PAGE
// ==========================================

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingBackground />
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="h-screen" />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="h-96" />}>
        <TechStackSection />
      </Suspense>
      <Suspense fallback={<div className="h-32" />}>
        <CTASection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
