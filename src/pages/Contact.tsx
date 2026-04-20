import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactMain from "@/components/ContactMain";
import ContactNumbers from "@/components/ContactNumbers";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ContactHero />
          <ContactMain />
          <ContactNumbers />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
