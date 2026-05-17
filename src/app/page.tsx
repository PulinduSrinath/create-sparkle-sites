import { useEffect, useRef, Suspense, lazy, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Sparkles, Users, Terminal, Layers, Brain
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";

const Footer = lazy(() => import("@/components/Footer"));
const FloatingBackground = lazy(() => import("@/components/FloatingBackground"));
const HeroDecorations = lazy(() => import("./HeroDecorations"));
const CTASection = lazy(() => import("@/components/CTASection"));
const ServicesSection = lazy(() => import("./ServicesSection"));
const AboutSection = lazy(() => import("./AboutSection"));
const TechStackSection = lazy(() => import("./TechStackSection"));

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
      <motion.div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] bg-primary flex items-center justify-center text-black relative z-10 shadow-[0_0_30px_rgba(34,211,238,0.4)] flex-shrink-0">
        <Icon size={32} className="md:w-10 md:h-10" strokeWidth={2.5} />
      </motion.div>
      <div className="flex flex-col relative z-10 text-left min-w-0">
        <div className="font-display text-4xl md:text-5xl font-black text-white flex items-center leading-none tracking-tighter">
          <motion.span>{rounded}</motion.span>
          <span>{suffix}</span>
        </div>
        <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary mt-2 leading-tight">
          {label}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-40 transition-opacity" />
    </motion.div>
  );
};

const aiKeywords = ["AI Solutions", "ML Models", "Neural Nets", "Automation", "Deep Learning"];

const HeroSection = () => {
  const [kwIndex, setKwIndex] = useState(0);
  const [motionReady, setMotionReady] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setKwIndex((i) => (i + 1) % aiKeywords.length), 2200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const id =
      window.requestIdleCallback?.(() => setMotionReady(true)) ??
      window.setTimeout(() => setMotionReady(true), 1);
    return () => {
      if (typeof id === "number") window.clearTimeout(id);
      else window.cancelIdleCallback?.(id);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-40 lg:pb-56">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-hero-orb-a"
          style={{ background: "radial-gradient(circle, hsl(172 80% 50% / 0.3), transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 animate-hero-orb-b"
          style={{ background: "radial-gradient(circle, hsl(260 70% 60% / 0.3), transparent)" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-05 animate-hero-orb-c"
          style={{ background: "radial-gradient(circle, hsl(150 70% 45% / 0.3), transparent)" }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(hsl(172 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(172 80% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="lg:w-3/5 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 text-sm text-primary font-medium animate-hero-fade">
              <Sparkles size={14} className="text-primary" aria-hidden />
              We Build Digital Experiences
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-6 text-balance">
              Crafting <span className="gradient-text">Websites</span> & <span className="gradient-text">Apps</span> That
              Matter
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 animate-hero-fade-delayed">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30">
                <Brain size={14} className="text-violet-400" aria-hidden />
                <span className="text-xs text-violet-300 font-semibold uppercase tracking-widest">Now offering</span>
              </div>
              <div className="relative h-8 w-44 overflow-hidden flex items-center">
                {motionReady ? (
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
                ) : (
                  <span className="absolute font-bold text-lg gradient-text">{aiKeywords[0]}</span>
                )}
              </div>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-hero-fade-delayed-2">
              We design and develop high-performance web and mobile applications using Vite, React, and cutting-edge{" "}
              <span className="text-primary font-semibold">AI & ML technologies</span>.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-hero-fade-delayed-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl font-bold text-black bg-primary hover:scale-105 active:scale-95 transition-all text-xl shadow-[0_0_40px_rgba(34,211,238,0.4)]"
              >
                Start Your Project <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-bold border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 hover:scale-105 active:scale-95 transition-all text-lg"
              >
                <Brain size={20} /> Explore AI Services
              </Link>
            </div>
          </div>
          <Suspense
            fallback={
              <div className="lg:w-2/5 flex justify-center items-center w-full max-w-[400px] aspect-square">
                <img
                  src="/premium-logo-icon-256.webp"
                  srcSet="/premium-logo-icon-256.webp 256w, /premium-logo-icon.webp 320w"
                  sizes="(max-width: 768px) 90vw, 400px"
                  alt="ZetasBuild Premium Logo"
                  width={320}
                  height={366}
                  className="w-full h-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            }
          >
            <HeroDecorations />
          </Suspense>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto"
        >
          {[
            { value: "100%", label: "Client Satisfaction", icon: Users },
            { value: "10+", label: "Completed Projects", icon: Terminal },
            { value: "150+", label: "Design Resources", icon: Layers },
          ].map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <Suspense fallback={null}>
      <FloatingBackground />
    </Suspense>
    <Navbar />
    <HeroSection />
    <Suspense fallback={<div className="h-screen" aria-hidden />}>
      <ServicesSection />
    </Suspense>
    <Suspense fallback={<div className="h-96" aria-hidden />}>
      <AboutSection />
    </Suspense>
    <Suspense fallback={<div className="h-96" aria-hidden />}>
      <TechStackSection />
    </Suspense>
    <Suspense fallback={<div className="h-32" aria-hidden />}>
      <CTASection />
    </Suspense>
    <Suspense fallback={null}>
      <Footer />
    </Suspense>
  </div>
);

export default Index;
