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
  const topUniversities = [...]; // Same as original
  const specializations = [...];
  const keyFeatures = [...];
  const faqs = [...];

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

      {/* All your original sections */}
      {/* Hero Section */}
      {/* Quick Stats */}
      {/* Top Universities */}
      {/* Specializations */}
      {/* Key Features */}

      {/* ✅ Insert 3 new sections right here BEFORE FAQ */}
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

      {/* Now your FAQ, CTA, and Footer will render correctly */}
      {/* FAQ */}
      {/* CTA */}
      <Footer />
    </div>
  );
};

export default OnlineMBA;
