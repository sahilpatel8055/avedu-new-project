import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IGNOU from "./pages/university/IGNOU";
import Manipal from "./pages/university/Manipal";
import Uttaranchal from "./pages/university/Uttaranchal";
import VGU from "./pages/university/VGU";
import OnlineMBA from "./pages/courses/OnlineMBA";
import OnlineTech from "./pages/courses/OnlineTech";
import OnlineBBA from "./pages/courses/OnlineBBA";
import OnlineCommerce from "./pages/courses/OnlineCommerce";
import OnlineArts from "./pages/courses/OnlineArts";

// Component to scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/university/ignou" element={<IGNOU />} />
          <Route path="/university/manipal" element={<Manipal />} />
          <Route path="/university/uttaranchal" element={<Uttaranchal />} />
          <Route path="/university/vgu" element={<VGU />} />
          <Route path="/courses/mba" element={<OnlineMBA />} />
          <Route path="/courses/engineering" element={<OnlineTech />} />
          <Route path="/courses/bba" element={<OnlineBBA />} />
          <Route path="/courses/commerce" element={<OnlineCommerce />} />
          <Route path="/courses/arts" element={<OnlineArts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
