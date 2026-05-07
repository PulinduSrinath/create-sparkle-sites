import { motion } from "framer-motion";

const ZetasLogo = ({ className = "", showText = true }: { className?: string, showText?: boolean }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden group"
      >
        <img 
          src="/premium-logo-icon.webp" 
          alt="ZetasBuild Logo Icon" 
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
      </motion.div>
      
      <div className="relative">
        <motion.div
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-4rem] top-[-1.5rem] w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 pointer-events-none"
        />
      </div>
      
      {showText && (
        <div className="flex flex-col font-display leading-none tracking-tight">
          <div className="flex items-baseline gap-1">
            <div className="flex text-3xl font-black tracking-tighter">
              <span className="text-foreground dark:text-white">ZETAS</span>
              <span className="text-primary">BUILD</span>
            </div>
            <span className="text-[12px] font-black text-foreground/40 dark:text-white/40">.COM</span>
          </div>
          <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mt-1">
            Web • Mobile • Product Development
          </div>
        </div>
      )}
    </div>
  );
};


export default ZetasLogo;
