import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-card/30">
      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] opacity-20 blur-3xl"
        style={{ background: "radial-gradient(ellipse, hsl(172 80% 50% / 0.5), hsl(260 70% 60% / 0.3), transparent)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <MessageSquare size={14} className="text-primary" />
            <span className="text-sm text-primary font-medium">Let's Talk</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Build Something{" "}
            <span className="gradient-text">Amazing?</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Tell us about your project and let's create a digital experience that sets you apart.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-11 pr-4 py-4 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-semibold text-primary-foreground bg-primary hover:opacity-90 transition-opacity text-sm"
            >
              Get In Touch
              <ArrowRight size={16} />
            </motion.button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            We'll respond within 24 hours. No spam, ever.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
