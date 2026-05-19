import { Suspense, lazy, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Index from "./app/page";

const TooltipProvider = lazy(() =>
  import("@/components/ui/tooltip").then((m) => ({ default: m.TooltipProvider }))
);
const Toaster = lazy(() => import("@/components/ui/toaster").then((m) => ({ default: m.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then((m) => ({ default: m.Toaster })));
const About = lazy(() => import("./app/about/page"));
const Services = lazy(() => import("./app/services/page"));
const Contact = lazy(() => import("./app/contact/page"));
const Lands = lazy(() => import("./app/lands/page"));
const Residencies = lazy(() => import("./app/residencies/page"));
const NotFound = lazy(() => import("./app/not-found/page"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin" aria-hidden />
  </div>
);

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
    <Suspense fallback={null}>
      <Toaster />
      <Sonner />
    </Suspense>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={null}>
      <TooltipProvider>
        <DeferredToasts />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </Suspense>
  </QueryClientProvider>
);

export default App;
