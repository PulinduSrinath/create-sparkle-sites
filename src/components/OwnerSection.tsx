import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import ownerProImg from "/owner_pro.png";

const OwnerSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Professional Tech Background - Grid & Mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-50 transition-opacity" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Photo Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[35%] relative"
          >
            {/* Refined Digital Aura Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-[125%] h-[125%] border-[0.5px] border-primary/30 rounded-full opacity-40 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-[115%] h-[115%] border-[0.5px] border-secondary/30 rounded-full opacity-30 shadow-[0_0_20px_rgba(168,85,247,0.1)]"
              />
            </div>

            <div className="relative z-10 p-2">
              <div className="relative overflow-hidden rounded-[3.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                <img 
                  src={ownerProImg} 
                  alt="P.S Ekanayake" 
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Subtle Glass Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Refined Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-blue-600 p-5 rounded-[2rem] shadow-2xl shadow-primary/30 flex items-center gap-4 z-20 border border-white/20"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white backdrop-blur-md">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="text-white font-bold text-base leading-none">P.S Ekanayake</div>
                  <div className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5">Founder</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-[60%] space-y-8"
          >
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6">
                Executive Leadership
              </div>
              <h2 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-8 tracking-tighter">
                Leading with <br />
                <span className="gradient-text">Precision Engineering.</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-primary to-transparent rounded-full mb-10" />
            </div>

            <div className="space-y-6">
              <p className="text-foreground/80 text-xl leading-relaxed font-medium">
                P.S Ekanayake is a distinguished Software Engineer and the visionary architect behind <span className="text-primary font-bold">DevCraft</span>.
              </p>
              <p className="text-foreground/60 leading-relaxed italic border-l-4 border-secondary/50 pl-10 text-lg">
                "Our mission is simple: we don't just build software, we engineer legacies. Precision, scalability, and impact are the non-negotiable standards of our deployment."
              </p>
            </div>

            {/* Professional Code Philosophy */}
            <div className="glass-card p-10 rounded-[2.5rem] border-white/10 bg-white/[0.01] inline-block font-mono text-sm group hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-2 mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
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

export default OwnerSection;
