import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, ShieldAlert } from "lucide-react";

interface EnterSiteSplashProps {
  onEnter: () => void;
}

const EnterSiteSplash = ({ onEnter }: EnterSiteSplashProps) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate high-tech loading progress
    const duration = 1500; // 1.5s total loading time
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsLoaded(true);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    // Smooth transition delay before hiding splash screen
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.08,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] overflow-hidden select-none"
        >
          {/* Futuristic Grid & Ambient BG */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] rounded-full blur-[120px]"
              style={{
                background: "radial-gradient(circle, hsl(172 80% 50% / 0.15) 0%, transparent 70%)"
              }}
            />
          </div>

          {/* Glowing tech boundary lines */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.2)]" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.2)]" />

          {/* Core Content */}
          <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-6 text-center">
            
            {/* Animated Hexagon Icon Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-16 h-16 sm:w-20 sm:h-20 mb-8 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary relative group"
            >
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping opacity-30" />
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-md animate-pulse" />
              <Terminal size={32} className="text-primary drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
            </motion.div>

            {/* Brand Logo styled exactly like reference image */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex text-4xl sm:text-6xl font-display uppercase tracking-[0.25em] font-semibold mb-3"
            >
              <span className="text-white neon-glow-white font-medium">
                ZΞTΛS
              </span>
              <span className="text-primary neon-glow-primary font-black">
                BUILD
              </span>
            </motion.div>

            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-16"
            >
              Web • Mobile • Product Development
            </motion.div>

            {/* loading state vs enter portal button */}
            <div className="h-20 flex flex-col items-center justify-center w-full max-w-[280px]">
              <AnimatePresence mode="wait">
                {!isLoaded ? (
                  <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full space-y-4"
                  >
                    {/* Progress Bar Container */}
                    <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative border border-white/5">
                      <motion.div 
                        className="h-full bg-primary"
                        style={{ width: `${progress}%` }}
                        layoutId="progress-bar-inner"
                      />
                    </div>
                    {/* Status & percentage */}
                    <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground/60 tracking-wider">
                      <span className="uppercase">Initializing Core Systems</span>
                      <span>{progress}%</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="enter-button"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-full"
                  >
                    <button
                      onClick={handleEnter}
                      className="w-full py-4 rounded-xl border border-primary/40 bg-primary/10 text-primary font-bold text-sm uppercase tracking-[0.25em] relative overflow-hidden group transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] hover:bg-primary hover:text-black hover:border-primary active:scale-[0.98]"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Enter System
                      </span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Systems footer notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 text-[8px] font-bold uppercase tracking-[0.35em] text-slate-600"
            >
              © {new Date().getFullYear()} ZetasBuild (Pvt) Ltd. All Systems Optimal.
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EnterSiteSplash;
