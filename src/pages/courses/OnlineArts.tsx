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
  Palette,
  Globe,
  Users2
} from "lucide-react";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";

const OnlineArts = () => {
  const topUniversities = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      rating: 4.6,
      fees: "₹40,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+"
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹25,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+"
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹22,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, AIU"
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹12,000/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A++"
    }
  ];

  const programs = [
    {
      title: "Bachelor of Arts (BA)",
      duration: "3 Years",
      fees: "₹15,000 - ₹45,000/year",
      description: "Comprehensive liberal arts program covering humanities, social sciences, and diverse academic disciplines",
      specializations: ["English Literature", "Psychology", "Political Science", "History", "Sociology", "Economics"]
    },
    {
      title: "Master of Arts (MA)",
      duration: "2 Years",
      fees: "₹20,000 - ₹50,000/year",
      description: "Advanced arts program for specialized knowledge and research in humanities and social sciences",
      specializations: ["English Literature", "Psychology", "Political Science", "History", "Public Administration", "Social Work"]
    }
  ];

  const specializations = [
    "English Literature",
    "Psychology", 
    "Political Science",
    "History",
    "Sociology",
    "Economics",
    "Philosophy",
    "Public Administration",
    "Social Work",
    "Journalism & Mass Communication",
    "Fine Arts",
    "Languages & Linguistics"
  ];

  const keyFeatures = [
    "Flexible Learning Schedule",
    "Expert Faculty Guidance",
    "Research Methodology Training",
    "Interactive Virtual Classes",
    "Digital Library Access",
    "Assignment & Project Support",
    "Career Counselling",
    "Industry Exposure Programs"
  ];

  const careerOpportunities = [
    "Civil Services (IAS/IPS)",
    "Teaching & Education",
    "Journalism & Media",
    "Content Writing",
    "Social Work",
    "Human Resources",
    "Public Administration", 
    "Research & Analysis",
    "NGO & Development Sector",
    "Corporate Communications",
    "Psychology Counselor",
    "Cultural Affairs"
  ];

  const faqs = [
    {
      question: "Is Online BA/MA degree valid for government jobs?",
      answer: "Yes, Online BA/MA from UGC-recognized universities is valid for all government jobs, civil services, teaching positions, and further studies like MA, PhD."
    },
    {
      question: "What is the eligibility criteria for Online BA?",
      answer: "Students must have completed 12th grade from any stream (Arts, Commerce, Science) with minimum 50% marks from a recognized board."
    },
    {
      question: "Can I pursue B.Ed after Online BA?",
      answer: "Yes, Online BA graduates are eligible for B.Ed admission in all universities. Many students pursue teaching careers after BA + B.Ed combination."
    },
    {
      question: "What are the research opportunities in Arts programs?",
      answer: "Programs include research methodology, dissertation projects, and opportunities to pursue M.Phil/PhD. Students can specialize in their areas of interest."
    },
    {
      question: "How are Online Arts programs conducted?",
      answer: "Programs include live interactive sessions, recorded lectures, digital study materials, virtual library access, and regular assessments through online platforms."
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
              <Palette className="h-16 w-16 mx-auto mb-4 text-[#0052CC]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online Arts & Humanities Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Explore the world of humanities and social sciences with Online BA and MA programs from India's top universities. 
              Develop critical thinking, research skills, and comprehensive knowledge across diverse disciplines.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                Diverse Subjects
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Users2 className="h-4 w-4 mr-2" />
                Social Impact
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Building className="h-4 w-4 mr-2" />
                Government Ready
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
              <div className="text-3xl font-bold text-[#0052CC] mb-2">40+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">120+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">75%</div>
              <div className="text-gray-600">Government Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">200+</div>
              <div className="text-gray-600">Career Options</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Arts & Humanities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved online arts programs
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
              Popular Arts & Humanities Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed for diverse career paths in humanities and social sciences
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

      {/* Specializations */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Arts & Humanities Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore diverse fields of study in humanities and social sciences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow bg-white border border-gray-200/60">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0052CC]" />
                  <span className="font-medium">{spec}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Opportunities in Arts & Humanities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover diverse career paths in government, education, media, and social sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow border border-gray-200/60">
                <div className="flex items-center gap-3">
                  <Palette className="h-5 w-5 text-[#0052CC]" />
                  <span className="font-medium">{career}</span>
                </div>
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
              Why Choose Online Arts & Humanities?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Develop critical thinking and research skills with flexible online learning
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
              Get answers to common questions about Online Arts & Humanities programs
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
            Ready to Explore Arts & Humanities?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover your passion and build a meaningful career in humanities and social sciences
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

export default OnlineArts;