import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";

const AboutStats = lazy(() => import("@/components/AboutStats"));
const AboutIntro = lazy(() => import("@/components/AboutIntro"));
const AboutCapabilities = lazy(() => import("@/components/AboutCapabilities"));
const AboutMission = lazy(() => import("@/components/AboutMission"));
const OwnerSection = lazy(() => import("@/components/OwnerSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const Footer = lazy(() => import("@/components/Footer"));
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FloatingBackground from "@/components/FloatingBackground";

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
    <div className="min-h-screen bg-background relative">
      <FloatingBackground />
      <Navbar />
      <main className="pt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AboutHero />
          <Suspense fallback={<div className="h-20" />}>
            <AboutStats />
            <AboutIntro />
            <AboutCapabilities />
            <AboutMission />
            <OwnerSection />
            <TestimonialsSection />
          </Suspense>
        </motion.div>
      </main>
      <Suspense fallback={<div className="h-10" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default About;
