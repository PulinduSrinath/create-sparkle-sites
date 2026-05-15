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
  ArrowRight,
  MessageCircle
} from "lucide-react";
import ZetasLogo from "./ZetasLogo";

const WhatsAppIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.006L0 24l6.117-1.605a11.81 11.81 0 005.925 1.585h.005c6.635 0 12.03-5.396 12.033-12.03a11.825 11.825 0 00-3.48-8.504" />
  </svg>
);

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
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/share/1QTWVwMz7h/?mibextid=wwXIfr" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/zetasbuild" },
    { icon: <WhatsAppIcon size={18} />, href: "https://wa.me/94771914260" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=ay8x39o" },
  ];

  return (
    <footer className="relative bg-[#020617] pt-20 pb-16 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            <Link to="/" className="inline-block">
              <ZetasLogo />
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
                <h2 className="text-white font-black uppercase tracking-[0.4em] text-[10px]">{column.title}</h2>
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
            <h2 className="text-white font-black uppercase tracking-[0.4em] text-[10px] text-center lg:text-left">Nexus Contact</h2>
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

              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-center lg:justify-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1">General Inquiry</div>
                    <div className="text-white font-bold text-lg">info@zetasbuild.com</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-1">Technical Support</div>
                    <div className="text-white font-bold text-lg">support@zetasbuild.com</div>
                  </div>
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
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.href.includes('facebook') ? 'Facebook' : social.href.includes('linkedin') ? 'LinkedIn' : social.href.includes('instagram') ? 'Instagram' : 'WhatsApp'} page`}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
            © {currentYear} ZetasBuild (Pvt) Ltd. All Systems Optimal.
          </p>

          <motion.button
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all"
            aria-label="Return to top of page"
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
