import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import SubsidiariesMarquee from "@/components/SubsidiariesMarquee";
import AboutVideoSection from "@/components/AboutVideoSection";
import FeaturedService from "@/components/FeaturedService";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
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
          <AboutStory />
          <SubsidiariesMarquee />
          <AboutVideoSection />
          <FeaturedService />
          <TestimonialsSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
