import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

const ContactMain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const supportTypes = [
    "Sales support",
    "Technical support",
    "Inquiries",
    "Complaints",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          {/* Left Column: Info */}
          <div className="p-10 lg:p-16">
            <h2 className="text-3xl font-bold text-[#0a192f] mb-6">Send us a message</h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              At DevCraft, we value your feedback and strive to continuously improve our 
              products and services. Your input is invaluable to us, so please don't hesitate 
              to share your thoughts and suggestions with us.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              We look forward to hearing from you and assisting you in any way we can. 
              Thank you for choosing DevCraft.
            </p>

            <div className="space-y-4">
              {supportTypes.map((type) => (
                <div key={type} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span className="font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-gray-50/50 p-10 lg:p-16 border-l border-gray-100">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your Subject"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/20"
                onClick={(e) => e.preventDefault()}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMain;
