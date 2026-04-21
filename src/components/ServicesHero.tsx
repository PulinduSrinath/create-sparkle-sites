import { motion } from "framer-motion";
import heroImg from "/services_hero.png";

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-background">
      {/* Dynamic Mesh Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-3/5"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
              Our Elite Capabilities
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold font-display leading-[0.9] mb-8 tracking-tighter overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Engineering
              </motion.div>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient"
              >
                Digital Frontiers
              </motion.div>
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                at Scale.
              </motion.div>
            </h1>
            
            <p className="text-foreground/70 text-2xl leading-relaxed max-w-2xl mb-12 font-medium">
              We specialize in turning complex technological challenges into streamlined, <span className="text-secondary font-bold">high-performance</span> digital assets.
            </p>
            
            <div className="flex flex-wrap gap-8">
              {[
                { label: "Innovation-First", color: "text-primary" },
                { label: "Global Standards", color: "text-secondary" },
                { label: "Agile Scalability", color: "text-accent" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-current ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
                  <span className={`text-sm font-bold uppercase tracking-widest ${item.color}`}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            className="lg:w-2/5 relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
            <img 
              src={heroImg} 
              alt="Services Hero" 
              className="w-full h-auto drop-shadow-[0_0_120px_rgba(0,240,255,0.25)] relative z-10 hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
