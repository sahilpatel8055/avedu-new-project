import NavigationHeader from "@/components/ui/navigation-header";
import HeroSection from "@/components/ui/hero-section";
import CourseCategories from "@/components/ui/course-categories";
import UniversityGrid from "@/components/ui/university-grid";
import CounsellingSection from "@/components/ui/counselling-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <HeroSection />
      <CourseCategories />
      <UniversityGrid />
      <CounsellingSection />
      <Footer />
    </div>
  );
};

export default Index;
