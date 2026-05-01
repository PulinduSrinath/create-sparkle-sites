import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { Users, Star, Globe, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    title: "Expertise",
    value: 15,
    suffix: "+",
    detail: "Core Engineers",
    icon: <Users size={24} />,
    color: "from-cyan-500 to-blue-500",
    delay: 0
  },
  {
    title: "Satisfaction",
    value: 100,
    suffix: "%",
    detail: "Client Success",
    icon: <Star size={24} />,
    color: "from-purple-500 to-indigo-500",
    delay: 0.1
  },
  {
    title: "Impact",
    value: 2.0,
    suffix: "k",
    decimals: 1,
    detail: "Global Reach",
    icon: <Globe size={24} />,
    color: "from-teal-500 to-emerald-500",
    delay: 0.2
  },
  {
    title: "Innovation",
    value: 20,
    suffix: "+",
    detail: "Custom Techs",
    icon: <Zap size={24} />,
    color: "from-rose-500 to-orange-500",
    delay: 0.3
  }
];

const CountUp = ({ value, suffix = "", decimals = 0 }: { value: number, suffix?: string, decimals?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 80,
  });
  
  const displayValue = useTransform(springValue, (latest) => 
    latest.toFixed(decimals) + suffix
  );

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
      }, 300);
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const MagneticCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 150, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: stat.delay, type: "spring", bounce: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className={`relative group ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
    >
      <div className="glass-card p-10 rounded-[2.5rem] border-white/10 relative z-10 overflow-hidden h-full shadow-2xl transition-colors duration-500 hover:border-white/20">
        {/* Background Glow */}
        <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-700`} />
        
        <div className="flex flex-col items-center text-center">
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className={`p-5 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.1)]`}
          >
            {stat.icon}
          </motion.div>
          <h2 className="text-[10px] font-bold uppercase tracking-[4px] text-slate-400 mb-4">{stat.title}</h2>
          <div className="text-5xl md:text-6xl font-bold font-display tracking-tighter mb-2 gradient-text min-h-[1.2em]">
            <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
          </div>
          <p className="text-slate-500 font-bold text-sm tracking-wide">{stat.detail}</p>
        </div>
      </div>

      {/* Dynamic Animated Underlight */}
      <div className="absolute inset-x-8 -bottom-2 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
    </motion.div>
  );
};

const AboutStats = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* High-End Technical Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <MagneticCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
