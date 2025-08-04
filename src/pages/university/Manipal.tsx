import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, GraduationCap, Award, DollarSign, BookOpen, Clock, Check, ChevronRight } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import manipalLogo from "@/assets/manipal-logo.png";
import manipalDegree from "@/assets/manipal-degree.jpg";

// Campus images for the new section
import mujCampus from "@/assets/muj-campus.jpg";
import smuCampus from "@/assets/smu-campus.jpg";
import maheCampus from "@/assets/mahe-campus.jpg";

// Import the specific icons for approvals
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import aiuIcon from "@/assets/icons/aiu-icon.png";

const Manipal = () => {
  const courses = [
    { name: "Online MBA", id: "online-mba", fees: "₹1,50,000", duration: "2 Years", specializations: 9 },
    { name: "Online MCA", id: "online-mca", fees: "₹1,30,000", duration: "2 Years", specializations: 6 },
    { name: "Online BBA", id: "online-bba", fees: "₹1,15,000", duration: "3 Years", specializations: 8 },
    { name: "Online BCA", id: "online-bca", fees: "₹1,20,000", duration: "3 Years", specializations: 4 }
  ];

  const features = [
    "UGC & AICTE Approved",
    "NAAC A+ accredited university",
    "Advanced Learning Management System",
    "Industry-aligned curriculum",
    "Live interactive sessions with faculty",
    "Placement assistance and career guidance",
    "Flexible payment options available",
    "Alumni network across industries"
  ];

  const approvals = [
    { name: "UGC-DEB", description: "University Grants Commission - Distance Education Bureau", icon: ugcIcon },
    { name: "AICTE", description: "All India Council for Technical Education", icon: aicteIcon },
    { name: "NAAC A+", description: "National Assessment and Accreditation Council", icon: naacIcon },
    { name: "AIU", description: "Association of Indian Universities", icon: aiuIcon }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16" id="top">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src={manipalLogo} alt="Manipal Logo" className="w-20 h-20 rounded-lg object-contain" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Manipal University Jaipur Online</h1>
                  <p className="text-lg text-muted-foreground">Online Education from a World-Class University</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">4.2</span>
                  <span className="text-muted-foreground">(750+ Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  NIRF Ranked
                </Badge>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>25K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>150+ Programs</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="flex-1 lg:max-w-md">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-primary">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Established:</span>
                    <span className="font-semibold">2011</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">University Type:</span>
                    <span className="font-semibold">Private University</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mode:</span>
                    <span className="font-semibold">Online</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee Range:</span>
                    <span className="font-semibold">₹1,15,000 - ₹1,50,000</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Manipal University Jaipur Online</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Manipal University Jaipur (MUJ) Online</strong> offers a dynamic and flexible learning experience with a wide range of programs designed for working professionals and students alike. As part of the prestigious Manipal Education Group, MUJ brings a legacy of academic excellence and innovation to the online education space.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The university is recognized by the UGC and AICTE, and is accredited with an A+ Grade by NAAC. The online programs are developed with an industry-focused curriculum, ensuring that students gain relevant and practical skills. MUJ's advanced Learning Management System provides seamless access to course materials, virtual classes, and faculty support.
              </p>
              <p className="text-lg leading-relaxed">
                Manipal University Jaipur's online degrees are equivalent to on-campus degrees and are globally recognized, opening up a world of opportunities for career advancement and further studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approvals Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Approvals & Accreditations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {approvals.map((approval, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mb-4">
                    <img src={approval.icon} alt={`${approval.name} Icon`} className="w-24 h-24 object-contain" />
                  </div>
                  <CardTitle className="text-lg text-primary">{approval.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{approval.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Manipal Campuses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Shape Your Future With Our Top-Ranked Universities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Manipal University Jaipur Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-center text-primary">
                  Manipal University Jaipur
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                <img
                  src={mujCampus}
                  alt="Manipal University Jaipur Campus"
                  className="rounded-md w-full h-48 object-cover"
                />
                <div className="text-center">
                  <Link to="/university/manipal">
                    <Button variant="outline" size="sm" className="w-full">
                      View all Courses
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Manipal Academy of Higher Education Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-center text-primary">
                  Manipal Academy of Higher Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                <img
                  src={maheCampus}
                  alt="Manipal Academy of Higher Education Campus"
                  className="rounded-md w-full h-48 object-cover"
                />
                <div className="text-center">
                  <Link to="/university/manipal">
                    <Button variant="outline" size="sm" className="w-full">
                      View all Courses
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Sikkim Manipal University Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-center text-primary">
                  Sikkim Manipal University
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4">
                <img
                  src={smuCampus}
                  alt="Sikkim Manipal University Campus"
                  className="rounded-md w-full h-48 object-cover"
                />
                <div className="text-center">
                  <Link to="/university/manipal">
                    <Button variant="outline" size="sm" className="w-full">
                      View all Courses
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Degree Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-4">Sample Degree</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-prose">
                The degrees offered by Manipal University Jaipur Online are valid and recognized by various government bodies, making them suitable for all career opportunities.
              </p>
              <ul className="space-y-4 text-left mx-auto md:mx-0 max-w-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">UGC-DEB & AICTE Approved</p>
                    <p className="text-sm text-muted-foreground">The degrees are fully valid for government, private, and overseas jobs or higher studies.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Digital Verification</p>
                    <p className="text-sm text-muted-foreground">Supports online QR-code-based verification for authenticity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Officially Stamped</p>
                    <p className="text-sm text-muted-foreground">Authenticated with the official university seal.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 max-w-lg mx-auto md:max-w-none">
              <div className="relative p-4 rounded-xl shadow-2xl bg-white transition-transform duration-300 hover:scale-105">
                <img
                  src={manipalDegree}
                  alt="Manipal Sample Degree"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <BookOpen className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-center">{course.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{course.fees}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{course.specializations} Specializations</span>
                  </div>
                  <Link to={`/university/manipal/courses/${course.id}`}>
                    <Button className="w-full mt-4" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Manipal Online?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border/50">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-sm text-muted-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Educational Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have chosen Manipal University Jaipur Online for quality education. 
            Apply now and take the first step towards your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Apply for Admission
            </Button>
            <Button variant="outline" size="lg">
              Talk to Counselor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manipal;
