import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  MapPin,
  Phone,
  Calendar,
  DollarSign,
  BookOpen,
  Award,
  TrendingUp,
  Building,
  Code,
  Laptop
} from "lucide-react";
import techIcon from "@/assets/icons/tech-icon.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";

const OnlineTech = () => {
  const topUniversities = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      rating: 4.6,
      fees: "₹60,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE, NAAC A+"
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹35,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE, NAAC A+"
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹30,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE, AIU"
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹15,000+/year",
      duration: "3-4 Years",
      accreditation: "UGC, AICTE, NAAC A++"
    }
  ];

  const programs = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      duration: "3 Years",
      fees: "₹30,000 - ₹75,000/year",
      description: "Comprehensive computer applications program covering programming, databases, and software development",
      specializations: ["Web Development", "Mobile App Development", "Data Analytics", "Cyber Security"]
    },
    {
      title: "Master of Computer Applications (MCA)",
      duration: "2 Years",
      fees: "₹40,000 - ₹85,000/year",
      description: "Advanced computer applications program for software development and IT management careers",
      specializations: ["Software Engineering", "AI & Machine Learning", "Cloud Computing", "Data Science"]
    },
    {
      title: "B.Tech Computer Science",
      duration: "4 Years",
      fees: "₹50,000 - ₹90,000/year",
      description: "Engineering degree focusing on computer science fundamentals and advanced technologies",
      specializations: ["Software Engineering", "AI/ML", "Cyber Security", "IoT"]
    },
    {
      title: "M.Tech Computer Science",
      duration: "2 Years",
      fees: "₹60,000 - ₹95,000/year",
      description: "Postgraduate engineering program for advanced technical and research roles",
      specializations: ["Data Science", "Machine Learning", "Cloud Computing", "Software Architecture"]
    }
  ];

  const keyFeatures = [
    "Industry-Relevant Curriculum",
    "Virtual Labs & Projects",
    "Expert Faculty from Tech Industry",
    "Flexible Learning Schedule",
    "Live Coding Sessions",
    "Hands-on Programming Practice",
    "Industry Internships",
    "Career Placement Support"
  ];

  const faqs = [
    {
      question: "Are Online BCA/MCA degrees valid for jobs?",
      answer: "Yes, Online BCA/MCA from UGC-recognized universities are valid and accepted by employers in IT industry and for higher studies."
    },
    {
      question: "What programming languages are covered?",
      answer: "Courses cover popular languages like Java, Python, C++, JavaScript, PHP, and emerging technologies like AI/ML frameworks."
    },
    {
      question: "Do I get hands-on coding experience in online programs?",
      answer: "Yes, programs include virtual labs, coding assignments, live programming sessions, and industry projects for practical experience."
    },
    {
      question: "What are the career opportunities after BCA/MCA?",
      answer: "Graduates can work as Software Developer, Web Developer, System Analyst, Database Administrator, IT Consultant, and many more tech roles."
    },
    {
      question: "Is work experience required for MCA admission?",
      answer: "Work experience is not mandatory for MCA admission. However, having some exposure to programming concepts is beneficial."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="mb-6">
              <img src={techIcon} alt="Technology" className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online Engineering & Technology Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Launch your tech career with Online BCA, MCA, B.Tech & M.Tech programs from India's top universities. 
              Get industry-relevant curriculum and hands-on coding experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Code className="h-4 w-4 mr-2" />
                Industry Curriculum
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Laptop className="h-4 w-4 mr-2" />
                Virtual Labs
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Building className="h-4 w-4 mr-2" />
                Top IT Companies
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#0052CC] hover:bg-[#003d99]">
                <Phone className="h-5 w-5 mr-2" />
                Get Free Counselling
              </Button>
              <Button size="lg" variant="outline">
                <BookOpen className="h-5 w-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">45+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">150+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">500+</div>
              <div className="text-gray-600">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Engineering & Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved online technology programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topUniversities.map((university, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white border border-gray-200/60">
                <CardHeader className="text-center pb-3">
                  <img 
                    src={university.logo} 
                    alt={university.name}
                    className="h-16 w-16 object-contain mx-auto mb-3"
                  />
                  <h3 className="font-bold text-lg leading-tight">{university.name}</h3>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{university.rating}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center">
                    <div className="font-bold text-[#0052CC] text-lg">{university.fees}</div>
                    <div className="text-sm text-gray-600">Annual Fees</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{university.duration}</div>
                    <div className="text-sm text-gray-600">Program Duration</div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs">
                      {university.accreditation}
                    </Badge>
                  </div>
                  <Button className="w-full bg-[#0052CC] hover:bg-[#003d99]">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Technology Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to meet industry demands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200/60">
                <CardHeader>
                  <h3 className="font-bold text-xl mb-2">{program.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {program.fees}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Popular Specializations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.specializations.map((spec, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-[#0052CC] hover:bg-[#003d99]">
                    View Program Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Online Engineering & Technology?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get industry-ready skills with modern learning methods and practical experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white border border-gray-200/60">
                <CheckCircle className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                <h3 className="font-bold mb-2">{feature}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about Online Engineering & Technology programs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200/60">
                <CardHeader>
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#0052CC] to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Tech Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the technology revolution with industry-relevant online programs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#0052CC] hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Counselling
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0052CC]">
              <Calendar className="h-5 w-5 mr-2" />
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnlineTech;