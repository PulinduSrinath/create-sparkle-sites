import { motion } from "framer-motion";
import { Youtube, Facebook, Linkedin, Instagram } from "lucide-react";

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
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-[#0a192f] mb-2">Email</h3>
          <p className="text-4xl font-bold text-primary tracking-tight">info@ZetasBuild.com</p>
        </motion.div>

        <div className="flex justify-center gap-6">
          {[Youtube, Facebook, Linkedin, Instagram].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
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
