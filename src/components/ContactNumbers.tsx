import { motion } from "framer-motion";
import { Youtube, Facebook, Linkedin, Instagram } from "lucide-react";

const ContactNumbers = () => {
  const contacts = [
    { label: "General Number", number: "+94 31 21 21 322" },
    { label: "Sales Support", number: "+94 76 0 113033" },
    { label: "Technical Support", number: "+94 76 0 113037" },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold text-[#0a192f] mb-2">{contact.label}</h3>
              <p className="text-3xl font-bold text-primary tracking-tight">{contact.number}</p>
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
          <p className="text-4xl font-bold text-primary tracking-tight">info@devcraft.com</p>
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
