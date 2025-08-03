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
  Calculator,
  PieChart
} from "lucide-react";
import financeIcon from "@/assets/icons/finance-icon.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";

const OnlineCommerce = () => {
  const topUniversities = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      rating: 4.6,
      fees: "₹45,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+"
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹30,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A+"
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹25,000+/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, AIU"
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹15,000/year",
      duration: "3 Years",
      accreditation: "UGC, AICTE, NAAC A++"
    }
  ];

  const programs = [
    {
      title: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      fees: "₹20,000 - ₹50,000/year",
      description: "Comprehensive commerce program covering accounting, finance, taxation, and business management",
      specializations: ["Accounting & Finance", "Banking & Insurance", "Taxation", "International Business"]
    },
    {
      title: "Master of Commerce (M.Com)",
      duration: "2 Years",
      fees: "₹25,000 - ₹55,000/year",
      description: "Advanced commerce program for specialized roles in finance, accounting, and business analysis",
      specializations: ["Financial Management", "Cost & Management Accounting", "Business Analytics", "International Finance"]
    }
  ];

  const specializations = [
    "Accounting & Finance",
    "Banking & Insurance",
    "Taxation & GST",
    "International Business",
    "Financial Management",
    "Cost Accounting",
    "Business Analytics",
    "Investment Management",
    "Corporate Finance",
    "Financial Planning"
  ];

  const keyFeatures = [
    "Industry-Updated Curriculum",
    "CA/CS Faculty Guidance",
    "Practical Case Studies",
    "Flexible Learning Schedule",
    "Live Financial Sessions",
    "Accounting Software Training",
    "Industry Internships",
    "Professional Certification Support"
  ];

  const careerOpportunities = [
    "Chartered Accountant (CA)",
    "Financial Analyst",
    "Banking Professional",
    "Tax Consultant",
    "Investment Advisor",
    "Accounts Manager",
    "Financial Planner",
    "Auditor",
    "Budget Analyst",
    "Finance Manager"
  ];

  const faqs = [
    {
      question: "Is Online B.Com/M.Com degree valid for CA/CS preparation?",
      answer: "Yes, Online B.Com/M.Com from UGC-recognized universities is valid for CA, CS, CMA and other professional courses. It provides strong foundation for these careers."
    },
    {
      question: "What is the eligibility criteria for Online B.Com?",
      answer: "Students must have completed 12th grade with Commerce stream (preferred) or any stream with minimum 50% marks from a recognized board."
    },
    {
      question: "Can I work while pursuing Online Commerce degree?",
      answer: "Yes, Online Commerce programs are designed for working professionals with flexible schedules, recorded lectures, and weekend live sessions."
    },
    {
      question: "What software and tools are covered in the curriculum?",
      answer: "Programs include training on Tally, Excel, GST software, financial modeling tools, and other industry-relevant accounting and finance software."
    },
    {
      question: "What are the career prospects in Banking sector?",
      answer: "Commerce graduates can pursue careers in Banking through IBPS, SBI exams, private banking roles, and specialized positions in investment banking and financial services."
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
              <img src={financeIcon} alt="Commerce & Finance" className="h-16 w-16 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online Commerce & Finance Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Build your career in finance and commerce with Online B.Com and M.Com programs from India's top universities. 
              Get comprehensive knowledge in accounting, finance, taxation, and business management.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Calculator className="h-4 w-4 mr-2" />
                CA/CS Foundation
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <PieChart className="h-4 w-4 mr-2" />
                Finance Focused
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Building className="h-4 w-4 mr-2" />
                Banking Ready
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
              <div className="text-3xl font-bold text-[#0052CC] mb-2">35+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">80+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">85%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">300+</div>
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
              Top Universities for Commerce & Finance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved online commerce programs
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
              Popular Commerce Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed for finance and accounting careers
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
              Popular Commerce Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialize in areas that match your career aspirations in finance and commerce
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
              Career Opportunities in Commerce & Finance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore lucrative career paths in finance, accounting, and business sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow border border-gray-200/60">
                <div className="flex items-center gap-3">
                  <Calculator className="h-5 w-5 text-[#0052CC]" />
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
              Why Choose Online Commerce & Finance?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get industry-relevant skills with practical knowledge and professional guidance
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
              Get answers to common questions about Online Commerce & Finance programs
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
            Ready to Build Your Finance Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey in commerce and finance with industry-relevant online programs
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

export default OnlineCommerce;