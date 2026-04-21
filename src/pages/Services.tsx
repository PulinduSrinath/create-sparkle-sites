import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServicesBento from "@/components/ServicesBento";
import ServicesLifecycle from "@/components/ServicesLifecycle";
import ServicesDomains from "@/components/ServicesDomains";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ServicesHero />
          <ServicesBento />
          <ServicesLifecycle />
          <ServicesDomains />
          <CTASection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
