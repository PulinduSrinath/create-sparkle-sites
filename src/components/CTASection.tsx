import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {

  return (
    <section id="contact" className="py-16 relative overflow-hidden bg-card/30">
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

          <div className="flex justify-center max-w-md mx-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-black bg-primary hover:scale-105 active:scale-95 transition-all text-lg shadow-[0_0_30px_rgba(34,211,238,0.3)]"
            >
              Get In Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
