import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

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
  Briefcase // Added Briefcase icon
} from "lucide-react";

import mbaIcon from "@/assets/icons/mba-icon.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";
import hiringPartnersImg from "@/assets/hiring-partners.png";
import smuLogo from "@/assets/smu-logo.jpg";
import amityLogo from "@/assets/amity-logo.jpg";
import lpuLogo from "@/assets/lpu-logo.jpg";
import mangalyatanLogo from "@/assets/mangalyatan-logo.png";
import HorizontalUniversityScroll from "@/components/ui/horizontal-university-scroll";

// New data for the Career Scope section
const careerOpportunities = [
  {
    title: "Project Manager",
    salary: "₹12 LPA",
    icon: <Users className="h-6 w-6 text-[#0052CC]" />,
  },
  {
    title: "Management Consultant",
    salary: "₹15 LPA",
    icon: <Briefcase className="h-6 w-6 text-[#0052CC]" />,
  },
  {
    title: "HR Manager",
    salary: "₹10 LPA",
    icon: <Building className="h-6 w-6 text-[#0052CC]" />,
  },
  {
    title: "Operations Manager",
    salary: "₹11 LPA",
    icon: <TrendingUp className="h-6 w-6 text-[#0052CC]" />,
  },
  {
    title: "Marketing Manager",
    salary: "₹13 LPA",
    icon: <BookOpen className="h-6 w-6 text-[#0052CC]" />,
  },
  {
    title: "Financial Analyst",
    salary: "₹12 LPA",
    icon: <DollarSign className="h-6 w-6 text-[#0052CC]" />,
  },
];

const topUniversities = [
  {
    name: "Manipal University Online",
    logo: manipalLogo,
    rating: 4.6,
    fees: "₹75,000+/year",
    duration: "2 Years",
    accreditation: "UGC, AICTE, NAAC A+",
  },
  {
    name: "Uttaranchal University",
    logo: uttaranchalLogo,
    rating: 4.5,
    fees: "₹45,000+/year",
    duration: "2 Years",
    accreditation: "UGC, AICTE, NAAC A+",
  },
  {
    name: "Vivekananda Global University",
    logo: vguLogo,
    rating: 4.4,
    fees: "₹40,000+/year",
    duration: "2 Years",
    accreditation: "UGC, AICTE, AIU",
  },
  {
    name: "IGNOU",
    logo: ignouLogo,
    rating: 4.8,
    fees: "₹31,500/year",
    duration: "2 Years",
    accreditation: "UGC, AICTE, NAAC A++",
  },
  {
    name: "Sikkim Manipal University",
    logo: smuLogo,
    rating: 4.5,
    fees: "₹50,000+/year",
    duration: "2 Years",
    accreditation: "UGC, AICTE, NAAC A+",
  },
  {
    name: "Amity University Online",
    logo: amityLogo,
    rating: 4.3,
    fees: "₹60,000+/year",
    duration: "2 Years",
    accreditation: "UGC, AICTE, NAAC A+",
  },
  {
    name: "Lovely Professional University",
    logo: lpuLogo,
    rating: 4.2,
    fees: "₹55,000+/year",
    duration: "2 Years",
    accreditation: "UGC, AICTE, NAAC A+",
  },
  {
    name: "Mangalyatan University",
    logo: mangalyatanLogo,
    rating: 4.1,
    fees: "₹45,000+/year",
    duration: "2 Years",
    accreditation: "UGC, AICTE",
  },
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
  "Supply Chain Management",
  "Production and Operations Management",
  "Retail Management",
  "Data Science",
  "Entrepreneurship and Leadership Managements",
  "Insurance Management",
  "Inernational finance (ACCA)"
];

const keyFeatures = [
  "100% Online Learning",
  "Industry-Relevant Curriculum",
  "Expert Faculty",
  "Flexible Study Schedule",
  "Live Interactive Sessions",
  "Case Study Methodology",
  "Industry Projects",
  "Career Support Services",
];

const faqs = [
  {
    question: "Is Online MBA valid and recognized?",
    answer:
      "Yes, Online MBA from UGC-recognized universities holds the same value as regular MBA. It is accepted by employers and for further studies.",
  },
  {
    question: "What is the eligibility criteria for Online MBA?",
    answer:
      "Bachelor's degree in any discipline with minimum 50% marks from a recognized university. Some universities may require work experience.",
  },
  {
    question: "How is Online MBA different from Distance MBA?",
    answer:
      "Online MBA uses digital platforms for live classes, interactive sessions, and virtual labs, while Distance MBA relies more on self-study materials.",
  },
  {
    question: "What are the career opportunities after Online MBA?",
    answer:
      "Graduates can pursue roles like Business Manager, Marketing Manager, HR Manager, Financial Analyst, Consultant, and Senior Management positions.",
  },
  {
    question: "Is work experience mandatory for Online MBA?",
    answer:
      "Work experience is not mandatory for most Online MBA programs, but some executive MBA programs may require 2-3 years of experience.",
  },
];

