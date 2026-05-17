import { useMemo, memo } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

type OrbStyle = React.CSSProperties & {
  "--float-duration"?: string;
  "--float-delay"?: string;
  "--orbit-duration"?: string;
};

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
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
        tone: i % 2 === 0 ? "primary" : "secondary",
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
        duration: Math.random() * 40 + 40,
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
        delay: Math.random() * 4,
      })),
    []
  );

  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <div className="absolute inset-0">
        {orbData.slice(0, orbCount).map((orb, i) => (
          <div
            key={`orb-${i}`}
            className={`absolute rounded-full blur-[120px] opacity-[0.08] ${isMobile ? "" : "animate-float-orb"}`}
            style={
              {
                width: orb.width,
                height: orb.height,
                left: `${orb.left}%`,
                top: `${orb.top}%`,
                background: orb.tone === "primary" ? "hsl(var(--primary))" : "hsl(var(--secondary))",
                "--float-duration": `${orb.duration}s`,
                "--float-delay": `${orb.delay}s`,
              } as OrbStyle
            }
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {orbitalData.slice(0, orbitalCount).map((orbital, i) => (
          <div
            key={`orbital-${i}`}
            className="absolute border border-dashed border-primary/10 rounded-full animate-orbit-ring"
            style={
              {
                width: isMobile ? orbital.width * 0.5 : orbital.width,
                height: isMobile ? orbital.height * 0.5 : orbital.height,
                left: `${orbital.left}%`,
                top: `${orbital.top}%`,
                "--orbit-duration": `${orbital.duration}s`,
              } as OrbStyle
            }
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {nodeData.slice(0, nodeCount).map((node, i) => (
          <div
            key={`node-${i}`}
            className={`absolute w-1 h-1 bg-primary/20 rounded-full ${isMobile ? "animate-node-pulse" : "animate-node-drift"}`}
            style={
              {
                left: `${node.left}%`,
                top: `${node.top}%`,
                "--float-duration": `${node.duration}s`,
                "--float-delay": `${node.delay}s`,
              } as OrbStyle
            }
          />
        ))}

        {lineData.map((line, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-line-drift"
            style={
              {
                width: line.width,
                left: `${line.left}%`,
                top: `${line.top}%`,
                rotate: `${line.rotate}deg`,
                "--float-delay": `${line.delay}s`,
              } as OrbStyle
            }
          />
        ))}
      </div>
    </div>
  );
};

export default memo(FloatingBackground);
