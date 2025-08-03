import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Users,
  GraduationCap,
  Award,
  DollarSign,
  BookOpen,
  Clock,
  Check, // NEW: Added this icon for the new section
} from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import ignouLogo from "@/assets/ignou-logo.png";
import ignouDegreeImg from "@/assets/ignou-degree.png"; // NEW: Import for the degree image

const IGNOU = () => {
  const courses = [
    { name: "Online MBA", fees: "₹56,000", duration: "2 Years", specializations: 67 },
    { name: "Online BCA", fees: "₹36,000", duration: "3 Years", specializations: 16 },
    { name: "Online MCA", fees: "₹48,000", duration: "2 Years", specializations: 13 },
    { name: "Online B.Com", fees: "₹24,000", duration: "3 Years", specializations: 10 },
    { name: "Online M.Com", fees: "₹18,000", duration: "2 Years", specializations: 7 },
    { name: "Online BA", fees: "₹12,000", duration: "3 Years", specializations: 13 },
    { name: "Online MA", fees: "₹12,000", duration: "2 Years", specializations: 19 },
    { name: "Online BBA", fees: "₹27,000", duration: "3 Years", specializations: 29 },
  ];

  const features = [
    "42 different online courses available",
    "Flexible course duration with budget-friendly fees",
    "Experienced professors with 800+ faculty members",
    "Access to eGyankosh LMS Portal",
    "Virtual classes and interactive sessions",
    "International collaborations with overseas institutions",
    "E-IGNOU Library access",
    "Gyandhara Audio Counseling Services",
  ];

  const approvals = [
    { name: "UGC-DEB", description: "University Grants Commission - Distance Education Bureau" },
    { name: "AIU", description: "Association of Indian Universities" },
    { name: "NIRF", description: "Rank 1 in Open University Category" },
    { name: "NAAC A++", description: "National Assessment and Accreditation Council" },
    { name: "WES", description: "World Education Services" },
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
                <img src={ignouLogo} alt="IGNOU Logo" className="w-20 h-20 rounded-lg" />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">IGNOU</h1>
                  <p className="text-lg text-muted-foreground">Indira Gandhi National Open University</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">4.8</span>
                  <span className="text-muted-foreground">(146 Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Rank #1 NIRF Open University
                </Badge>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>New Delhi, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>4M+ Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>270+ Programs</span>
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
                    <span className="font-semibold">1985</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">University Type:</span>
                    <span className="font-semibold">Central University</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mode:</span>
                    <span className="font-semibold">Online & Distance</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee Range:</span>
                    <span className="font-semibold">₹7,200 - ₹2,16,000</span>
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
            <h2 className="text-3xl font-bold text-center mb-8">About IGNOU</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Indira Gandhi National Open University (IGNOU)</strong> is one of the most trusted universities in India. It was established in 1985 by an Act of Parliament. The university is known for offering high-quality education in the online & distance learning modes. The university has served many aspiring students with its 21 Schools of Studies & 67+ regional centers.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The university has made it possible for many learners to get a degree/diploma/certificate in their choice of course through online learning, who did not get admission to regular courses or were not able to afford full-time education. The university offers 250+ options of courses under the categories of UG, PG, diploma, doctoral, & certificate programs.
              </p>
              <p className="text-lg leading-relaxed">
                The university is graded as NAAC A++ & has been recognized by the University Grants Commission (UGC), which makes it trustworthy for learners at national & international levels. The university's continuous efforts to make quality education accessible to all have led it to introduce innovative & need-based courses in its course list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approvals Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Approvals & Accreditations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {approvals.map((approval, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-center mb-4">
                    <Award className="w-12 h-12 text-primary" />
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
                  <Button className="w-full mt-4" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Degree Section - NEW */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side: Description */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-4">Sample Degree</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-prose">
                The degrees offered by IGNOU are fully valid and recognized by various government bodies, making them suitable for all career opportunities.
              </p>
              <ul className="space-y-4 text-left mx-auto md:mx-0 max-w-sm">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">UGC-DEB Recognized & AICTE Approved</p>
                    <p className="text-sm text-muted-foreground">Fully valid for government, private, and overseas jobs or higher studies.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Includes Marksheet & Digital Verification</p>
                    <p className="text-sm text-muted-foreground">Comes with transcript, and supports online QR-code-based verification.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Signed & Officially Stamped</p>
                    <p className="text-sm text-muted-foreground">Authenticated by the Registrar/Vice Chancellor with university seal.</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Right side: Image */}
            <div className="flex-1 max-w-lg mx-auto md:max-w-none">
              <div className="relative p-4 rounded-xl shadow-2xl bg-white transition-transform duration-300 hover:scale-105">
                <img
                  src={ignouDegreeImg}
                  alt="Sample IGNOU Degree"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose IGNOU?</h2>
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
            Join millions of students who have chosen IGNOU for quality online education.
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

export default IGNOU;