const OnlineMBA = () => {
  
  
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="mb-6">
              <img src={mbaIcon} alt="MBA" className="h-24 w-24 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Online MBA Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Advance your career with an Online MBA from India's top
              universities. Get industry-relevant curriculum, expert faculty, and
              flexible learning options.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                UGC Approved
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <TrendingUp className="h-4 w-4 mr-2" />
                High ROI Career
              </Badge>
              <Badge className="bg-[#0052CC] text-white text-base px-4 py-2">
                <Building className="h-4 w-4 mr-2" />
                Top Recruiters
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-[#0052CC] hover:bg-[#003d99]" onClick={openForm}>
                <Phone className="h-5 w-5 mr-2" />
                Get Free Counselling
              </Button>
              <Button size="lg" variant="outline" onClick={openForm}>
                <BookOpen className="h-5 w-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">50+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">200+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">
                2 Years
              </div>
              <div className="text-gray-600">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052CC] mb-2">100%</div>
              <div className="text-gray-600">Online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-lavender-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Universities for Online MBA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from India's leading universities offering UGC-approved
              Online MBA programs
            </p>
          </div>
          <HorizontalUniversityScroll universities={topUniversities} courseType="MBA" />
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular MBA Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of specializations to match your career
              goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="p-4 hover:shadow-md transition-shadow border border-gray-200/60"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0052CC]" />
                  <span className="font-medium">{spec}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects & Syllabus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Online MBA Course Subjects/Syllabus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {["Semester I", "Semester II", "Semester III", "Semester IV"].map(
              (semester, i) => (
                <Card key={i}>
                  <CardHeader>
                    <h3 className="font-bold text-xl text-[#0052CC]">
                      {semester}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    {i === 0 && (
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Entrepreneurial Practice</li>
                        <li>Business Communication (VAC)</li>
                        <li>Managerial Economics</li>
                        <li>Financial Accounting</li>
                        <li>Data Visualisation (Excel/Tableau)</li>
                        <li>Organizational Behaviour</li>
                        <li>Marketing Management</li>
                      </ul>
                    )}
                    {i === 1 && (
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Business Research Methods (R/Python)</li>
                        <li>Operation Management</li>
                        <li>Human Resource Management</li>
                        <li>Management Accounting</li>
                        <li>Financial Management</li>
                        <li>Legal Aspects of Business</li>
                        <li>Business Communication (VAC)</li>
                      </ul>
                    )}
                    {i === 2 || i === 3 ? (
                      <>
                        <h4 className="font-semibold mb-2">Core Subjects:</h4>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                          {i === 2 ? (
                            <>
                              <li>Strategic Management</li>
                              <li>Term Paper</li>
                            </>
                          ) : (
                            <>
                              <li>International Business Management</li>
                              <li>Project</li>
                            </>
                          )}
                        </ul>
                        <h4 className="font-semibold mb-2">
                          Electives/Specializations:
                        </h4>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {[
                            "Digital Marketing",
                            "Finance",
                            "Marketing",
                            "Human Resources",
                            "Analytics & DS",
                            "BFSI",
                            "FinTech",
                            "Operations Management",
                            "International Business",
                            "Information System Management",
                            "Project Management",
                            "Supply Chain Management",
                            "Retail Management",
                          ].map((subj, i) => (
                            <li key={i}>{subj}</li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </CardContent>
                </Card>
              )
            )}
          </div>

          <h3 className="text-2xl font-bold text-center text-[#0052CC] mb-6">
            Skills Obtained in Online MBA Course
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-700 text-sm">
            {[
              "Strategic thinking",
              "Communication",
              "Entrepreneurship",
              "Networking",
              "Time management",
              "Leadership",
              "Interpersonal communication",
              "Self-management",
              "Problem-solving",
              "Marketing",
              "Decision-making",
              "Analytical skills",
              "Finance skills",
              "Operations management",
              "Analysis",
              "Skills management",
              "Self-discipline",
              "Teamwork",
              "Technical skills",
              "Global perspective",
              "Flexibility",
            ].map((skill, i) => (
              <div key={i} className="bg-gray-100 px-4 py-2 rounded shadow-sm">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Scope & Top Recruiters - Modified Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Career Scope & Top Recruiters
          </h2>
          {/* New Career Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="flex items-center p-4 shadow-md bg-white">
                <div className="flex-shrink-0 mr-4">{career.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{career.title}</h3>
                  <p className="text-gray-600 text-sm">
                    Avg. Salary: <span className="font-bold">{career.salary}</span>
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* New recruiter section with heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Students Are Working At
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Many companies actively recruit MBA graduates from diverse
              industries including consulting, finance, FMCG, technology, and
              logistics.
            </p>
          </div>
          <div className="mt-8">
            <img
              src={hiringPartnersImg}
              alt="Hiring Partners"
              className="mx-auto w-full max-w-6xl rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about Online MBA programs
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

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-[#0052CC] to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers
            with Online MBA
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#0052CC] hover:bg-gray-100"
              onClick={openForm}
            >
              <Phone className="h-5 w-5 mr-2" />
              Get Free Counselling
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0052CC]"
              onClick={openForm}
            >
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
