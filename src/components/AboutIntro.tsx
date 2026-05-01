import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Globe, Mail, ArrowRight, Share2 } from "lucide-react";
import engineImage from "/ZetasBuild_engineering.png";

const socials = [
  { icon: <Facebook size={18} />, color: "hover:bg-primary hover:text-white", href: "#", name: "Facebook" },
  { icon: <Instagram size={18} />, color: "hover:bg-primary hover:text-white", href: "#", name: "Instagram" },
  { icon: <Linkedin size={18} />, color: "hover:bg-primary hover:text-white", href: "#", name: "LinkedIn" },
  { icon: <Youtube size={18} />, color: "hover:bg-primary hover:text-white", href: "#", name: "YouTube" },
  { icon: <Twitter size={18} />, color: "hover:bg-primary hover:text-white", href: "#", name: "Twitter" },
];

const AboutIntro = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Precision Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          {/* Content Block */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-12"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 border border-slate-100 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-10 shadow-sm"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Engineering The Future
              </motion.div>
              
              <h2 className="text-6xl md:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tighter mb-8">
                Digital <br />
                <span className="text-primary italic">Excellence.</span> <br />
                Redefined.
              </h2>
              
              <p className="text-slate-600 text-xl leading-relaxed max-w-xl font-medium">
                ZetasBuild is more than a technical partner; we are the architectural engine behind global digital legacies. We blend creative artistry with rigorous engineering standards to inspire innovation.
              </p>
            </div>

            {/* Strategic Feature Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                  <Globe size={22} />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Primary Operations</div>
                <div className="text-slate-900 font-bold text-lg">Matara, Sri Lanka</div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-secondary mb-6 transition-colors group-hover:bg-secondary group-hover:text-white">
                  <Mail size={22} />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Corporate Channel</div>
                <div className="text-slate-900 font-bold text-lg">info@zetasbuild.com</div>
              </motion.div>
            </div>

            {/* Social Command Center */}
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-8">
              <div className="flex items-center gap-4 text-slate-400">
                <Share2 size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Global Reach</span>
              </div>
              <div className="hidden sm:block h-[1px] w-12 bg-slate-100" />
              <div className="flex flex-wrap gap-4">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    aria-label={`Follow us on ${social.name}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-300 shadow-sm ${social.color} hover:shadow-lg`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Block - The Engineering Heart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring" }}
            className="lg:w-1/2 relative flex justify-center"
          >
            <div className="relative z-10 w-full max-w-[550px]">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20 animate-pulse" />
              <img 
                src={engineImage} 
                alt="ZetasBuild Engineering" 
                className="w-full h-auto drop-shadow-[0_40px_100px_rgba(0,0,0,0.1)] rounded-[3rem] relative z-10 border-4 border-white shadow-2xl"
              />
              
              {/* Floating Tech Particles (Decor) */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -right-6 py-3 px-6 bg-white border border-slate-100 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Active Innovation</span>
                </div>
              </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent blur-3xl opacity-30" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
