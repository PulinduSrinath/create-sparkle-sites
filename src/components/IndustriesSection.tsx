import { motion } from "framer-motion";
import { 
  Building2, 
  HeartPulse, 
  ShoppingCart, 
  Truck, 
  GraduationCap, 
  Wifi, 
  Film, 
  Landmark, 
  Hotel,
  Zap,
  Globe
} from "lucide-react";

const industries = [
  { name: "Finance & Banking", icon: Building2, color: "text-blue-400", bg: "bg-blue-400/10", dot: "bg-blue-500" },
  { name: "Healthcare & Biotech", icon: HeartPulse, color: "text-emerald-400", bg: "bg-emerald-400/10", dot: "bg-emerald-500" },
  { name: "Retail & E-commerce", icon: ShoppingCart, color: "text-rose-400", bg: "bg-rose-400/10", dot: "bg-rose-500" },
  { name: "Manufacturing & Logistics", icon: Truck, color: "text-amber-400", bg: "bg-amber-400/10", dot: "bg-amber-500" },
  { name: "Education & EdTech", icon: GraduationCap, color: "text-orange-400", bg: "bg-orange-400/10", dot: "bg-orange-500" },
  { name: "Telecommunications", icon: Wifi, color: "text-indigo-400", bg: "bg-indigo-400/10", dot: "bg-indigo-500" },
  { name: "Media & Entertainment", icon: Film, color: "text-purple-400", bg: "bg-purple-400/10", dot: "bg-purple-500" },
  { name: "Public Sector & Gov", icon: Landmark, color: "text-cyan-400", bg: "bg-cyan-400/10", dot: "bg-cyan-500" },
  { name: "Hospitality & Tourism", icon: Hotel, color: "text-pink-400", bg: "bg-pink-400/10", dot: "bg-pink-500" },
];

const IndustriesSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Precision Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 border border-slate-100 text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-8 shadow-sm">
            <Globe size={14} className="animate-pulse" />
            Global Reach
          </div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-tight">
            Industries We <br />
            <span className="text-primary italic underline decoration-slate-200 underline-offset-[12px]">Transform.</span>
          </h2>
          <p className="text-slate-500 text-xl font-medium mt-8 max-w-2xl mx-auto leading-relaxed">
            Engineering precision-built digital ecosystems across the world's most mission-critical sectors.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className={`absolute inset-0 ${industry.bg} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative bg-white border border-slate-100 px-8 py-6 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex items-center gap-6 z-10">
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl ${industry.bg} ${industry.color} group-hover:scale-110 transition-transform`}>
                  <industry.icon size={24} strokeWidth={2.5} />
                </div>
                
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${industry.dot} animate-pulse`} />
                    <span className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                      {industry.name}
                    </span>
                  </div>
                  <div className="h-[2px] w-0 group-hover:w-full bg-primary/20 transition-all duration-500 mt-1" />
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Zap size={14} className="text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Decoration Particles */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default IndustriesSection;
