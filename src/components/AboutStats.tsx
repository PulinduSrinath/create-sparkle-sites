import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";
import { Users, Star, Globe, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

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
  
  const motionValue = useMotionValue(1);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  
  const displayValue = useTransform(springValue, (latest) => 
    latest.toFixed(decimals) + suffix
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const AboutStats = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group ${i % 2 !== 0 ? 'lg:mt-12' : ''}`}
            >
              <div className="glass-card p-10 rounded-[2.5rem] border-white/10 relative z-10 overflow-hidden h-full">
                {/* Background Glow */}
                <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />
                
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-6 shadow-xl`}>
                    {stat.icon}
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-[3px] text-muted-foreground mb-4">{stat.title}</h4>
                  <div className="text-5xl font-bold font-display tracking-tighter mb-2 gradient-text min-h-[1.2em]">
                    <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </div>
                  <p className="text-foreground/60 font-medium">{stat.detail}</p>
                </div>
              </div>

              {/* Unique Shadow Effect */}
              <div className="absolute inset-x-8 -bottom-4 h-8 bg-black/20 blur-2xl rounded-full opacity-50 group-hover:opacity-30 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
