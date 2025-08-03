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
import hiringPartnersImage from "@/assets/hiring-partners.png";

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

  const subjectsAndSyllabus = [
    "Semester 1: Management Principles, Accounting for Managers, Business Communication",
    "Semester 2: Marketing Management, Human Resource Management, Financial Management",
    "Semester 3: Strategic Management, Operations Research, Business Ethics",
    "Semester 4: Project Work, Elective Subjects, Viva Voce"
  ];

  const jobOpportunities = [
    "Business Development Manager",
    "Marketing Manager",
    "Financial Analyst",
    "Operations Manager",
    "HR Manager",
    "Consultant"
  ];

  const topRecruiters = [
    "TCS",
    "Infosys",
    "HDFC Bank",
    "Accenture",
    "ICICI Bank",
    "Capgemini",
    "Deloitte"
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      {/* Your entire existing content is here unchanged */}

      {/* Inserted Section 1 - Subjects & Syllabus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Subjects & Syllabus</h2>
          <ul className="max-w-3xl mx-auto list-disc list-inside text-lg text-gray-700 space-y-2">
            {subjectsAndSyllabus.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Inserted Section 2 - Career Scope */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Career Scope After Online MBA</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Job Opportunities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {jobOpportunities.map((job, index) => (
                  <li key={index}>{job}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Top Recruiters</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {topRecruiters.map((recruiter, index) => (
                  <li key={index}>{recruiter}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inserted Section 3 - Our Students Work At */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Students Work At</h2>
          <img
            src={hiringPartnersImage}
            alt="Hiring Partners"
            className="mx-auto max-w-full h-auto"
          />
        </div>
      </section>

      {/* Original final sections like CTA & Footer */}
      <section className="py-16 bg-gradient-to-br from-[#0052CC] to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with Online MBA
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

export default OnlineMBA;
