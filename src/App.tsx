import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IGNOU from "./pages/university/IGNOU";
import Manipal from "./pages/university/Manipal";
import Uttaranchal from "./pages/university/Uttaranchal";
import VGU from "./pages/university/VGU";
// Old course pages (from your home page) - DO NOT REMOVE
import OnlineMBA from "./pages/courses/OnlineMBA";
import OnlineTech from "./pages/courses/OnlineTech";
import OnlineBBA from "./pages/courses/OnlineBBA";
import OnlineCommerce from "./pages/courses/OnlineCommerce";
import OnlineArts from "./pages/courses/OnlineArts";
// NEW dynamic course page (general)
import CoursePage from "./pages/course/CoursePage";
// NEW Manipal dynamic course page
import ManipalCoursePage from "./pages/course/ManipalCoursePage";
// NEW Uttaranchal dynamic course page
import UttaranchalCoursePage from "./pages/course/UttaranchalCoursePage"; // Added import

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
          {/* Your original course routes - these remain unchanged */}
          <Route path="/courses/mba" element={<OnlineMBA />} />
          <Route path="/courses/engineering" element={<OnlineTech />} />
          <Route path="/courses/bba" element={<OnlineBBA />} />
          <Route path="/courses/commerce" element={<OnlineCommerce />} />
          <Route path="/courses/arts" element={<OnlineArts />} />
          {/* The new dynamic route, now correctly pointing to /courses/:courseId */}
          <Route path="/courses/:courseId" element={<CoursePage />} />
          {/* The new route for Manipal's specific course pages */}
          <Route path="/university/manipal/courses/:courseId" element={<ManipalCoursePage />} />
          {/* The new route for Uttaranchal's specific course pages */}
          <Route path="/university/uttaranchal/:courseId" element={<UttaranchalCoursePage />} /> {/* Added route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
