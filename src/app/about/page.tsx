import { useState, useEffect, useRef, useCallback, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform, useInView, AnimatePresence } from "framer-motion";
import { 
  Users, Star, Globe, Zap, 
  Facebook, Instagram, Linkedin, Youtube, Twitter, Mail, ArrowRight, Share2, 
  Check, Cpu, Smartphone, Layout, 
  Code2, 
  Quote, ChevronLeft, ChevronRight 
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBackground from "@/components/FloatingBackground";

import engineImage from "/ZetasBuild_engineering.webp";
import missionOrb from "/ZetasBuild_mission_orb.webp";
import ownerProImg from "/owner_pro.webp";

// ==========================================
// ABOUT HERO SECTION
// ==========================================
const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.4em] mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
              The ZetasBuild Legacy
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold font-display leading-[0.9] mb-10 tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Architecting <br />
              <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">Digital Futures.</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-foreground/70 text-2xl leading-relaxed max-w-2xl font-medium mb-12"
            >
              We are a team of precision engineers and digital visionaries dedicated to building high-performance software that shapes industries.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-12"
            >
              <div className="h-[1px] w-12 bg-primary/50" />
              <span className="text-muted-foreground text-sm font-bold uppercase tracking-[0.3em] font-display">Crafted in Sri Lanka • Trusted Globally</span>
            </motion.div>
          </div>

          <div className="lg:w-2/5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="relative w-80 h-80 flex items-center justify-center"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-primary/30 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border border-dashed border-secondary/30 rounded-full"
              />
              <div className="relative w-56 h-56 rounded-full glass-card border border-white/20 shadow-2xl flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-40 animate-pulse" />
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="z-10"
                >
                  <img
                    src="/logo-rebranded-256.webp"
                    srcSet="/logo-rebranded-256.webp 256w, /logo-rebranded.webp 320w"
                    sizes="96px"
                    alt="ZetasBuild"
                    width={96}
                    height={110}
                    className="w-24 h-24 object-contain drop-shadow-[0_0_20px_rgba(0,82,255,0.6)] scale-150"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-xl" />
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
              </div>
              <motion.div 
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-0 right-0 py-2 px-4 glass-card rounded-xl text-[10px] font-bold text-primary uppercase tracking-widest border-primary/30"
              >
                Scalable
              </motion.div>
              <motion.div 
                animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute bottom-0 left-0 py-2 px-4 glass-card rounded-xl text-[10px] font-bold text-secondary uppercase tracking-widest border-secondary/30"
              >
                Precise
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

// ==========================================
// ABOUT STATS SECTION
// ==========================================
const stats = [
  { title: "Expertise", value: 15, suffix: "+", detail: "Core Engineers", icon: <Users size={24} />, color: "from-blue-600 to-indigo-600", delay: 0 },
  { title: "Satisfaction", value: 100, suffix: "%", detail: "Client Success", icon: <Star size={24} />, color: "from-purple-600 to-violet-600", delay: 0.1 },
  { title: "Impact", value: 2.0, suffix: "k", decimals: 1, detail: "Global Reach", icon: <Globe size={24} />, color: "from-indigo-600 to-purple-600", delay: 0.2 },
  { title: "Innovation", value: 20, suffix: "+", detail: "Custom Techs", icon: <Zap size={24} />, color: "from-violet-600 to-fuchsia-600", delay: 0.3 }
];

const CountUp = ({ value, suffix = "", decimals = 0 }: { value: number, suffix?: string, decimals?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 80 });
  const displayValue = useTransform(springValue, (latest) => latest.toFixed(decimals) + suffix);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => motionValue.set(value), 300);
      return () => clearTimeout(t);
    } else {
      motionValue.set(0);
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const MagneticCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 150, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: stat.delay, type: "spring", bounce: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`relative group ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
    >
      <div className="glass-card p-10 rounded-[2.5rem] border-white/10 relative z-10 overflow-hidden h-full shadow-2xl transition-colors duration-500 hover:border-white/20">
        <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-700`} />
        <div className="flex flex-col items-center text-center">
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className={`p-5 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.1)]`}
          >
            {stat.icon}
          </motion.div>
          <h2 className="text-[10px] font-bold uppercase tracking-[4px] text-muted-foreground mb-4">{stat.title}</h2>
          <div className="text-5xl md:text-6xl font-bold font-display tracking-tighter mb-2 gradient-text min-h-[1.2em]">
            <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
          </div>
          <p className="text-muted-foreground font-bold text-sm tracking-wide">{stat.detail}</p>
        </div>
      </div>
      <div className="absolute inset-x-8 -bottom-2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
    </motion.div>
  );
};

