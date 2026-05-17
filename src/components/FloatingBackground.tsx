import { motion } from "framer-motion";
import { useMemo, memo } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

const FloatingBackground = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const orbCount = isMobile ? 3 : 6;
  const orbitalCount = isMobile ? 2 : 4;
  const nodeCount = isMobile ? 8 : 15;

  const orbData = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        width: Math.random() * (i < 3 ? 200 : 400) + (i < 3 ? 100 : 200),
        height: Math.random() * (i < 3 ? 200 : 400) + (i < 3 ? 100 : 200),
        left: Math.random() * 100,
        top: Math.random() * 100,
        animX: Math.random() * 100 - 50,
        animY: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 15,
      })),
    []
  );

  const orbitalData = useMemo(
    () =>
      Array.from({ length: 4 }, () => ({
        width: Math.random() * 600 + 400,
        height: Math.random() * 600 + 400,
        left: Math.random() * 100,
        top: Math.random() * 100,
        rotateDuration: Math.random() * 40 + 40,
      })),
    []
  );

  const nodeData = useMemo(
    () =>
      Array.from({ length: 15 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5,
      })),
    []
  );

  const lineData = useMemo(
    () =>
      Array.from({ length: 3 }, () => ({
        width: Math.random() * 300 + 200,
        left: Math.random() * 80,
        top: Math.random() * 100,
        rotate: Math.random() * 45 - 22,
      })),
    []
  );

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      initial={false}
    >
      <div className="absolute inset-0">
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
            animate={
              isMobile
                ? undefined
                : {
                    x: [0, orb.animX, 0],
                    y: [0, orb.animY, 0],
                    scale: [1, 1.1, 1],
                  }
            }
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div className="absolute inset-0" style={{ y: 0 }}>
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

      <div className="absolute inset-0">
        {nodeData.slice(0, nodeCount).map((node, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${node.left}%`,
              top: `${node.top}%`,
            }}
            animate={
              isMobile
                ? { opacity: [0.1, 0.4, 0.1] }
                : {
                    y: [0, -100, 0],
                    opacity: [0.1, 0.4, 0.1],
                    scale: [1, 1.5, 1],
                  }
            }
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          />
        ))}

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
      </div>
    </motion.div>
  );
};

export default memo(FloatingBackground);
