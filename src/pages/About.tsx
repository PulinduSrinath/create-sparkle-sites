import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutStats from "@/components/AboutStats";
import AboutIntro from "@/components/AboutIntro";
import AboutCapabilities from "@/components/AboutCapabilities";
import AboutMission from "@/components/AboutMission";
import OwnerSection from "@/components/OwnerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AboutHero />
          <AboutStats />
          <AboutIntro />
          <AboutCapabilities />
          <AboutMission />
          <OwnerSection />
          <TestimonialsSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
