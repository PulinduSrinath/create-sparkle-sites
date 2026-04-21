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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

      <div className="container mx-auto px-6 relative z-10 text-center">
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
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          We design and develop high-performance web and mobile applications
          using Next.js, React, and cutting-edge technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex justify-center"
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
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
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
    </section>
  );
};

export default HeroSection;
