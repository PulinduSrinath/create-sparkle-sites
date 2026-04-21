import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import missionOrb from "/devcraft_mission_orb.png";

const content = {
  "Our Mission": {
    tagline: "Fueling the Rapid Rise",
    title: "Enabling Hyper-Scale for Modern Businesses.",
    text: "DevCraft's core mission is to eliminate technical bottlenecks. We provide the high-performance infrastructure and creative agility needed for consultancies and enterprises to scale without friction. Our designs aren't just pretty faces; they are engines of growth.",
    accent: "bg-primary"
  },
  "Our Vision": {
    tagline: "A Digital-First Era",
    title: "Pioneering the Next Wave of Digital Logic.",
    text: "We envision a world where technical complexity is no longer a barrier to creativity. By crafting tools that are both powerful and transparent, we empower our partners to focus on what they do best while we engineer the background magic.",
    accent: "bg-secondary"
  },
  "Our Value": {
    tagline: "The Craft Standard",
    title: "Precision Engineering. Creative Integrity.",
    text: "Innovation is our baseline. Every pixel we place and every line of code we write is measured against a standard of absolute excellence. We don't settle for 'good enough'; we strive for legendary impact in every deployment.",
    accent: "bg-accent"
  }
};

const AboutMission = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof content>("Our Mission");

  return (
    <section className="py-32 bg-card relative overflow-hidden">
      {/* Background Cyber Pattern */}
      <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(135deg,#00f0ff_1px,transparent_1px),linear-gradient(45deg,#8b5cf6_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24 relative z-10">
          
          {/* Visual Block */}
          <motion.div 
            initial={{ opacity: 0, rotate: -15, scale: 0.8, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, rotate: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
            className="lg:w-1/2 relative order-2 lg:order-1"
          >
            <div className="relative group">
              {/* breathing pulse glow */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-primary rounded-full blur-[120px]" 
              />
              
              <motion.img 
                src={missionOrb} 
                alt="DevCraft Mission Orb" 
                animate={{ 
                  y: [0, -20, 0],
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-auto relative z-10 drop-shadow-[0_0_80px_rgba(34,211,238,0.3)]"
              />
            </div>
            
            {/* Precision Orbital Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-primary/10 rounded-full border-dashed opacity-40 pointer-events-none" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-secondary/10 rounded-full pointer-events-none" 
            />
          </motion.div>

          {/* Content Block */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            {/* Cyber Tabs */}
            <div className="flex flex-wrap gap-4 mb-16">
              {Object.keys(content).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as keyof typeof content)}
                  className={`relative group px-10 py-4 transition-all duration-300 overflow-hidden ${
                    activeTab === tab 
                    ? "text-white" 
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className={`absolute inset-0 transition-all duration-300 transform ${
                    activeTab === tab 
                    ? "bg-primary translate-x-0 scale-100" 
                    : "bg-primary/5 -translate-x-full group-hover:translate-x-0 group-hover:bg-primary/10"
                  }`} style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }} />
                  <span className="relative z-10 font-bold uppercase tracking-widest text-sm">{tab}</span>
                </button>
              ))}
            </div>

            {/* Content Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <div className={`h-1 w-20 ${content[activeTab].accent} mb-8 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]`} />
                  <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
                    {content[activeTab].tagline}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-bold font-display mt-4 leading-tight">
                    {content[activeTab].title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-xl max-w-xl">
                  {content[activeTab].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMission;
