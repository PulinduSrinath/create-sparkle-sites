import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone, ArrowUpRight } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Immersive Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Neural Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Connection Lines Decor (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--secondary)" />
            </linearGradient>
          </defs>
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            d="M0 100 Q 250 500 500 100 T 1000 100" 
            fill="none" 
            stroke="url(#line-grad)" 
            strokeWidth="1" 
          />
        </svg>

        {/* Communication Pulse Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          
          {/* Content Column */}
          <div className="lg:w-3/5 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              Establish a Partnership
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold font-display leading-[0.85] mb-10 tracking-tighter text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
              Let's Build <br />
              <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,240,255,0.2)]">Something Exceptional.</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-foreground/70 text-2xl leading-relaxed max-w-2xl font-medium mb-12"
            >
              Connect with the precision engineers and digital visionaries crafting the next generation of scalable legacies.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center gap-3 text-white/40 hover:text-primary transition-colors cursor-pointer group">
                <Mail size={18} />
                <span className="text-sm font-bold uppercase tracking-widest">hello@devcraft.sh</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
              </div>
              <div className="w-[1px] h-4 bg-white/10" />
              <div className="flex items-center gap-3 text-white/40 hover:text-secondary transition-colors cursor-pointer group">
                <Phone size={18} />
                <span className="text-sm font-bold uppercase tracking-widest">+94 77 123 4567</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Column - The Communication Hub */}
          <div className="lg:w-2/5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, type: "spring" }}
              className="relative w-80 h-? flex items-center justify-center py-20"
            >
              {/* Spinning Orbital Node */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-[140%] h-[140%] border border-white/5 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-[110%] h-[110%] border border-white/10 rounded-full"
                />
              </div>

              {/* Central Hub Orb */}
              <div className="relative w-64 h-64 rounded-[3rem] glass-card border-white/20 bg-white/[0.01] shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex items-center justify-center group overflow-hidden">
                {/* Internal Pulsing Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-30" />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="z-10 text-primary opacity-60 flex items-center justify-center"
                >
                  <MessageSquare size={80} className="drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]" />
                </motion.div>

                {/* Cyber Geometric Decor */}
                <div className="absolute top-4 right-4 w-12 h-1 bg-primary/20 rounded-full rotate-45" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border border-secondary/20 rounded-lg rotate-[30deg]" />
              </div>

              {/* Floating "Node" Tags */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-4 py-2.5 px-5 glass-card rounded-2xl text-[10px] font-bold text-primary uppercase tracking-[0.2em] border border-primary/40 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              >
                Inquiry
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-10 -left-10 py-2.5 px-5 glass-card rounded-2xl text-[10px] font-bold text-secondary uppercase tracking-[0.2em] border border-secondary/40 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
              >
                Consultation
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Signature Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
    </section>
  );
};

export default ContactHero;
