import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";

const WhatsAppIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.605 6.006L0 24l6.117-1.605a11.81 11.81 0 005.925 1.585h.005c6.635 0 12.03-5.396 12.033-12.03a11.825 11.825 0 00-3.48-8.504" />
  </svg>
);

const ContactNumbers = () => {
  const contacts = [
    { label: "Contact Number", number: "+94 77 191 4260" },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center justify-center mb-16">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <h3 className="text-xl font-bold text-[#0a192f] mb-2">{contact.label}</h3>
              <p className="text-4xl md:text-5xl font-extrabold text-primary tracking-tighter group-hover:scale-105 transition-transform duration-300">
                {contact.number}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center gap-4"
        >
          <h3 className="text-xl font-bold text-[#0a192f]">Email Channels</h3>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">General Inquiry</span>
              <p className="text-2xl md:text-3xl font-bold text-primary tracking-tight">info@zetasbuild.com</p>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Technical Support</span>
              <p className="text-2xl md:text-3xl font-bold text-primary tracking-tight">support@zetasbuild.com</p>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-6">
          {[
            { Icon: Facebook, href: "https://www.facebook.com/share/1QTWVwMz7h/?mibextid=wwXIfr" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/zetasbuild" },
            { Icon: WhatsAppIcon, href: "https://wa.me/94771914260" },
            { Icon: Instagram, href: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=ay8x39o" }
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${href.includes('facebook') ? 'Facebook' : href.includes('linkedin') ? 'LinkedIn' : href.includes('instagram') ? 'Instagram' : 'WhatsApp'}`}
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactNumbers;
