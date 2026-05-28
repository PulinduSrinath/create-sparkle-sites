import { useRef, Suspense, lazy } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  Code2, Palette, Smartphone, Cloud, Shield, Database, Cpu, Share2, 
  Briefcase, Truck, ShieldCheck, Brain,
  Building2, HeartPulse, ShoppingCart, GraduationCap, Wifi, Film, Landmark, Hotel, Zap, Globe 
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBackground from "@/components/FloatingBackground";
import CTASection from "@/components/CTASection";

import heroImg from "/services_hero.webp";

// ==========================================
// SERVICES HERO SECTION
// ==========================================
const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="lg:w-3/5">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-ping" />Our Elite Capabilities
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold font-display leading-[0.9] mb-8 tracking-tighter overflow-hidden">
              <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>Engineering</motion.div>
              <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient">Digital Frontiers</motion.div>
              <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>at Scale.</motion.div>
            </h1>
            <p className="text-foreground/70 text-2xl leading-relaxed max-w-2xl mb-12 font-medium">We specialize in turning complex technological challenges into streamlined, <span className="text-secondary font-bold">high-performance</span> digital assets.</p>
            <div className="flex flex-wrap gap-8">
              {[{ label: "Innovation-First", color: "text-primary" }, { label: "Global Standards", color: "text-secondary" }, { label: "Agile Scalability", color: "text-accent" }].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-current ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                  <span className={`text-sm font-bold uppercase tracking-widest ${item.color}`}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, delay: 0.2, type: "spring" }} className="lg:w-2/5 relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
            <img src={heroImg} alt="Services Hero" className="w-full h-auto drop-shadow-[0_0_120px_rgba(0,240,255,0.25)] relative z-10 hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SERVICES BENTO SECTION
// ==========================================
const services = [
  { title: "Full-Stack Development", desc: "End-to-end engineering using modern frameworks to build robust, scalable web ecosystems.", icon: <Code2 size={28} />, color: "from-cyan-400 via-blue-500 to-indigo-600", glow: "rgba(34, 211, 238, 0.4)" },
  { title: "UI/UX Design", desc: "Human-centric interfaces that blend aesthetic beauty with psychological flow.", icon: <Palette size={28} />, color: "from-purple-400 via-pink-500 to-rose-600", glow: "rgba(192, 38, 211, 0.4)" },
  { title: "Mobile Architecture", desc: "High-performance native and cross-platform apps for global reach.", icon: <Smartphone size={28} />, color: "from-teal-400 via-emerald-500 to-green-600", glow: "rgba(20, 184, 166, 0.4)" },
  { title: "Cloud Computing", desc: "Infrastructure optimization and serverless scaling for the modern cloud era.", icon: <Cloud size={28} />, color: "from-orange-400 via-amber-500 to-yellow-600", glow: "rgba(245, 158, 11, 0.4)" },
  { title: "FinTech & Security", desc: "Advanced cryptographic security and blockchain-integrated financial solutions.", icon: <Shield size={28} />, color: "from-blue-500 via-indigo-600 to-purple-700", glow: "rgba(59, 130, 246, 0.4)" },
  { title: "API Development", desc: "Seamlessly connecting platforms with high-throughput, secure API gateways.", icon: <Share2 size={28} />, color: "from-rose-400 via-red-500 to-orange-600", glow: "rgba(251, 113, 133, 0.4)" },
  { title: "SaaS Innovation", desc: "Transforming software concepts into subscription-ready, market-dominant platforms.", icon: <Cpu size={28} />, color: "from-indigo-400 via-purple-500 to-pink-600", glow: "rgba(129, 140, 248, 0.4)" },
  { title: "Infrastructure", desc: "Mission-critical database management and low-latency storage.", icon: <Database size={28} />, color: "from-emerald-400 via-teal-500 to-cyan-600", glow: "rgba(52, 211, 153, 0.4)" },
  { title: "AI & Machine Learning", desc: "Cutting-edge predictive models, NLP, computer vision, and intelligent automation that revolutionises your business operations.", icon: <Brain size={28} />, color: "from-violet-400 via-purple-500 to-fuchsia-600", glow: "rgba(139, 92, 246, 0.5)" }
];

