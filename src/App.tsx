import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Index from "./app/page";
import About from "./app/about/page";
import Services from "./app/services/page";
import Contact from "./app/contact/page";
import Lands from "./app/lands/page";
import Residencies from "./app/residencies/page";
import NotFound from "./app/not-found/page";

const queryClient = new QueryClient();

/** Mount toasts only after the browser is idle — they are never needed on first paint. */
const DeferredToasts = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id =
      window.requestIdleCallback?.(() => setReady(true)) ??
      window.setTimeout(() => setReady(true), 800);
    return () => {
      if (typeof id === "number") window.clearTimeout(id);
      else window.cancelIdleCallback?.(id);
    };
  }, []);
  if (!ready) return null;
  return (
    <>
      <Toaster />
      <Sonner />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DeferredToasts />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lands" element={<Lands />} />
          <Route path="/residencies" element={<Residencies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
