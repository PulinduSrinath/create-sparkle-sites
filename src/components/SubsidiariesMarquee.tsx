import { motion } from "framer-motion";

const SubsidiariesMarquee = () => {
  const logos = [
    { name: "TechNova", initials: "TN" },
    { name: "CloudStream", initials: "CS" },
    { name: "DataFlow", initials: "DF" },
    { name: "NexusByte", initials: "NB" },
    { name: "CyberSphere", initials: "CY" },
    { name: "AppForge", initials: "AF" },
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center lg:text-left">
        <span className="text-gray-400 text-sm font-semibold uppercase tracking-widest">Our Subsidiaries</span>
      </div>
      
      <div className="flex relative group">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 items-center justify-center whitespace-nowrap min-w-full px-10"
        >
          {[...logos, ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0a192f] flex items-center justify-center text-white font-bold text-xs">
                {logo.initials}
              </div>
              <span className="text-xl font-bold text-[#0a192f] font-display uppercase tracking-widest leading-none">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubsidiariesMarquee;
