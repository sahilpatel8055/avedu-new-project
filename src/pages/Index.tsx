import NavigationHeader from "@/components/ui/navigation-header";
import HeroSection from "@/components/ui/hero-section";
import CourseCategories from "@/components/ui/course-categories";
import UniversityGrid from "@/components/ui/university-grid";
import CounsellingSection from "@/components/ui/counselling-section";
import Footer from "@/components/ui/footer";
import Slideshow from "@/components/ui/slideshow";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <HeroSection />
      
      {/* Slideshow Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto">
          <Slideshow />
        </div>
      </section>
      
      {/* Course Categories Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
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
          <CourseCategories />
        </div>
      </section>
      
      <UniversityGrid />
      <CounsellingSection />
      <Footer />
    </div>
  );
};

export default Index;
