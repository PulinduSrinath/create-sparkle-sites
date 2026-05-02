import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all pages for better mobile performance
const Index = lazy(() => import("./app/page"));
const About = lazy(() => import("./app/about/page"));
const Services = lazy(() => import("./app/services/page"));
const Contact = lazy(() => import("./app/contact/page"));
const Lands = lazy(() => import("./app/lands/page"));
const Residencies = lazy(() => import("./app/residencies/page"));
const NotFound = lazy(() => import("./app/not-found/page"));

const queryClient = new QueryClient();

// A simple loading fallback for route transitions
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lands" element={<Lands />} />
            <Route path="/residencies" element={<Residencies />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
