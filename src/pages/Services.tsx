import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";

const ServicesBento = lazy(() => import("@/components/ServicesBento"));
const ServicesLifecycle = lazy(() => import("@/components/ServicesLifecycle"));
const ServicesDomains = lazy(() => import("@/components/ServicesDomains"));
const IndustriesSection = lazy(() => import("@/components/IndustriesSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
import { motion } from "framer-motion";

import FloatingBackground from "@/components/FloatingBackground";

const Services = () => {
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
          <ServicesHero />
          <Suspense fallback={<div className="h-20" />}>
            <ServicesBento />
            <ServicesLifecycle />
            <ServicesDomains />
            <IndustriesSection />
            <CTASection />
          </Suspense>
        </motion.div>
      </main>
      <Suspense fallback={<div className="h-10" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Services;