const ServicesBento = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {services.map((service, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ y: -12, transition: { duration: 0.3 } }} className="relative group h-full">
              <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" style={{ background: service.glow }} />
              <div className="h-full backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col items-center text-center transition-all duration-300 relative bg-background/40 group-hover:bg-background/60">
                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${service.color} opacity-[0.03] group-hover:opacity-[0.08] blur-[80px] transition-all duration-500`} />
                <div className="relative z-20 flex flex-col items-center">
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-10 shadow-2xl shadow-black/20 group-hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.3)] transition-all`}>{service.icon}</motion.div>
                  <h3 className="text-3xl font-bold font-display mb-6 tracking-tight group-hover:scale-105 transition-transform duration-300"><span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}>{service.title}</span></h3>
                  <p className="text-foreground/70 leading-relaxed text-lg font-medium">{service.desc}</p>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SERVICES LIFECYCLE SECTION
// ==========================================
const stages = [
  { step: "01", title: "Discovery", desc: "Rigorous market research and stakeholder alignment to define core objectives.", color: "bg-primary" },
  { step: "02", title: "Strategy", desc: "Developing a technical roadmap and architectural blueprint for performance.", color: "bg-secondary" },
  { step: "03", title: "Forge", desc: "Agile engineering and meticulous design to build a world-class product.", color: "bg-accent" },
  { step: "04", title: "Evolution", desc: "Deployment, stabilization, and data-driven optimizations for long-term growth.", color: "bg-orange-500" }
];

