import { motion } from "framer-motion";
import { Users, Target, Shield, ArrowUpRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white">
      {/* Premium Light Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase px-6 py-2 rounded-full border border-primary/20 bg-primary/5 shadow-sm">
            Who We Are
          </span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-900 mt-8">
            The ZetasBuild <span className="text-primary italic">Philosophy.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
          
          {/* Main Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8 bg-white border border-slate-100 rounded-[2.5rem] p-12 md:p-16 flex flex-col justify-between relative overflow-hidden group shadow-xl shadow-slate-200/40"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                We don't just build websites; we craft <span className="text-primary italic">digital experiences</span> that redefine industries.
              </h3>
              <p className="text-slate-600 text-xl leading-relaxed max-w-2xl font-medium">
                Our approach merges architectural precision with creative soul. Every line of code we write is a building block for a scalable, high-performance legacy.
              </p>
            </div>
            
            <Link to="/about#testimonials" className="mt-12 inline-block group/btn">
              <div className="h-14 px-8 rounded-full border border-slate-200 hover:border-primary/50 text-slate-900 font-bold flex items-center justify-center gap-3 transition-all hover:bg-primary/5 shadow-sm">
                What Our Clients Said <ArrowUpRight size={20} className="text-primary" />
              </div>
            </Link>

            {/* Decorative Vector */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 border border-slate-50 rounded-full group-hover:scale-110 transition-transform duration-1000" />
          </motion.div>

          {/* Expertise Stat Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4 bg-primary/5 border border-primary/10 rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg shadow-primary/5"
          >
            <div className="relative z-10 w-full">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 border border-primary/10 rounded-full mx-auto flex items-center justify-center"
              >
                <div className="w-40 h-40 border border-primary/20 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 blur-xl animate-pulse" />
                </div>
              </motion.div>
              <div className="absolute inset-x-0 top-[4.5rem] flex flex-col items-center text-center">
                <span className="text-7xl font-bold text-slate-900 tracking-tighter">3+</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mt-2">Years of Impact</span>
              </div>
            </div>
            
            <p className="mt-10 text-slate-500 font-medium italic relative z-10 text-lg">
              "Exceptional code, stunning design, and a partner you can trust globally."
            </p>
          </motion.div>

          {/* Value Cards */}
          {[
            { 
              icon: Users, 
              title: "Client-Centric", 
              desc: "Lasting partnerships built on your performance-critical goals.",
              color: "text-primary",
              bg: "bg-primary/5"
            },
            { 
              icon: Zap, 
              title: "Result-Driven", 
              desc: "Every logic cycle is dedicated to measurable market impact.",
              color: "text-secondary",
              bg: "bg-secondary/5"
            },
            { 
              icon: Shield, 
              title: "Quality Excellence", 
              desc: "Military-grade standards for security, speed, and design.",
              color: "text-accent",
              bg: "bg-accent/5"
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="col-span-12 md:col-span-6 lg:col-span-4 bg-white border border-slate-100 rounded-[2.5rem] p-10 group hover:border-primary/20 hover:shadow-xl transition-all shadow-md shadow-slate-100"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-8 shadow-inner`}>
                <item.icon size={26} />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{item.title}</h4>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
