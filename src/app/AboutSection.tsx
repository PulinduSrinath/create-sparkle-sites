import { motion } from "framer-motion";
import { Users, Zap, Shield, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 dark:opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] opacity-40 pointer-events-none" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24">
          <span className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase px-6 py-2 rounded-full border border-primary/20 bg-primary/5 shadow-sm">Who We Are</span>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mt-8">The ZetasBuild <span className="gradient-text italic font-black relative">Philosophy.</span></h2>
        </motion.div>
        
        <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Main Statement Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className="col-span-12 lg:col-span-8 bg-card/60 dark:bg-card/30 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-3xl p-10 md:p-14 flex flex-col justify-between relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/20"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-foreground mb-8 tracking-tight leading-tight">
                We don't just build websites; we craft <span className="gradient-text font-black italic relative z-10">digital experiences</span> that redefine industries.
              </h3>
              <p className="text-muted-foreground/90 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                Our approach merges architectural precision with creative soul. Every line of code we write is a building block for a scalable, high-performance legacy.
              </p>
            </div>
            
            <div className="mt-12">
              <Link to="/about#testimonials" className="inline-block group/btn">
                <div className="h-14 px-8 rounded-full border border-primary/20 hover:border-primary/50 bg-primary/5 hover:bg-primary/10 text-primary font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  What Our Clients Said <ArrowUpRight size={20} className="text-primary transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </div>
              </Link>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-slate-200/40 dark:border-white/5 rounded-full group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
          </motion.div>

          {/* Satisfaction Stat Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="col-span-12 lg:col-span-4 bg-card/60 dark:bg-card/30 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-3xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-primary/20"
          >
            <div className="relative z-10 w-full flex flex-col items-center">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="w-48 h-48 border border-primary/15 rounded-full mx-auto flex items-center justify-center">
                <div className="w-40 h-40 border border-primary/25 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 blur-xl animate-pulse" />
                </div>
              </motion.div>
              <div className="absolute inset-y-0 flex flex-col items-center justify-center text-center pt-2">
                <span className="text-7xl font-black font-display gradient-text tracking-tighter leading-none">100%</span>
                <span className="text-[10px] font-bold text-muted-foreground/80 uppercase tracking-[0.4em] mt-3">Client Satisfaction</span>
              </div>
            </div>
            <p className="mt-8 text-muted-foreground/90 font-bold italic relative z-10 text-lg leading-relaxed max-w-xs">
              "Exceptional code, stunning design, and a partner you can trust globally."
            </p>
          </motion.div>

          {/* Core Values Rows */}
          {[
            { icon: Users, title: "Client-Centric", desc: "Lasting partnerships built on your performance-critical goals.", color: "text-primary", bg: "bg-primary/5" },
            { icon: Zap, title: "Result-Driven", desc: "Every logic cycle is dedicated to measurable market impact.", color: "text-secondary", bg: "bg-secondary/5" },
            { icon: Shield, title: "Quality Excellence", desc: "Military-grade standards for security, speed, and design.", color: "text-accent", bg: "bg-accent/5" }
          ].map((item, i) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 * i }} 
              className="col-span-12 md:col-span-6 lg:col-span-4 bg-card/60 dark:bg-card/30 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-3xl p-10 group hover:border-primary/30 dark:hover:border-primary/30 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/30 mb-8">
                <item.icon size={26} className={item.color} />
              </div>
              <h4 className="text-2xl font-black text-foreground mb-4 tracking-tight">{item.title}</h4>
              <p className="text-muted-foreground/80 text-base md:text-lg leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
