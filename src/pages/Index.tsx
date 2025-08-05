import React, { useState } from "react";
import NavigationHeader from "@/components/ui/navigation-header";
import HeroSection from "@/components/ui/hero-section";
import CourseCategories from "@/components/ui/course-categories";
import UniversityGrid from "@/components/ui/university-grid";
import UniversityLogosMarquee from "@/components/ui/university-logos-marquee";
import CounsellingSection from "@/components/ui/counselling-section";
import Footer from "@/components/ui/footer";
import CounselingForm from "@/components/ui/counseling-form";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isCounselingFormOpen, setIsCounselingFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <HeroSection onOpenCounseling={() => setIsCounselingFormOpen(true)} />

      {/* University Logos Marquee Section (Moved to Top Below Hero) */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
            Compare & Apply from 100+ Top Universities in India
          </h2>
          <UniversityLogosMarquee />
        </div>
      </section>

      {/* Course Categories Section with Thin Border */}
      <section className="py-6 md:py-10 bg-white border border-gray-200 rounded-lg mx-4 my-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 mb-4">
              🎯 TRENDING
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Online Course
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of online degree programs designed to advance your career
            </p>
          </div>
        <div id="programs">
          <CourseCategories />
        </div>
        </div>
      </section>

      <UniversityGrid onOpenCounseling={() => setIsCounselingFormOpen(true)} />
      <CounsellingSection onOpenCounseling={() => setIsCounselingFormOpen(true)} />
      <Footer />
      
      <CounselingForm 
        open={isCounselingFormOpen} 
        onOpenChange={setIsCounselingFormOpen} 
      />
    </div>
  );
};

export default Index;
