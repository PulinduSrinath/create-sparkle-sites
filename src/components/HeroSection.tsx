import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Link } from "react-router-dom";

const StatCounter = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, numValue, {
        duration: 2,
        ease: "easeOut",
      });
      return animation.stop;
    }
  }, [isInView, numValue, count]);

  return (
    <div ref={ref}>
      <div className="font-display text-3xl font-bold gradient-text flex justify-center items-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-40 lg:pb-56">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(172 80% 50% / 0.3), transparent)" }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(260 70% 60% / 0.3), transparent)" }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-05"
          style={{ background: "radial-gradient(circle, hsl(150 70% 45% / 0.3), transparent)" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(hsl(172 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(172 80% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content Column */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-sm text-primary font-medium">We Build Digital Experiences</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-6 text-balance"
            >
              Crafting <span className="gradient-text">Websites</span> &{" "}
              <span className="gradient-text">Apps</span> That Matter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10"
            >
              We design and develop high-performance web and mobile applications
              using Next.js, React, and cutting-edge technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl font-bold text-black bg-primary hover:scale-105 active:scale-95 transition-all text-xl shadow-[0_0_40px_rgba(34,211,238,0.4)]"
              >
                Start Your Project
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto lg:mx-0"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "3+", label: "Years Experience" },
                { value: "5+", label: "Served Countries" },
              ].map((stat) => (
                <StatCounter key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </motion.div>
          </div>

          {/* Right Visual Column - Creative Logo Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="lg:w-2/5 relative flex justify-center items-center"
          >
            {/* Ambient Glows */}
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
            
            {/* Rotating Orbital Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[120%] h-[120%] border border-dashed border-primary/20 rounded-full"
            />

            {/* Floating Premium Logo */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[400px] aspect-square"
            >
              <img 
                src="/premium-logo-icon.png" 
                alt="ZetasBuild Premium Logo" 
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(34,211,238,0.4)]"
              />
              
              {/* Technical Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 pointer-events-none" />
              
              {/* Pulsing Light Dots */}
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full blur-md"
              />
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary rounded-full blur-md"
              />
            </motion.div>

            {/* Glass Card Floating Badge */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-4 -right-4 glass-card p-4 rounded-2xl border border-white/20 shadow-xl z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Sparkles size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Precision Built</span>
                <span className="text-sm font-bold">Standard of Excellence</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
