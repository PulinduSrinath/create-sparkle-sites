import { motion } from "framer-motion";
import { Briefcase, Truck, ShieldCheck } from "lucide-react";

const domains = [
  {
    title: "Enterprise Solutions",
    tagline: "Unifying Operations",
    icon: <Briefcase size={32} />,
    desc: "Bespoke ERP and CRM systems engineered to centralize large-scale operations and drive data-driven decision-making.",
    color: "from-blue-400 to-indigo-600",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Supply Chain Meta",
    tagline: "Frictionless Logistics",
    icon: <Truck size={32} />,
    desc: "Next-gen logistics tracking and inventory management systems that provide real-time visibility across global networks.",
    color: "from-purple-400 to-fuchsia-600",
    shadow: "shadow-purple-500/20"
  },
  {
    title: "Governance & Security",
    tagline: "Total Integrity",
    icon: <ShieldCheck size={32} />,
    desc: "Rigorous security audits and multi-layered protection protocols to ensure your digital assets remain impenetrable.",
    color: "from-emerald-400 to-teal-600",
    shadow: "shadow-emerald-500/20"
  }
];

const ServicesDomains = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Dynamic Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-secondary text-sm font-bold tracking-[0.5em] uppercase mb-4 block">Our Specialties</span>
          <h2 className="text-5xl md:text-7xl font-bold font-display max-w-4xl mx-auto leading-tight tracking-tight">
            Advanced Domains of <br />
            <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">Expertise</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {domains.map((domain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="bg-card/50 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] text-left hover:border-white/20 transition-all relative z-10 h-full flex flex-col items-start">
                <div className={`p-5 rounded-2xl bg-gradient-to-br ${domain.color} text-white mb-10 shadow-lg ${domain.shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {domain.icon}
                </div>
                
                <span className={`text-xs font-bold uppercase tracking-[0.3em] mb-4 group-hover:tracking-[0.4em] transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r ${domain.color}`}>
                  {domain.tagline}
                </span>
                
                <h3 className="text-3xl font-bold mb-6 font-display group-hover:translate-x-2 transition-transform duration-300">{domain.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {domain.desc}
                </p>

                <div className="mt-10 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDomains;
