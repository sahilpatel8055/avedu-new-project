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
  Briefcase
} from "lucide-react";
import bbaIcon from "@/assets/icons/bba-icon.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";

const OnlineBBA = () => {
  const topUniversities = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      rating: 4.6,
      fees: "₹55,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+"
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹35,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+"
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹30,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, AIU"
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹18,000/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A++"
    }
  ];

  const specializations = [
    "Digital Marketing",
    "Finance Management",
    "Human Resource Management",
    "International Business",
    "Marketing Management",
    "Operations Management",
    "Entrepreneurship",
    "Business Analytics",
    "Retail Management",
    "Banking & Insurance"
  ];

  const keyFeatures = [
    "Industry-Relevant Curriculum",
    "Case Study Methodology",
    "Expert Faculty from Industry",
    "Flexible Learning Schedule",
    "Live Interactive Sessions",
    "Business Project Work",
    "Internship Opportunities",
    "Career Guidance & Placement"
  ];

  const careerOpportunities = [
    "Business Analyst",
    "Marketing Executive",
    "HR Executive",
    "Sales Manager",
    "Operations Manager",
    "Business Development Associate",
    "Digital Marketing Specialist",
    "Financial Analyst",
    "Project Coordinator",
    "Entrepreneur"
  ];

  const faqs = [
    {
      question: "Is Online BBA degree valid and recognized?",
      answer: "Yes, Online BBA from UGC-recognized universities holds the same value as regular BBA. It is accepted by employers and for further studies like MBA."
    },
    {
      question: "What is the eligibility criteria for Online BBA?",
      answer: "Students must have completed 12th grade (10+2) from any stream (Science, Commerce, Arts) with minimum 50% marks from a recognized board."
    },
    {
      question: "Can I pursue MBA after Online BBA?",
      answer: "Yes, Online BBA graduates are eligible for MBA admission in all universities, including top business schools and for CAT, MAT, XAT exams."
    },
    {
      question: "What are the career prospects after Online BBA?",
      answer: "BBA graduates can work in various roles like Business Analyst, Marketing Executive, HR roles, Sales Manager, and can also start their own business."
    },
    {
      question: "How is Online BBA different from regular BBA?",
      answer: "Online BBA offers the same curriculum with flexible timing. Students can learn from anywhere while maintaining work-study balance with live sessions and recorded classes."
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
              <img src={bbaIcon} alt="BBA" className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online BBA Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Start your business career with an Online BBA from India's top universities. 
              Get comprehensive business education with flexibility and industry exposure.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                UGC Approved
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Briefcase className="h-4 w-4 mr-2" />
                Industry Ready
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                Career Growth
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
              <div className="text-3xl font-bold text-[#0052CC] mb-2">100+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">3 Years</div>
              <div className="text-gray-600">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">90%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Online BBA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved Online BBA programs
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

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular BBA Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of specializations to match your career interests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow border border-gray-200/60">
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
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Career Opportunities After BBA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore diverse career paths across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow bg-white border border-gray-200/60">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-[#0052CC]" />
                  <span className="font-medium">{career}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Online BBA?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience comprehensive business education with modern learning methods
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border border-gray-200/60">
                <CheckCircle className="h-8 w-8 text-[#0052CC] mx-auto mb-3" />
                <h3 className="font-bold mb-2">{feature}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about Online BBA programs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border border-gray-200/60">
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
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards a successful business career with Online BBA
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

export default OnlineBBA;