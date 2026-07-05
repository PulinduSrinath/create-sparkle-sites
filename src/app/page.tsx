import { useEffect, useRef, Suspense, lazy, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { useCountUp } from "@/hooks/use-count-up";
import {
  ArrowRight, Sparkles, Users, Brain,
  Award, Globe2, FolderCheck,
  Facebook, Linkedin, Instagram
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "@/components/Navbar";
import DeferredSection from "@/components/DeferredSection";
import HeroDecorations from "./HeroDecorations";

import Footer from "@/components/Footer";
import FloatingBackground from "@/components/FloatingBackground";
import CTASection from "@/components/CTASection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import TechStackSection from "./TechStackSection";

const aiKeywords = ["AI Solutions", "ML Models", "Neural Nets", "Automation", "Deep Learning"];

const StatCard = ({ value, label, icon: Icon, color = "text-primary", glow = "rgba(34,211,238,0.3)" }: { value: string; label: string; icon: React.ElementType; color?: string; glow?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const numValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCountUp(numValue, isInView);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col items-center text-center gap-4 p-6 md:p-8 rounded-3xl bg-card/60 dark:bg-card/30 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500 shadow-md hover:shadow-xl opacity-0 translate-y-5 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 data-[visible=true]:transition-all data-[visible=true]:duration-500 overflow-hidden"
      data-visible={isInView}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/30"
      >
        <Icon size={24} strokeWidth={1.8} className={color} />
      </div>
      <div className="flex flex-col items-center relative z-10">
        <div className="font-display text-4xl md:text-5xl font-black text-foreground leading-none tracking-tighter">
          <span>{count}</span><span>{suffix}</span>
        </div>
        <div className="text-xs font-bold text-muted-foreground/80 uppercase tracking-widest mt-3 leading-tight">{label}</div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${glow.replace("0.3", "0.08")} 0%, transparent 70%)` }} />
    </div>
  );
};

// Social quick-contact strip
const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SocialStrip = () => (
  <section className="py-6 bg-background border-y border-white/5">
    <div className="container mx-auto px-6">
      <p className="text-center text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4">Quick Contact</p>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {[
          { icon: Facebook,     label: "Facebook",  href: "https://www.facebook.com/share/1QTWVwMz7h/?mibextid=wwXIfr", border: "border-[#1877F2]/40", bg: "hover:bg-[#1877F2]/10", text: "text-[#1877F2]", shadow: "hover:shadow-[0_0_20px_rgba(24,119,242,0.3)]" },
          { icon: Linkedin,     label: "LinkedIn",  href: "https://www.linkedin.com/in/zetasbuild",                        border: "border-[#0A66C2]/40", bg: "hover:bg-[#0A66C2]/10", text: "text-[#0A66C2]", shadow: "hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]" },
          { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/94771914260",                                    border: "border-[#25D366]/40", bg: "hover:bg-[#25D366]/10", text: "text-[#25D366]", shadow: "hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]" },
          { icon: Instagram,    label: "Instagram", href: "https://www.instagram.com/zetasbuild?igsh=Z3NvNmE0eDN1eWo3&utm_source=qr", border: "border-[#E1306C]/40", bg: "hover:bg-[#E1306C]/10", text: "text-[#E1306C]", shadow: "hover:shadow-[0_0_20px_rgba(225,48,108,0.3)]" },
        ].map(({ icon: Icon, label, href, border, bg, text, shadow }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow us on ${label}`}
            className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border font-bold text-sm uppercase tracking-widest transition-all duration-300 bg-transparent ${border} ${bg} ${text} ${shadow}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const HeroSection = () => {
  const [kwIndex, setKwIndex] = useState(0);
  const [kwVisible, setKwVisible] = useState(true);

  useEffect(() => {
    let swapTimeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setKwVisible(false);
      swapTimeout = setTimeout(() => {
        setKwIndex((i) => (i + 1) % aiKeywords.length);
        setKwVisible(true);
      }, 220);
    }, 2200);
    return () => {
      clearInterval(interval);
      clearTimeout(swapTimeout);
    };
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-hero-orb-a"
          style={{ background: "radial-gradient(circle, hsl(221 100% 50% / 0.3), transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 animate-hero-orb-b"
          style={{ background: "radial-gradient(circle, hsl(264 100% 56% / 0.3), transparent)" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-05 animate-hero-orb-c"
          style={{ background: "radial-gradient(circle, hsl(280 100% 60% / 0.3), transparent)" }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(hsl(221 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(221 100% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="lg:w-3/5 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 text-sm text-primary font-medium animate-hero-fade">
              <Sparkles size={14} className="text-primary" aria-hidden />
              We Build Digital Experiences
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight mb-6 text-balance">
              Crafting <span className="gradient-text">Websites</span> & <span className="gradient-text">Apps</span> That Matter
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 animate-hero-fade-delayed">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30">
                <Brain size={14} className="text-violet-400" aria-hidden />
                <span className="text-xs text-violet-300 font-semibold uppercase tracking-widest">Now offering</span>
              </div>
              <div className="relative h-8 w-44 overflow-hidden flex items-center">
                <span
                  className={`absolute font-bold text-lg gradient-text transition-all duration-300 ease-out ${
                    kwVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
                  }`}
                >
                  {aiKeywords[kwIndex]}
                </span>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 animate-hero-fade-delayed-2">
              We design and develop high-performance web and mobile applications using Vite, React, and cutting-edge{" "}
              <span className="text-primary font-semibold">AI & ML technologies</span>.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-hero-fade-delayed-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl font-bold text-black bg-primary hover:scale-105 active:scale-95 transition-all text-xl shadow-[0_0_40px_rgba(0,82,255,0.45)]"
              >
                Start Your Project <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 px-8 py-5 rounded-2xl font-bold border border-violet-500/40 text-violet-300 hover:bg-violet-500/10 hover:scale-105 active:scale-95 transition-all text-lg"
              >
                <Brain size={20} /> Explore AI Services
              </Link>
            </div>
          </div>
          <HeroDecorations />
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {[
            { value: "3+",  label: "Year of Experience",  icon: Award,       color: "text-amber-400",   glow: "rgba(251,191,36,0.3)" },
            { value: "50+", label: "Happy Clients",        icon: Users,       color: "text-violet-400",  glow: "rgba(167,139,250,0.3)" },
            { value: "10+", label: "Deployed Countries",   icon: Globe2,      color: "text-blue-500",    glow: "rgba(0,82,255,0.3)" },
            { value: "75+", label: "Successful Projects",  icon: FolderCheck, color: "text-fuchsia-400", glow: "rgba(232,121,249,0.3)" },
          ].map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} color={stat.color} glow={stat.glow} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const id =
      window.requestIdleCallback?.(() => setShowBackground(true)) ??
      window.setTimeout(() => setShowBackground(true), 200);
    return () => {
      if (typeof id === "number") window.clearTimeout(id);
      else window.cancelIdleCallback?.(id);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {showBackground && <FloatingBackground />}
      <Navbar />
      <main>
        <HeroSection />
        <SocialStrip />

        <DeferredSection minHeight="100vh">
          <ServicesSection />
        </DeferredSection>

        <DeferredSection minHeight="24rem">
          <AboutSection />
        </DeferredSection>

        <DeferredSection minHeight="24rem">
          <TechStackSection />
        </DeferredSection>

        <DeferredSection minHeight="8rem">
          <CTASection />
        </DeferredSection>
      </main>

      <DeferredSection minHeight="12rem">
        <Footer />
      </DeferredSection>
    </div>
  );
};

export default Index;
