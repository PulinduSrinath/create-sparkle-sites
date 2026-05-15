import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Code2, Terminal, Layers, Box, Cpu, Cloud, Database, Layout, Server } from "lucide-react";

const row1 = [
  { name: "Next.js", category: "Framework", icon: Globe, color: "#ffffff" },
  { name: "React", category: "Library", icon: Code2, color: "#61dafb" },
  { name: "TypeScript", category: "Language", icon: Terminal, color: "#3178c6" },
  { name: "Node.js", category: "Runtime", icon: Server, color: "#68a063" },
  { name: "Tailwind CSS", category: "Styling", icon: Palette, color: "#06b6d4" },
  { name: "PostgreSQL", category: "Database", icon: Database, color: "#336791" },
];

const row2 = [
  { name: "React Native", category: "Mobile", icon: Smartphone, color: "#61dafb" },
  { name: "AWS", category: "Cloud", icon: Cloud, color: "#ff9900" },
  { name: "Docker", category: "DevOps", icon: Box, color: "#2496ed" },
  { name: "GraphQL", category: "API", icon: Cpu, color: "#e535ab" },
  { name: "Figma", category: "Design", icon: Layers, color: "#f24e1e" },
  { name: "Vercel", category: "Hosting", icon: Layout, color: "#ffffff" },
];

const TechCard = ({ tech }: { tech: typeof row1[0] }) => {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} className="relative flex-shrink-0 w-64 bg-white/[0.03] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 group cursor-default" style={{'--tech-color': tech.color} as React.CSSProperties}>
      <div className="flex items-center gap-5 relative z-10">
        <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center transition-transform group-hover:scale-110 shadow-inner" style={{ color: tech.color }}><tech.icon size={24} /></div>
        <div>
          <h3 className="text-white font-bold tracking-tight text-lg">{tech.name}</h3><span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{tech.category}</span>
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" style={{ background: tech.color }} />
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--tech-color)] to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />
    </motion.div>
  );
};

const MarqueeRow = ({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) => {
  return (
    <div className="flex overflow-hidden group select-none">
      <motion.div animate={{ x: reverse ? ["-100%", "0%"] : ["0%", "-100%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear", repeatType: "loop" }} className="flex gap-6 pr-6 whitespace-nowrap min-w-full items-center">
        {[...items, ...items].map((tech, i) => <TechCard key={`${tech.name}-${i}`} tech={tech} />)}
      </motion.div>
    </div>
  );
};

const TechStackSection = () => {
  return (
    <section id="tech" className="py-32 relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.05)_0,transparent_100%)] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10 mb-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase px-6 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 inline-block">Technological Core</span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">The <span className="gradient-text">Tech Stack</span></h2>
          <p className="text-slate-400 text-xl font-medium mt-6 max-w-2xl mx-auto leading-relaxed">Engineered with a carefully curated ecosystem of enterprise-grade tools.</p>
        </motion.div>
      </div>
      <div className="space-y-8 relative z-10">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default TechStackSection;
