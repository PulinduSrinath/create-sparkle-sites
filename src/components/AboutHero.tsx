import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Immersive Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Digital Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Dynamic Mesh Orbs */}
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
          
          {/* Content Column */}
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

          {/* Visual Column - Glassmorphic 3D Centerpiece */}
          <div className="lg:w-2/5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, type: "spring" }}
              className="relative w-80 h-80 flex items-center justify-center"
            >
              {/* Spinning Orbital Rings */}
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
              
              {/* Glass Orb Section */}
              <div className="relative w-56 h-56 rounded-full glass-card border border-white/20 shadow-2xl flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-40 animate-pulse" />
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="z-10"
                >
                  <img 
                    src="/premium-logo-icon.png" 
                    alt="ZetasBuild" 
                    className="w-24 h-24 object-contain drop-shadow-[0_0_20px_rgba(34,211,238,0.6)] scale-150" 
                  />
                </motion.div>
                
                {/* Internal Reflections */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-xl" />
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
              </div>

              {/* Floating Tech Tags */}
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

      {/* Section Divider Style */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};

export default AboutHero;
