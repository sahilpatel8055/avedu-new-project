import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import EmbeddedCounselingForm from "@/components/ui/embedded-counseling-form";
import { useCounselingForm } from "@/hooks/use-counseling-form";
import { Star, MapPin, Users, GraduationCap, Award, DollarSign, BookOpen, Clock, Check } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import UniversitySlideshow from "@/components/ui/university-slideshow";

// Import all assets and data
import manipalLogo from "@/assets/manipal-logo.png";
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import nirfIcon from "@/assets/icons/nirf-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import qsIcon from "@/assets/icons/qs-icon.png";
import nbaIcon from "@/assets/icons/nba-icon.png";
import degreeFront from "@/assets/manipal-1stdegree.jpg";
import degreeBack from "@/assets/manipal-2nddegree.jpg";
import manipalCourseData from "@/data/manipalCourseData.json"; // Import the course data

// New campus images for the new section
import mujCampus from "@/assets/muj-campus.jpg";
import smuCampus from "@/assets/smu-campus.jpg";
import maheCampus from "@/assets/mahe-campus.jpg";

const Manipal = () => {
  const { openForm, CounselingFormComponent } = useCounselingForm();
  
  const popularCourses = manipalCourseData.courses.filter(
    (course) => course.level === "ug" || course.name.includes("MBA")
  );

  const features = [
    "Enhanced digital learning platform with LMS",
    "Same faculty as Manipal University Jaipur",
    "Industry practitioners as mentors",
    "Remotely proctored online examinations",
    "Self-learning activities & practice tests",
    "No-cost EMI financing options",
    "Scholarship opportunities available",
    "Connections with 100+ Fortune 500 recruiters"
  ];

  const approvals = [
    { name: "UGC", description: "University Grants Commission Approved", icon: ugcIcon },
    { name: "AICTE", description: "All India Council for Technical Education", icon: aicteIcon },
    { name: "NIRF", description: "Rank 64 in University Category", icon: nirfIcon },
    { name: "NAAC A+", description: "National Assessment and Accreditation Council", icon: naacIcon },
    { name: "QS Ranking", description: "QS World University Rankings", icon: qsIcon },
    { name: "NBA", description: "National Board of Accreditation", icon: nbaIcon }
  ];

  const [degreePage, setDegreePage] = useState('front');

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Slideshow Banner */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 pt-6">
        <div className="container mx-auto px-4">
          <UniversitySlideshow />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16" id="top">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img src={manipalLogo} alt="Manipal Logo" className="w-20 h-20 rounded-lg object-contain" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Manipal University Online</h1>
                  <p className="text-lg text-muted-foreground">Accredited with grade A+ by NAAC</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">4.6</span>
                  <span className="text-muted-foreground">(857 Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  NIRF Rank 64
                </Badge>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Jaipur, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>50K+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>20+ Programs</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={openForm}>
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" onClick={openForm}>
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="flex-1 lg:max-w-md">
              <EmbeddedCounselingForm />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Manipal University Online</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                The online Manipal university is a part of the prestigious <strong className="text-foreground">Manipal University Jaipur (MUJ)</strong>. The university started offering courses in online mode in the year 2021. The University Grants Commission (UGC) has entitled Online Manipal University to offer UG and PG programs.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The university currently offers BCA, BBA, and B.Com in the undergraduate category while MCA, MBA, M.Com, and MA JMC in the postgraduate category. These online courses are taught by the esteemed same faculty of the Manipal University Jaipur and real-world mentors.
              </p>
              <p className="text-lg leading-relaxed">
                The university offers an enhanced digital learning platform where you can find all your course material and cutting-edge tutorials. The university conducts examinations in online mode using this LMS. These online examinations are secure as they are remotely proctored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approvals Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Approvals & Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {approvals.map((approval, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mb-4">
                    {approval.icon ? (
                      <img src={approval.icon} alt={`${approval.name} Icon`} className="w-24 h-24 object-contain" />
                    ) : (
                      <Award className="w-24 h-24 text-primary" />
                    )}
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-4">Sample Degree</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-prose">
                The degrees offered by Manipal University Online are valid and recognized by various government bodies, making them suitable for all career opportunities.
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
                  src={degreePage === 'front' ? degreeFront : degreeBack}
                  alt="Manipal University Sample Degree"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <div className="flex justify-center gap-2 mt-4">
                  <button
                    onClick={() => setDegreePage('front')}
                    className={`h-3 w-3 rounded-full transition-colors ${degreePage === 'front' ? 'bg-primary' : 'bg-gray-300'}`}
                  ></button>
                  <button
                    onClick={() => setDegreePage('back')}
                    className={`h-3 w-3 rounded-full transition-colors ${degreePage === 'back' ? 'bg-primary' : 'bg-gray-300'}`}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section - Now dynamically generated from JSON */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Courses</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {popularCourses.map((course, index) => (
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
                    <span>{course.specializationsCount} Specializations</span>
                  </div>
                  <Link to={`/university/manipal/courses/${course.id}`}>
                    <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90" variant="outline">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Manipal University Online?</h2>
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
            Join thousands of students who have chosen Manipal University Online for quality education. 
            Apply now and take the first step towards your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={openForm}>
              Apply for Admission
            </Button>
            <Button variant="outline" size="lg" onClick={openForm}>
              Talk to Counselor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CounselingFormComponent />
    </div>
  );
};

export default Manipal;
