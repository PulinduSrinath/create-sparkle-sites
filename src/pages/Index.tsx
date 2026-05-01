import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingBackground from "@/components/FloatingBackground";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const TechStackSection = lazy(() => import("@/components/TechStackSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingBackground />
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div className="h-20" />}>
        <ServicesSection />
        <AboutSection />
        <TechStackSection />
        <CTASection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
