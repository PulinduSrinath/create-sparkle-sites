import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useMemo, memo } from "react";

const FloatingBackground = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const { scrollY } = useScroll();

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize, { passive: true });
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

  // Pre-compute all random values ONCE to avoid forced reflow during framer-motion
  // animation setup (which reads geometric properties after style invalidation).
  const orbData = useMemo(() => (
    Array.from({ length: 6 }, (_, i) => ({
      width: Math.random() * (i < 3 ? 200 : 400) + (i < 3 ? 100 : 200),
      height: Math.random() * (i < 3 ? 200 : 400) + (i < 3 ? 100 : 200),
      left: Math.random() * 100,
      top: Math.random() * 100,
      animX: Math.random() * 100 - 50,
      animY: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 15,
    }))
  ), []);

  const orbitalData = useMemo(() => (
    Array.from({ length: 4 }, () => ({
      width: Math.random() * 600 + 400,
      height: Math.random() * 600 + 400,
      left: Math.random() * 100,
      top: Math.random() * 100,
      rotateDuration: Math.random() * 40 + 40,
    }))
  ), []);

  const nodeData = useMemo(() => (
    Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }))
  ), []);

  const lineData = useMemo(() => (
    Array.from({ length: 3 }, () => ({
      width: Math.random() * 300 + 200,
      left: Math.random() * 80,
      top: Math.random() * 100,
      rotate: Math.random() * 45 - 22,
    }))
  ), []);

  if (windowSize.width === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Layer 1: Soft Bokeh Orbs */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        {orbData.slice(0, orbCount).map((orb, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-[120px] opacity-[0.08]"
            style={{
              width: orb.width,
              height: orb.height,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
              background: i % 2 === 0 ? "var(--primary)" : "var(--secondary)",
            }}
            animate={isMobile ? {} : {
              x: [0, orb.animX, 0],
              y: [0, orb.animY, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2: Technical Orbital Fragments */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {orbitalData.slice(0, orbitalCount).map((orbital, i) => (
          <motion.div
            key={`orbital-${i}`}
            className="absolute border border-dashed border-primary/10 rounded-full"
            style={{
              width: isMobile ? orbital.width * 0.5 : orbital.width,
              height: isMobile ? orbital.height * 0.5 : orbital.height,
              left: `${orbital.left}%`,
              top: `${orbital.top}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: orbital.rotateDuration, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3: Digital Dust & Micro-Nodes */}
      <motion.div style={{ y: y3 }} className="absolute inset-0">
        {nodeData.slice(0, nodeCount).map((node, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
            }}
            animate={isMobile ? { opacity: [0.1, 0.4, 0.1] } : {
              y: [0, -100, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          />
        ))}

        {/* Floating Technical Lines */}
        {lineData.map((line, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            style={{
              width: line.width,
              left: `${line.left}%`,
              top: `${line.top}%`,
              rotate: line.rotate,
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
