import PremiumLogoImage from "@/components/PremiumLogoImage";

const ZetasLogo = ({ className = "", showText = true }: { className?: string; showText?: boolean }) => (
  <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
    <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden group">
      <PremiumLogoImage
        alt="ZetasBuild Logo Icon"
        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-transform duration-500 group-hover:scale-110"
        maxWidth={48}
        loading="lazy"
      />
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
    </div>

    {showText && (
      <div className="flex flex-col font-display leading-none">
        <div className="flex items-center">
          <div className="flex text-lg sm:text-2xl tracking-widest font-semibold uppercase">
            <span className="text-foreground dark:text-white neon-glow-white font-medium select-none">
              ZΞTΛS
            </span>
            <span className="text-primary neon-glow-primary font-black select-none">
              BUILD
            </span>
          </div>
        </div>
        <div className="hidden xs:block text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mt-1">
          Web • Mobile • Product Development
        </div>
      </div>
    )}
  </div>
);

export default ZetasLogo;
