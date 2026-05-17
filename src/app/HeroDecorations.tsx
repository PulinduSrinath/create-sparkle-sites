import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PremiumLogoImage from "@/components/PremiumLogoImage";

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
      <motion.div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
        <motion.div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <motion.div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <motion.div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="text-[10px] text-white/30 font-mono ml-2">zetas-ai terminal</span>
      </motion.div>
      <div className="p-4 font-mono text-xs space-y-1">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay + 1.4, duration: 0.4 }}
            className={
              line.text.startsWith("$")
                ? "text-primary"
                : line.text.includes("✓")
                  ? "text-green-400"
                  : "text-slate-400"
            }
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

const HeroDecorations = () => (
  <div className="lg:w-2/5 relative flex justify-center items-center animate-hero-visual">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex justify-center items-center w-full"
    >
      <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[120%] h-[120%] border border-dashed border-primary/20 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -20, 0], rotateY: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-[400px] aspect-square"
      >
        <PremiumLogoImage
          className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(34,211,238,0.4)]"
          loading="eager"
          fetchPriority="high"
          maxWidth={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 pointer-events-none" />
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
      <AITerminalWidget />
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
);

export default HeroDecorations;