const ServicesLifecycle = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={containerRef} className="py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-32 gap-12">
          <motion.div initial={{ opacity: 0, x: -50, filter: "blur(10px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:w-1/2">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">The Digital <br /><span className="text-primary italic">Lifecycle</span> of Excellence.</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50, filter: "blur(10px)" }} whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="lg:w-1/3 pt-6">
            <p className="text-slate-500 text-xl font-medium leading-relaxed">We leverage a structured yet adaptive cycle that ensures every project is delivered with surgical precision and creative brilliance.</p>
          </motion.div>
        </div>
        <div className="relative">
          <div className="absolute top-10 left-0 right-0 hidden lg:block h-2 z-0">
            <svg width="100%" height="20" viewBox="0 0 1200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="10" x2="1200" y2="10" stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round" />
              <motion.line x1="0" y1="10" x2="1200" y2="10" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" style={{ pathLength }} />
            </svg>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
            {stages.map((stage, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 50, filter: "blur(15px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.2, type: "spring", damping: 20 }} className="group">
                <div className="relative mb-14">
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className={`w-20 h-20 rounded-[2rem] ${stage.color} text-white flex items-center justify-center font-bold text-2xl shadow-2xl relative z-10 overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" /><span className="relative z-10 tracking-tight">{stage.step}</span>
                  </motion.div>
                  <motion.div initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: (i * 0.2) + 0.5, duration: 0.8 }} className="absolute top-10 left-10 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-primary/20 rounded-full animate-ping hidden lg:block" />
                  <div className="absolute top-10 left-10 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary z-20 hidden lg:block shadow-lg" />
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">{stage.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed text-lg">{stage.desc}</p>
                <div className="mt-8 h-1 w-full bg-slate-50 rounded-full overflow-hidden lg:hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.2 }} className={`h-full ${stage.color}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==========================================
// SERVICES DOMAINS SECTION
// ==========================================
const domains = [
  { title: "Enterprise Solutions", tagline: "Unifying Operations", icon: <Briefcase size={32} />, desc: "Bespoke ERP and CRM systems engineered to centralize large-scale operations and drive data-driven decision-making.", color: "from-blue-400 to-indigo-600", shadow: "shadow-blue-500/20" },
  { title: "Supply Chain Meta", tagline: "Frictionless Logistics", icon: <Truck size={32} />, desc: "Next-gen logistics tracking and inventory management systems that provide real-time visibility across global networks.", color: "from-purple-400 to-fuchsia-600", shadow: "shadow-purple-500/20" },
  { title: "Governance & Security", tagline: "Total Integrity", icon: <ShieldCheck size={32} />, desc: "Rigorous security audits and multi-layered protection protocols to ensure your digital assets remain impenetrable.", color: "from-emerald-400 to-teal-600", shadow: "shadow-emerald-500/20" }
];

const ServicesDomains = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-24">
          <span className="text-secondary text-sm font-bold tracking-[0.5em] uppercase mb-4 block">Our Specialties</span>
          <h2 className="text-5xl md:text-7xl font-bold font-display max-w-4xl mx-auto leading-tight tracking-tight">Advanced Domains of <br /><span className="gradient-text drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">Expertise</span>.</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {domains.map((domain, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} whileHover={{ y: -15, scale: 1.02 }} className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="bg-card/50 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] text-left hover:border-white/20 transition-all relative z-10 h-full flex flex-col items-start">
                <div className={`p-5 rounded-2xl bg-gradient-to-br ${domain.color} text-white mb-10 shadow-lg ${domain.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>{domain.icon}</div>
                <span className={`text-xs font-bold uppercase tracking-[0.3em] mb-4 group-hover:tracking-[0.4em] transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r ${domain.color}`}>{domain.tagline}</span>
                <h3 className="text-3xl font-bold mb-6 font-display group-hover:translate-x-2 transition-transform duration-300">{domain.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{domain.desc}</p>
                <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// INDUSTRIES SECTION
// ==========================================
const industries = [
  { name: "Finance & Banking", icon: Building2, color: "text-blue-400", bg: "bg-blue-400/10", dot: "bg-blue-500" },
  { name: "Healthcare & Biotech", icon: HeartPulse, color: "text-emerald-400", bg: "bg-emerald-400/10", dot: "bg-emerald-500" },
  { name: "Retail & E-commerce", icon: ShoppingCart, color: "text-rose-400", bg: "bg-rose-400/10", dot: "bg-rose-500" },
  { name: "Manufacturing & Logistics", icon: Truck, color: "text-amber-400", bg: "bg-amber-400/10", dot: "bg-amber-500" },
  { name: "Education & EdTech", icon: GraduationCap, color: "text-orange-400", bg: "bg-orange-400/10", dot: "bg-orange-500" },
  { name: "Telecommunications", icon: Wifi, color: "text-indigo-400", bg: "bg-indigo-400/10", dot: "bg-indigo-500" },
  { name: "Media & Entertainment", icon: Film, color: "text-purple-400", bg: "bg-purple-400/10", dot: "bg-purple-500" },
  { name: "Public Sector & Gov", icon: Landmark, color: "text-cyan-400", bg: "bg-cyan-400/10", dot: "bg-cyan-500" },
  { name: "Hospitality & Tourism", icon: Hotel, color: "text-pink-400", bg: "bg-pink-400/10", dot: "bg-pink-500" }
];

const IndustriesSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] opacity-30" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 border border-slate-100 text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-8 shadow-sm">
            <Globe size={14} className="animate-pulse" />Global Reach
          </div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground leading-tight">Industries We <br /><span className="text-primary italic underline decoration-border underline-offset-[12px]">Transform.</span></h2>
          <p className="text-muted-foreground text-xl font-medium mt-8 max-w-2xl mx-auto leading-relaxed">Engineering precision-built digital ecosystems across the world's most mission-critical sectors.</p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {industries.map((industry, i) => (
            <motion.div key={industry.name} initial={{ opacity: 0, scale: 0.9, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.2 } }} className="group relative">
              <div className={`absolute inset-0 ${industry.bg} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative bg-card border border-border px-8 py-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex items-center gap-6 z-10">
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl ${industry.bg} ${industry.color} group-hover:scale-110 transition-transform`}><industry.icon size={24} strokeWidth={2.5} /></div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-3"><div className={`w-2 h-2 rounded-full ${industry.dot} animate-pulse`} /><span className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">{industry.name}</span></div>
                  <div className="h-[2px] w-0 group-hover:w-full bg-primary/20 transition-all duration-500 mt-1" />
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"><Zap size={14} className="text-primary" /></div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

// ==========================================
// MAIN SERVICES PAGE
// ==========================================
const Services = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingBackground />
      <Navbar />
      <main className="pt-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <ServicesHero />
          <ServicesBento />
          <ServicesLifecycle />
          <ServicesDomains />
          <IndustriesSection />
          <CTASection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
