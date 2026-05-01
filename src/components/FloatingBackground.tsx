import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, memo } from "react";

const FloatingBackground = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { scrollY } = useScroll();

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Parallax layers
  const y1 = useTransform(scrollY, [0, 5000], [0, -500]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -1000]);
  const y3 = useTransform(scrollY, [0, 5000], [0, -200]);

  const isMobile = windowSize.width < 768;
  const orbCount = isMobile ? 3 : 6;
  const orbitalCount = isMobile ? 2 : 4;
  const nodeCount = isMobile ? 8 : 15;

  if (windowSize.width === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Layer 1: Soft Bokeh Orbs */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {[...Array(orbCount)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-[120px] opacity-[0.08]"
            style={{
              width: Math.random() * (isMobile ? 200 : 400) + (isMobile ? 100 : 200),
              height: Math.random() * (isMobile ? 200 : 400) + (isMobile ? 100 : 200),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "var(--primary)" : "var(--secondary)",
            }}
            animate={isMobile ? {} : {
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2: Technical Orbital Fragments */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {[...Array(orbitalCount)].map((_, i) => (
          <motion.div
            key={`orbital-${i}`}
            className="absolute border border-dashed border-primary/10 rounded-full"
            style={{
              width: Math.random() * (isMobile ? 300 : 600) + (isMobile ? 200 : 400),
              height: Math.random() * (isMobile ? 300 : 600) + (isMobile ? 200 : 400),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: Math.random() * 40 + 40, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3: Digital Dust & Micro-Nodes */}
      <motion.div style={{ y: y3 }} className="absolute inset-0">
        {[...Array(nodeCount)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isMobile ? { opacity: [0.1, 0.4, 0.1] } : {
              y: [0, -100, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Floating Technical Lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            style={{
              width: Math.random() * 300 + 200,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 45 - 22,
            }}
            animate={{
              x: [0, 50, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default memo(FloatingBackground);
