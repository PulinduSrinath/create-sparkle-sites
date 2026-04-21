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
  ShieldCheck
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const navigationMatrix = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Our Story", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Web Apps", href: "#" },
        { label: "Mobile Platforms", href: "#" },
        { label: "Cloud Scaling", href: "#" },
        { label: "UI/UX Design", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#", color: "hover:bg-blue-600" },
    { icon: <Instagram size={18} />, href: "#", color: "hover:bg-pink-600" },
    { icon: <Linkedin size={18} />, href: "#", color: "hover:bg-blue-700" },
    { icon: <Youtube size={18} />, href: "#", color: "hover:bg-red-600" },
    { icon: <Twitter size={18} />, href: "#", color: "hover:bg-sky-500" },
  ];

  return (
    <footer className="relative bg-[#030712] pt-24 pb-12 overflow-hidden">
      {/* Circuit Curve Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          fill="#ffffff"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,0V0Z"></path>
        </svg>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
      </div>

      {/* Decorative Technical Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30-30-30z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Console */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="font-display text-4xl font-bold gradient-text tracking-tighter">
              DevCraft
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm font-medium">
              Engineering the next generation of mission-critical digital legacies. We blend architectural precision with creative soul for global impact.
            </p>
            <div className="flex items-center gap-4 text-primary bg-primary/5 border border-primary/10 rounded-2xl p-4 w-fit">
              <ShieldCheck size={20} />
              <div className="text-[10px] font-bold uppercase tracking-[0.2em]">Verified Enterprise Partner</div>
            </div>
          </div>

          {/* Navigation Matrix */}
          {navigationMatrix.map((column) => (
            <div key={column.title} className="lg:col-span-2 space-y-6 pt-4">
              <h4 className="text-white font-bold uppercase tracking-[0.3em] text-xs pb-2 border-b border-white/5">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href} 
                      className="text-slate-500 hover:text-white transition-all flex items-center gap-2 group text-sm font-medium"
                    >
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Terminal Details */}
          <div className="lg:col-span-4 space-y-8 pt-4">
            <h4 className="text-white font-bold uppercase tracking-[0.3em] text-xs pb-2 border-b border-white/5">Nexus Contact</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-black">
                  <Globe size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Global Headquarters</div>
                  <div className="text-white font-bold">Matara, Sri Lanka</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary transition-all group-hover:bg-secondary group-hover:text-black">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Communication</div>
                  <div className="text-white font-bold">hello@devcraft.sh</div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">DevCraft System: Operational</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Social Dock & Legal */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} hover:text-white hover:shadow-lg`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-xs font-medium text-slate-500 order-3 md:order-2">
            © {currentYear} DevCraft (Pvt) Ltd. Engineered for Excellence.
          </p>

          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-black shadow-[0_0_20px_rgba(34,211,238,0.3)] order-2 md:order-3"
            title="Back to Top"
          >
            <ChevronUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