const AboutStats = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => <MagneticCard key={i} stat={stat} index={i} />)}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// ABOUT INTRO SECTION
// ==========================================
const socials = [
  { icon: <Facebook size={18} />, color: "hover:bg-primary hover:text-white", href: "#", name: "Facebook" },
  { icon: <Instagram size={18} />, color: "hover:bg-primary hover:text-white", href: "https://www.instagram.com/zetasbuild?igsh=Z3NvNmE0eDN1eWo3&utm_source=qr", name: "Instagram" },
  { icon: <Linkedin size={18} />, color: "hover:bg-primary hover:text-white", href: "#", name: "LinkedIn" },
  { icon: <Youtube size={18} />, color: "hover:bg-primary hover:text-white", href: "#", name: "YouTube" },
  { icon: <Twitter size={18} />, color: "hover:bg-primary hover:text-white", href: "#", name: "Twitter" },
];

const AboutIntro = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-12"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-muted border border-border text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-10 shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Engineering The Future
              </motion.div>
              <h2 className="text-6xl md:text-8xl font-bold text-foreground leading-[0.9] tracking-tighter mb-8">
                Digital <br />
                <span className="text-primary italic">Excellence.</span> <br />
                Redefined.
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-xl font-medium">
                ZetasBuild is more than a technical partner; we are the architectural engine behind global digital legacies. We blend creative artistry with rigorous engineering standards to inspire innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ y: -5 }} className="p-8 rounded-[2rem] bg-muted border border-border group transition-all">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                  <Globe size={22} />
                </div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Primary Operations</div>
                <div className="text-foreground font-bold text-lg">Matara, Sri Lanka</div>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="p-8 rounded-[2rem] bg-muted border border-border group transition-all">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-secondary mb-6 transition-colors group-hover:bg-secondary group-hover:text-white">
                  <Mail size={22} />
                </div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Corporate Channel</div>
                <div className="text-foreground font-bold text-lg">zetasbuild@gmail.com</div>
              </motion.div>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-8">
              <div className="flex items-center gap-4 text-muted-foreground">
                <Share2 size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Global Reach</span>
              </div>
              <div className="hidden sm:block h-[1px] w-12 bg-border" />
              <div className="flex flex-wrap gap-4">
                {socials.map((social, i) => (
                  <motion.a
                    key={i} href={social.href} aria-label={`Follow us on ${social.name}`}
                    whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 shadow-sm ${social.color} hover:shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring" }}
            className="lg:w-1/2 relative flex justify-center"
          >
            <div className="relative z-10 w-full max-w-[550px]">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20 animate-pulse" />
              <img src={engineImage} alt="ZetasBuild Engineering" loading="lazy" className="w-full h-auto drop-shadow-[0_40px_100px_rgba(0,0,0,0.1)] rounded-[3rem] relative z-10 border-4 border-white shadow-2xl" />
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-6 -right-6 py-3 px-6 bg-card border border-border rounded-2xl shadow-xl z-20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">Active Innovation</span>
                </div>
              </motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent blur-3xl opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// ABOUT CAPABILITIES SECTION
// ==========================================
const capabilities = [
  { title: "Web Dynamics", description: "Architecting high-performance web systems that scale with your ambitions. We don't just build sites; we craft digital ecosystems optimized for speed, SEO, and user retention.", icon: <Cpu size={32} className="text-primary" />, items: ["Adaptive Frameworks", "Edge Computing", "SEO Dominance", "Bespoke CMS"] },
  { title: "Mobile Mastery", description: "Driving engagement through native and cross-platform mobile apps. Our focus is on frictionless performance and intuitive gestures that keep users coming back.", icon: <Smartphone size={32} className="text-secondary" />, items: ["Full-Stack Native", "Swift & Kotlin", "Real-time Push", "Offline First"] },
  { title: "Creative Logic", description: "Bridging the gap between aesthetic beauty and technical logic. Our UI/UX designs are rooted in behavioral data and human-centric psychology.", icon: <Layout size={32} className="text-accent" />, items: ["Data-Driven UX", "Interaction Design", "Motion Branding", "WCAG Compliance"] }
];

const AboutCapabilities = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-28">
          <motion.div initial={{ opacity: 0, x: -40, filter: "blur(10px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8 text-foreground">
              Engineering <span className="text-primary italic">Experiences</span> <br />
              That Leave a Mark.
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40, filter: "blur(10px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:w-1/2 pt-4">
            <p className="text-muted-foreground text-xl leading-relaxed border-l-4 border-primary/20 pl-10 font-medium">
              "At ZetasBuild, we reject the ordinary. We are pioneers of digital innovation, turning complex technical debts into streamlined assets that propel growth."
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 50, filter: "blur(15px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.2, type: "spring", damping: 20 }} whileHover={{ y: -15 }} className="bg-card border border-border p-12 rounded-[3rem] hover:border-primary/20 transition-all duration-700 relative group overflow-hidden shadow-xl shadow-black/5">
              <motion.div initial={{ left: "-150%" }} whileInView={{ left: "150%" }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), ease: "easeInOut" }} className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none z-10" />
              <div className="mb-10 p-6 rounded-2xl bg-muted border border-border inline-block group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_15px_30px_rgba(34,211,238,0.3)] transition-all duration-500">
                {cap.icon}
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-foreground">{cap.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-12 font-medium">{cap.description}</p>
              <div className="grid grid-cols-1 gap-4 pt-4 border-t border-border">
                {cap.items.map((item, j) => (
                  <motion.div key={j} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 + (i * 0.1) + (j * 0.05) }} className="flex items-center gap-4 text-sm font-bold text-foreground group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />{item}
                  </motion.div>
                ))}
              </div>
              <div className="absolute inset-x-12 -bottom-4 h-10 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// ABOUT MISSION SECTION
// ==========================================
const missionContent = {
  "Our Mission": { tagline: "Fueling the Rapid Rise", title: "Enabling Hyper-Scale for Modern Businesses.", text: "ZetasBuild's core mission is to eliminate technical bottlenecks. We provide the high-performance infrastructure and creative agility needed for consultancies and enterprises to scale without friction. Our designs aren't just pretty faces; they are engines of growth.", accent: "bg-primary" },
  "Our Vision": { tagline: "A Digital-First Era", title: "Pioneering the Next Wave of Digital Logic.", text: "We envision a world where technical complexity is no longer a barrier to creativity. By crafting tools that are both powerful and transparent, we empower our partners to focus on what they do best while we engineer the background magic.", accent: "bg-secondary" },
  "Our Value": { tagline: "The Craft Standard", title: "Precision Engineering. Creative Integrity.", text: "Innovation is our baseline. Every pixel we place and every line of code we write is measured against a standard of absolute excellence. We don't settle for 'good enough'; we strive for legendary impact in every deployment.", accent: "bg-accent" }
};

const AboutMission = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof missionContent>("Our Mission");
  return (
    <section className="py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(135deg,#00f0ff_1px,transparent_1px),linear-gradient(45deg,#8b5cf6_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24 relative z-10">
          <motion.div initial={{ opacity: 0, rotate: -15, scale: 0.8, filter: "blur(20px)" }} whileInView={{ opacity: 1, rotate: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 1.2, type: "spring", bounce: 0.3 }} className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative group">
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-primary rounded-full blur-[120px]" />
              <motion.img src={missionOrb} alt="ZetasBuild Mission Orb" animate={{ y: [0, -20, 0], scale: [1, 1.05, 1], rotate: [0, 2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="w-full h-auto relative z-10 drop-shadow-[0_0_80px_rgba(34,211,238,0.3)]" />
            </div>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-primary/10 rounded-full border-dashed opacity-40 pointer-events-none" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-secondary/10 rounded-full pointer-events-none" />
          </motion.div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="flex flex-wrap gap-4 mb-16">
              {Object.keys(missionContent).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab as keyof typeof missionContent)} className={`relative group px-10 py-4 transition-all duration-300 overflow-hidden ${activeTab === tab ? "text-white" : "text-muted-foreground hover:text-foreground"}`}>
                  <div className={`absolute inset-0 transition-all duration-300 transform ${activeTab === tab ? "bg-primary translate-x-0 scale-100" : "bg-primary/5 -translate-x-full group-hover:translate-x-0 group-hover:bg-primary/10"}`} style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }} />
                  <span className="relative z-10 font-bold uppercase tracking-widest text-sm">{tab}</span>
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="space-y-8">
                <div>
                  <div className={`h-1 w-20 ${missionContent[activeTab].accent} mb-8 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]`} />
                  <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">{missionContent[activeTab].tagline}</span>
                  <h2 className="text-4xl md:text-6xl font-bold font-display mt-4 leading-tight">{missionContent[activeTab].title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-xl max-w-xl">{missionContent[activeTab].text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// OWNER SECTION
// ==========================================
const OwnerSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-50" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none opacity-50" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:w-[35%] relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="w-[125%] h-[125%] border-[0.5px] border-primary/30 rounded-full opacity-40 shadow-[0_0_20px_rgba(34,211,238,0.1)]" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-[115%] h-[115%] border-[0.5px] border-secondary/30 rounded-full opacity-30 shadow-[0_0_20px_rgba(168,85,247,0.1)]" />
            </div>
            <div className="relative z-10 p-2">
              <div className="relative overflow-hidden rounded-[3.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                <img src={ownerProImg} alt="P.S Ekanayake" loading="lazy" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-blue-600 p-5 rounded-[2rem] shadow-2xl shadow-primary/30 flex items-center gap-4 z-20 border border-white/20">
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white backdrop-blur-md"><Code2 size={20} /></div>
                <div><div className="text-white font-bold text-base leading-none">P.S Ekanayake</div><div className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5">Founder</div></div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:w-[60%] space-y-8">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6">Executive Leadership</div>
              <h2 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-8 tracking-tighter">Leading with <br /><span className="gradient-text">Precision Engineering.</span></h2>
              <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full mb-10" />
            </div>
            <div className="space-y-6">
              <p className="text-foreground/80 text-xl leading-relaxed font-medium">P.S Ekanayake is a distinguished Software Engineer and the visionary architect behind <span className="text-primary font-bold">DevCraft</span>.</p>
              <p className="text-foreground/60 leading-relaxed italic border-l-4 border-secondary/50 pl-10 text-lg">"Our mission is simple: we don't just build software, we engineer legacies. Precision, scalability, and impact are the non-negotiable standards of our deployment."</p>
            </div>
            <div className="glass-card p-10 rounded-[2.5rem] border-white/10 bg-white/[0.01] inline-block font-mono text-sm group hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-2 mb-4 opacity-40 group-hover:opacity-100 transition-opacity"><div className="w-3 h-3 rounded-full bg-red-500/50" /><div className="w-3 h-3 rounded-full bg-yellow-500/50" /><div className="w-3 h-3 rounded-full bg-green-500/50" /></div>
              <p className="mb-px"><span className="text-secondary font-bold">const</span> <span className="text-primary">devCraftPhilosophy</span> = &#123;</p>
              <p className="pl-6 py-0.5">vision: <span className="text-accent italic">"Excellence"</span>,</p>
              <p className="pl-6 py-0.5">standards: <span className="text-accent italic">"Global"</span>,</p>
              <p className="pl-6 py-0.5">impact: <span className="text-accent">() =&gt; build(future)</span></p>
              <p>&#125;;</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// TESTIMONIALS SECTION
// ==========================================
const testimonials = [
  { text: "ZetasBuild's point-of-sale solution has been a game-changer for our business. The system is intuitive, lightning-fast, and provides the detailed insights we need to manage our multi-location stores effectively.", rating: 5 },
  { text: "The technical support and professionalism of the ZetasBuild team are unmatched. They custom-built our patient management portal with seamless efficiency, helping us go completely digital.", rating: 5 },
  { text: "Scaling our SaaS platform was a nightmare until we partnered with ZetasBuild. Their architectural redesign allowed us to handle a 400% increase in traffic without a single second of downtime.", rating: 5 },
  { text: "The FinTech security audit performed by ZetasBuild was the most rigorous we've seen. They identified critical vulnerabilities in our legacy code and helped us secure our global API gateway.", rating: 5 },
  { text: "Their UI/UX team transformed our clunky enterprise app into a sleek, modern experience that our employees actually love using. The boost in internal productivity has been remarkable.", rating: 5 },
  { text: "From mobile app engineering to cloud-native database management, ZetasBuild is a powerhouse. They are our go-to partner for all mission-critical software engineering needs.", rating: 5 }
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.98 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 300 : -300, opacity: 0, scale: 0.98 })
  };

  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] rotate-12 pointer-events-none"><Quote size={300} className="text-foreground" /></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Said <br />About <span className="text-primary">ZetasBuild</span></h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>
        </div>
        <div className="relative max-w-4xl mx-auto h-[450px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div key={index} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 35 }, opacity: { duration: 0.3 } }} className="absolute w-full">
              <div className="bg-muted p-12 md:p-16 rounded-[3rem] border border-border flex flex-col items-start relative group hover:bg-card hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 min-h-[300px]">
                <div className="flex gap-1 mb-8">{[...Array(testimonials[index].rating)].map((_, i) => <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed mb-10 italic relative z-10">"{testimonials[index].text}"</p>
                <div className="mt-auto flex items-center justify-end w-full"><div className="text-border group-hover:text-primary/10 transition-colors"><Quote size={60} /></div></div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-8">
            <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-transparent transition-all shadow-sm"><ChevronLeft size={20} /></button>
            <div className="flex gap-3">{testimonials.map((_, i) => <button key={i} onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }} className={`transition-all duration-500 rounded-full h-1.5 ${i === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"}`} />)}</div>
            <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-transparent transition-all shadow-sm"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// MAIN ABOUT PAGE
// ==========================================
const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingBackground />
      <Navbar />
      <main className="pt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AboutHero />
          <AboutStats />
          <AboutIntro />
          <AboutCapabilities />
          <AboutMission />
          <OwnerSection />
          <TestimonialsSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
