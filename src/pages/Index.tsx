import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero-section";
import Slideshow from "@/components/ui/slideshow";
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
  const courses = [
    {
      id: "online-mba",
      name: "Online MBA",
      image: mbaImage,
      description: "Master of Business Administration",
      duration: "2 Years",
      route: "/courses/online-mba"
    },
    {
      id: "online-bba", 
      name: "Online BBA",
      image: bbaImage,
      description: "Bachelor of Business Administration",
      duration: "3 Years",
      route: "/courses/online-bba"
    },
    {
      id: "online-mca",
      name: "Online MCA", 
      image: mcaImage,
      description: "Master of Computer Applications",
      duration: "2 Years",
      route: "/courses/online-tech"
    },
    {
      id: "online-bca",
      name: "Online BCA",
      image: bcaImage,
      description: "Bachelor of Computer Applications", 
      duration: "3 Years",
      route: "/courses/online-tech"
    },
    {
      id: "online-ba",
      name: "Online BA",
      image: baImage,
      description: "Bachelor of Arts",
      duration: "3 Years", 
      route: "/courses/online-arts"
    },
    {
      id: "online-bcom",
      name: "Online B.Com",
      image: bcomImage,
      description: "Bachelor of Commerce",
      duration: "3 Years",
      route: "/courses/online-commerce"
    }
  ];

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

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      <HeroSection />
      <Slideshow />
      <CounsellingSection />
      <CourseCategories />
      <UniversityGrid />
      <UniversityLogosMarquee />
      <HorizontalUniversityScroll />

      {/* Find Your Perfect Online Course Section */}
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-12">
            {courses.map((course) => (
              <Link key={course.id} to={course.route} className="group">
                <Card className="text-center hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <img src={course.image} alt={course.name} className="w-16 h-16 object-cover rounded-lg" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
                    <p className="text-xs text-primary font-medium">{course.duration}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Explore All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Universities Section */}
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-12">
            {universities.map((university) => (
              <Link key={university.id} to={university.route} className="group">
                <Card className="text-center hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:scale-105">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <img src={university.logo} alt={university.name} className="w-16 h-16 object-contain rounded-lg" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-sm">
                      {university.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{university.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/universities">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View All Universities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CounsellingSection />
      <Footer />
    </div>
  );
};

export default Index;
