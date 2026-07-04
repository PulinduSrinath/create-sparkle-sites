import PremiumLogoImage from "@/components/PremiumLogoImage";

const ZetasLogo = ({ className = "", showText = true }: { className?: string; showText?: boolean }) => (
  <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
    <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-full overflow-hidden group">
      <PremiumLogoImage
        alt="ZetasBuild Logo Icon"
        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,82,255,0.35)] transition-transform duration-500 group-hover:scale-110"
        maxWidth={48}
        loading="lazy"
      />
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
    </div>

    {showText && (
      <div className="flex flex-col font-display leading-none">
        <div className="flex items-center">
          <div className="flex text-lg sm:text-2xl tracking-normal font-semibold">
            <span className="text-primary font-medium select-none">
              Zetas
            </span>
            <span className="text-[#091E42] dark:text-white font-black select-none">
              Build
            </span>
          </div>
        </div>
        <div className="hidden xs:block text-[8px] font-bold uppercase tracking-[0.35em] text-muted-foreground/60 mt-1">
          SOFTWARE COMPANY
        </div>
      </div>
    )}
  </div>
);

export default ZetasLogo;
