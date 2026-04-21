import { motion } from "framer-motion";
import { Code2, Palette, Smartphone, Cloud, Shield, Database, Cpu, Share2 } from "lucide-react";

const services = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end engineering using modern frameworks to build robust, scalable web ecosystems.",
    icon: <Code2 size={28} />,
    color: "from-cyan-400 via-blue-500 to-indigo-600",
    glow: "rgba(34, 211, 238, 0.4)",
  },
  {
    title: "UI/UX Design",
    desc: "Human-centric interfaces that blend aesthetic beauty with psychological flow.",
    icon: <Palette size={28} />,
    color: "from-purple-400 via-pink-500 to-rose-600",
    glow: "rgba(192, 38, 211, 0.4)",
  },
  {
    title: "Mobile Architecture",
    desc: "High-performance native and cross-platform apps for global reach.",
    icon: <Smartphone size={28} />,
    color: "from-teal-400 via-emerald-500 to-green-600",
    glow: "rgba(20, 184, 166, 0.4)",
  },
  {
    title: "Cloud Computing",
    desc: "Infrastructure optimization and serverless scaling for the modern cloud era.",
    icon: <Cloud size={28} />,
    color: "from-orange-400 via-amber-500 to-yellow-600",
    glow: "rgba(245, 158, 11, 0.4)",
  },
  {
    title: "FinTech & Security",
    desc: "Advanced cryptographic security and blockchain-integrated financial solutions.",
    icon: <Shield size={28} />,
    color: "from-blue-500 via-indigo-600 to-purple-700",
    glow: "rgba(59, 130, 246, 0.4)",
  },
  {
    title: "API Development",
    desc: "Seamlessly connecting platforms with high-throughput, secure API gateways.",
    icon: <Share2 size={28} />,
    color: "from-rose-400 via-red-500 to-orange-600",
    glow: "rgba(251, 113, 133, 0.4)",
  },
  {
    title: "SaaS Innovation",
    desc: "Transforming software concepts into subscription-ready, market-dominant platforms.",
    icon: <Cpu size={28} />,
    color: "from-indigo-400 via-purple-500 to-pink-600",
    glow: "rgba(129, 140, 248, 0.4)",
  },
  {
    title: "Infrastructure",
    desc: "Mission-critical database management and low-latency storage.",
    icon: <Database size={28} />,
    color: "from-emerald-400 via-teal-500 to-cyan-600",
    glow: "rgba(52, 211, 153, 0.4)",
  }
];

const ServicesBento = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Animated Mesh Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="relative group h-full"
            >
              {/* Outer Glow on Hover */}
              <div 
                className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" 
                style={{ background: service.glow }}
              />
              
              <div 
                className="h-full backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col items-center text-center transition-all duration-300 relative bg-background/40 group-hover:bg-background/60"
              >
                {/* Internal Color bleed */}
                <div 
                  className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${service.color} opacity-[0.03] group-hover:opacity-[0.08] blur-[80px] transition-all duration-500`} 
                />

                <div className="relative z-20 flex flex-col items-center">
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-10 shadow-2xl shadow-black/20 group-hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.3)] transition-all`}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold font-display mb-6 tracking-tight group-hover:scale-105 transition-transform duration-300">
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}>
                      {service.title}
                    </span>
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed text-lg font-medium">
                    {service.desc}
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
