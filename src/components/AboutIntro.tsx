import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Globe, Mail, PhoneCall } from "lucide-react";
import engineImage from "/devcraft_engineering.png";

const socials = [
  { icon: <Facebook size={18} />, color: "hover:bg-[#3b5998]", href: "#" },
  { icon: <Instagram size={18} />, color: "hover:bg-[#e1306c]", href: "#" },
  { icon: <Linkedin size={18} />, color: "hover:bg-[#0077b5]", href: "#" },
  { icon: <Youtube size={18} />, color: "hover:bg-[#ff0000]", href: "#" },
  { icon: <Twitter size={18} />, color: "hover:bg-[#1da1f2]", href: "#" },
];

const AboutIntro = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Text */}
      <div className="absolute top-0 right-0 text-[15rem] font-bold text-primary/5 select-none pointer-events-none translate-x-1/4 -translate-y-1/4 uppercase">
        CRAFT
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Content Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-10"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
              >
                The Visionaries
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1] font-display">
                Digital <br />
                <span className="gradient-text">Excellence</span> <br />
                Redefined.
              </h2>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              DevCraft isn't just about building software; it's about engineering the future. 
              We blend creative artistry with rigorous technical standards to deliver 
              solutions that don't just work—they inspire.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Globe size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">HQ Location</div>
                  <div className="text-foreground font-semibold">Colombo, Sri Lanka</div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Corporate E-mail</div>
                  <div className="text-foreground font-semibold">hello@devcraft.lk</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <span className="text-muted-foreground text-sm font-medium">Follow our journey</span>
              <div className="h-[1px] w-12 bg-border" />
              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-foreground/50 ${social.color} hover:text-white transition-all duration-300 shadow-sm`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 p-4">
              <img 
                src={engineImage} 
                alt="DevCraft Engineering" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,240,255,0.15)] rounded-3xl"
              />
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent blur-3xl opacity-50" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
