import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter, 
  Mail, 
  Globe, 
  ChevronUp, 
  ArrowUpRight,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const navigationMatrix = [
    {
      title: "Core Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Our Story", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Digital Domains",
      links: [
        { label: "Web Ecosystems", href: "#" },
        { label: "Mobile Frontiers", href: "#" },
        { label: "Cloud Scaling", href: "#" },
        { label: "Creative Logic", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Linkedin size={18} />, href: "#" },
    { icon: <Youtube size={18} />, href: "#" },
    { icon: <Twitter size={18} />, href: "#" },
  ];

  return (
    <footer className="relative bg-[#020617] pt-1 pb-16 overflow-hidden">
      {/* Laser-Cut Neon Boundary */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)] z-20" />
      
      {/* Technical Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30-30-30z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Pre-Footer: System Callout */}
        <div className="py-16 border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 mb-20">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Ready to Launch Your Legacy?</h3>
            <p className="text-slate-500 font-medium">Join the elite ranks of businesses engineered for scale.</p>
          </div>
          <Link 
            to="/contact" 
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-primary transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
          >
            Apply Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-10 text-center lg:text-left">
            <Link to="/" className="font-display text-5xl font-extrabold gradient-text tracking-tighter">
              DevCraft
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm mx-auto lg:mx-0 font-medium italic">
              "We don't just build websites. We engineer mission-critical digital foundations for global leaders."
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-primary bg-primary/5 border border-primary/10 rounded-2xl p-5 w-fit mx-auto lg:mx-0">
              <ShieldCheck size={22} />
              <div className="text-[10px] font-bold uppercase tracking-[0.3em]">Precision-Verified Partner</div>
            </div>
          </div>

          {/* Hub Matrix */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {navigationMatrix.map((column) => (
              <div key={column.title} className="space-y-8">
                <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px]">{column.title}</h4>
                <ul className="space-y-6">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        to={link.href} 
                        className="text-slate-500 hover:text-white transition-all flex items-center gap-3 group text-sm font-bold"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Nexus Contact Terminal */}
          <div className="lg:col-span-4 space-y-10">
            <h4 className="text-white font-black uppercase tracking-[0.4em] text-[10px] text-center lg:text-left">Nexus Contact</h4>
            <div className="space-y-8">
              <div className="flex items-center justify-center lg:justify-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <Globe size={20} />
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1">HQ Site</div>
                  <div className="text-white font-bold text-lg">Matara, Sri Lanka</div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1">Direct Feed</div>
                  <div className="text-white font-bold text-lg">hello@devcraft.sh</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Console Bottom: Social Dock & Legal */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
            © {currentYear} DevCraft (Pvt) Ltd. All Systems Optimal.
          </p>

          <motion.button
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all"
            title="Return to Peak"
          >
            <ChevronUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
