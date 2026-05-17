import PremiumLogoImage from "@/components/PremiumLogoImage";

const ZetasLogo = ({ className = "", showText = true }: { className?: string; showText?: boolean }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden group">
      <PremiumLogoImage
        alt="ZetasBuild Logo Icon"
        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-transform duration-500 group-hover:scale-110"
        maxWidth={56}
        loading="lazy"
      />
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
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

export default ZetasLogo;
