import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(172 80% 50% / 0.4), transparent)" }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(260 70% 60% / 0.4), transparent)" }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, hsl(150 70% 45% / 0.4), transparent)" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
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
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-all"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold border border-border hover:border-primary/50 text-foreground transition-all"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
