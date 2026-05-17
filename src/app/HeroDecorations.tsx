import { Sparkles } from "lucide-react";
import PremiumLogoImage from "@/components/PremiumLogoImage";

const AITerminalWidget = () => {
  const lines = [
    { text: "$ zetas-ai --init", className: "text-primary", delay: "1.4s" },
    { text: "> Loading neural engine...", className: "text-slate-400", delay: "2s" },
    { text: "> Model accuracy: 98.7%", className: "text-slate-400", delay: "2.6s" },
    { text: "> AI pipeline ready ✓", className: "text-green-400", delay: "3.2s" },
  ];

  return (
    <div
      className="absolute -bottom-2 -left-6 z-20 glass-card border border-primary/30 rounded-2xl shadow-2xl overflow-hidden w-64 animate-terminal-enter opacity-0"
      style={{ background: "rgba(3,7,18,0.85)", backdropFilter: "blur(20px)" }}
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <span className="text-[10px] text-white/30 font-mono ml-2">zetas-ai terminal</span>
      </div>
      <div className="p-4 font-mono text-xs space-y-1">
        {lines.map((line) => (
          <div
            key={line.text}
            className={`${line.className} opacity-0 animate-terminal-line`}
            style={{ animationDelay: line.delay }}
          >
            {line.text}
          </div>
        ))}
        <span className="inline-block w-2 h-3 bg-primary ml-0.5 mt-1 animate-cursor-blink" />
      </div>
    </div>
  );
};

const HeroDecorations = () => (
  <div className="lg:w-2/5 relative flex justify-center items-center animate-hero-visual">
    <div className="relative flex justify-center items-center w-full">
      <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute w-[120%] h-[120%] border border-dashed border-primary/20 rounded-full animate-spin-slow" />
      <div className="relative z-10 w-full max-w-[400px] aspect-square animate-logo-float">
        <PremiumLogoImage
          className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(34,211,238,0.4)]"
          loading="eager"
          fetchPriority="high"
          maxWidth={400}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 pointer-events-none" />
        <div
          className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full blur-md animate-pulse-glow"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary rounded-full blur-md animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
      <AITerminalWidget />
      <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-2xl border border-white/20 shadow-xl z-20 flex items-center gap-3 animate-badge-enter opacity-0">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Sparkles size={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Precision Built</span>
          <span className="text-sm font-bold">Standard of Excellence</span>
        </div>
      </div>
    </div>
  </div>
);

export default HeroDecorations;
