
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero-section";
import CounsellingSection from "@/components/ui/counselling-section";
import CourseCategories from "@/components/ui/course-categories";
import UniversityGrid from "@/components/ui/university-grid";
import UniversityLogosMarquee from "@/components/ui/university-logos-marquee";
import HorizontalUniversityScroll from "@/components/ui/horizontal-university-scroll";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, GraduationCap, Star } from "lucide-react";

// Course Images
import mbaImage from "@/assets/course/mba.jpg";
import bbaImage from "@/assets/course/bba.jpg";
import mcaImage from "@/assets/course/mca.jpg";
import bcaImage from "@/assets/course/bca.jpg";
import baImage from "@/assets/course/ba.jpg";
import bcomImage from "@/assets/course/bcom.jpg";

// University Logos
import ignouLogo from "@/assets/ignou-logo.png";
import manipalLogo from "@/assets/manipal-logo.png";
import amityLogo from "@/assets/amity-logo.jpg";
import lpuLogo from "@/assets/lpu-logo.jpg";
import smuLogo from "@/assets/smu-logo.jpg";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";

const Index = () => {
  const universities = [
    {
      id: "ignou",
      name: "IGNOU",
      logo: ignouLogo,
      description: "Indira Gandhi National Open University",
      route: "/university/ignou"
    },
    {
      id: "manipal",
      name: "Manipal University Online",
      logo: manipalLogo,
      description: "Premier Private University",
      route: "/university/manipal"
    },
    {
      id: "amity",
      name: "Amity University Online", 
      logo: amityLogo,
      description: "Leading Private University",
      route: "/university/amity"
    },
    {
      id: "lpu",
      name: "Lovely Professional University",
      logo: lpuLogo, 
      description: "Top Ranked University",
      route: "/university/lpu"
    },
    {
      id: "sikkim",
      name: "Sikkim Manipal University",
      logo: smuLogo,
      description: "Distance Learning Pioneer",
      route: "/university/sikkim"
    },
    {
      id: "uttaranchal",
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      description: "Innovation in Education",
      route: "/university/uttaranchal"
    }
  ];

  // Transform universities data for HorizontalUniversityScroll component
  const horizontalScrollUniversities = universities.map(uni => ({
    name: uni.name,
    logo: uni.logo,
    rating: 4.5,
    fees: "₹50,000+",
    duration: "1-3 Years",
    accreditation: "UGC Approved"
  }));

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* 1st Section - Hero */}
      <HeroSection />
      
      {/* 2nd Section - University Logos Marquee */}
      <UniversityLogosMarquee />

      {/* 3rd Section - Find Your Perfect Online Course with Course Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Find Your Perfect <span className="text-primary">Online Course</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive range of online degree programs designed to advance your career
            </p>
          </div>
          
          <CourseCategories />
        </div>
      </section>

      {/* 4th Section - Universities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Explore Over <span className="text-primary">100+ Universities</span> in India
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from top-ranked universities offering quality online education programs
            </p>
          </div>
          
          <UniversityGrid />
          <HorizontalUniversityScroll universities={horizontalScrollUniversities} />
        </div>
      </section>

      {/* 5th Section - Counselling */}
      <CounsellingSection />
      
      <Footer />
    </div>
  );
};

export default Index;
