import { motion } from "framer-motion";

const ZetasLogo = ({ className = "", showText = true }: { className?: string, showText?: boolean }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative w-12 h-12 flex-shrink-0"
      >
        <img 
          src="/premium-logo-icon.png" 
          alt="ZetasBuild Logo Icon" 
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] scale-125"
        />
        <motion.div
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-primary/10 rounded-full blur-xl -z-10"
        />
      </motion.div>
      
      {showText && (
        <div className="flex flex-col font-display leading-tight tracking-tight">
          <div className="flex items-baseline gap-0.5">
            <div className="flex text-2xl font-black tracking-tighter">
              <span className="text-foreground dark:text-white">ZETAS</span>
              <span className="text-primary">BUILD</span>
            </div>
            <span className="text-[10px] font-bold text-foreground/60 dark:text-white/60">.COM</span>
          </div>
          <div className="text-[7px] font-bold uppercase tracking-[0.25em] text-muted-foreground/80 mt-0.5">
            Web • Mobile • Product Development
          </div>
        </div>
      )}
    </div>
  );
};


export default ZetasLogo;
