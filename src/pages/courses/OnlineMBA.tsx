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
    { name: "Manipal University", logo: manipalLogo },
    { name: "Uttaranchal University", logo: uttaranchalLogo },
    { name: "Vivekananda Global University", logo: vguLogo },
    { name: "IGNOU", logo: ignouLogo }
  ];

  const specializations = [
    "Marketing Management",
    "Finance Management",
    "Human Resource Management",
    "Operations Management",
    "IT Management"
  ];

  const keyFeatures = [
    "UGC-DEB Approved",
    "Top NAAC A+ Rated Universities",
    "Placement Assistance",
    "Flexible Learning with Live + Recorded Classes",
    "Affordable Fee Structure"
  ];

  const faqs = [
    {
      question: "Is an online MBA valid for government jobs?",
      answer: "Yes, if it's from a UGC-DEB approved university."
    },
    {
      question: "What is the duration of an online MBA?",
      answer: "Typically 2 years, divided into 4 semesters."
    },
    {
      question: "Is there any entrance exam for online MBA?",
      answer: "Most universities do not require entrance exams."
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

      <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Online MBA Programs</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Earn your MBA from top accredited universities with flexible online learning and career-focused curriculum.
          </p>
          <div className="mt-6">
            <Button>Apply Now</Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <GraduationCap className="mx-auto text-blue-600" size={32} />
            <p className="mt-2 font-semibold">Recognized Degrees</p>
          </div>
          <div>
            <Clock className="mx-auto text-blue-600" size={32} />
            <p className="mt-2 font-semibold">2 Years Duration</p>
          </div>
          <div>
            <Users className="mx-auto text-blue-600" size={32} />
            <p className="mt-2 font-semibold">10000+ Students</p>
          </div>
          <div>
            <Star className="mx-auto text-blue-600" size={32} />
            <p className="mt-2 font-semibold">Top NAAC A+ Universities</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Top Universities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            {topUniversities.map((uni, index) => (
              <div key={index} className="text-center">
                <img src={uni.logo} alt={uni.name} className="h-16 mx-auto" />
                <p className="mt-2 text-sm font-medium">{uni.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Popular Specializations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {specializations.map((spec, index) => (
              <Badge key={index} className="px-4 py-2 text-base">{spec}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-blue-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="text-green-600 mr-2" /> {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Enroll?</h2>
          <p className="text-lg mb-6">Start your MBA journey with a top online university today.</p>
          <Button variant="secondary">Apply Now</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnlineMBA;
