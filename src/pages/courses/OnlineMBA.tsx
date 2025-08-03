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
  Building
} from "lucide-react";
import mbaIcon from "@/assets/icons/mba-icon.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";
import hiringPartnersImg from "@/assets/hiring-partners.png";

const OnlineMBA = () => {
  const topUniversities = [
    {
      name: "Manipal University Online",
      logo: manipalLogo,
      rating: 4.6,
      fees: "₹75,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+"
    },
    {
      name: "Uttaranchal University",
      logo: uttaranchalLogo,
      rating: 4.5,
      fees: "₹45,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A+"
    },
    {
      name: "Vivekananda Global University",
      logo: vguLogo,
      rating: 4.4,
      fees: "₹40,000+/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, AIU"
    },
    {
      name: "IGNOU",
      logo: ignouLogo,
      rating: 4.8,
      fees: "₹31,500/year",
      duration: "2 Years",
      accreditation: "UGC, AICTE, NAAC A++"
    }
  ];

  const specializations = [
    "Finance Management",
    "Marketing Management", 
    "Human Resource Management",
    "Operations Management",
    "International Business",
    "Digital Marketing",
    "Business Analytics",
    "Healthcare Management",
    "Banking & Financial Services",
    "Supply Chain Management"
  ];

  const keyFeatures = [
    "100% Online Learning",
    "Industry-Relevant Curriculum",
    "Expert Faculty",
    "Flexible Study Schedule",
    "Live Interactive Sessions",
    "Case Study Methodology",
    "Industry Projects",
    "Career Support Services"
  ];

  const syllabus = [
    "Principles of Management",
    "Marketing Management",
    "Financial Accounting",
    "Business Economics",
    "Operations Management",
    "Organizational Behaviour",
    "Strategic Management",
    "Human Resource Management"
  ];

  const careers = [
    "Business Manager",
    "Marketing Manager",
    "HR Manager",
    "Financial Analyst",
    "Operations Manager",
    "Product Manager"
  ];

  const recruiters = [
    "TCS", "Accenture", "Amazon", "HDFC Bank", "Cognizant", "Infosys"
  ];

  const faqs = [
    {
      question: "Is Online MBA valid and recognized?",
      answer: "Yes, Online MBA from UGC-recognized universities holds the same value as regular MBA. It is accepted by employers and for further studies."
    },
    {
      question: "What is the eligibility criteria for Online MBA?",
      answer: "Bachelor's degree in any discipline with minimum 50% marks from a recognized university. Some universities may require work experience."
    },
    {
      question: "How is Online MBA different from Distance MBA?",
      answer: "Online MBA uses digital platforms for live classes, interactive sessions, and virtual labs, while Distance MBA relies more on self-study materials."
    },
    {
      question: "What are the career opportunities after Online MBA?",
      answer: "Graduates can pursue roles like Business Manager, Marketing Manager, HR Manager, Financial Analyst, Consultant, and Senior Management positions."
    },
    {
      question: "Is work experience mandatory for Online MBA?",
      answer: "Work experience is not mandatory for most Online MBA programs, but some executive MBA programs may require 2-3 years of experience."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      {/* Existing sections here (Hero, Stats, Top Universities, Specializations, Features, etc.) */}

      {/* New Section - MBA Subjects & Syllabus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MBA Subjects & Syllabus</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Gain insights into business, management, and leadership with a comprehensive MBA curriculum
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {syllabus.map((subject, index) => (
              <Card key={index} className="p-4 border border-gray-200/60">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0052CC]" />
                  <span className="font-medium">{subject}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Section - Career Scope */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Opportunities After Online MBA</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Online MBA opens up diverse career paths in business, management, and leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, index) => (
              <Card key={index} className="p-6 text-center border border-gray-200/60">
                <h3 className="font-medium text-lg">{career}</h3>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Top Recruiters</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {recruiters.map((company, index) => (
                <Badge key={index} className="text-base px-4 py-2 bg-white border border-gray-300 text-gray-700">
                  {company}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Section - Our Students Work At */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Students Work At</h2>
          <img 
            src={hiringPartnersImg} 
            alt="Our Hiring Partners" 
            className="mx-auto max-w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Continue rest of the original sections including FAQ and CTA */}
      <Footer />
    </div>
  );
};

export default OnlineMBA;
