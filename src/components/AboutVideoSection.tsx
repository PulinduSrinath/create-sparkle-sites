import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react";

const AboutVideoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  const stats = [
    { value: "50+", label: "Software Engineers" },
    { value: "100+", label: "Success Projects" },
    { value: "10+", label: "Target Countries" },
    { value: "5+", label: "Years Excellence" },
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a192f] max-w-2xl mx-auto leading-tight">
            Watch Our Captivating Logo <span className="text-primary">Intro Video!</span>
          </h2>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div 
          style={{ scale, opacity }}
          className="relative max-w-5xl mx-auto aspect-video rounded-3xl bg-[#0a192f] shadow-2xl p-4 overflow-hidden group cursor-pointer border-8 border-gray-50"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          <div className="w-full h-full rounded-2xl bg-black/40 flex items-center justify-center relative overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-glow group-hover:shadow-[0_0_50px_hsl(var(--primary))] transition-all duration-500 relative z-10"
            >
              <Play className="text-white fill-white ml-1" size={32} />
            </motion.div>

            <div className="absolute bottom-10 left-10 text-left">
              <div className="text-white text-3xl font-bold font-display uppercase tracking-widest opacity-80">
                DevCraft<span className="text-primary">Loop</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium text-sm lg:text-base uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutVideoSection;
