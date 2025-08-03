
import React from "react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import hiringPartnersImg from "@/assets/hiring-partners.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import ignouLogo from "@/assets/ignou-logo.png";

const OnlineMBA = () => {
  return (
    <main className="text-gray-800">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Online MBA Program</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Advance your career with a flexible, industry-aligned Online MBA degree.
        </p>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">UGC-Approved</h3>
            <p>Recognized by UGC and AICTE, globally accepted degree.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p>Attend live + recorded classes from anywhere.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Career Support</h3>
            <p>Resume building, mock interviews, job assistance.</p>
          </div>
        </div>
      </section>

      {/* Subjects & Syllabus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Subjects & Syllabus</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-gray-600">The Online MBA is a two-year (4‑semester) program covering:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Semester I & II (Core):</strong> Management Concepts & Organizational Behavior, Managerial Economics, Marketing Management, Financial Accounting, Business Statistics & Analytics, Information Systems, Strategic Management, HRM Essentials, Business Communication, Business Law, Decision Science.</li>
              <li><strong>Semester III & IV (Advanced & Project):</strong> Supply Chain & Operations Strategy, International Business & Finance, Export‑Import Procedures, Logistics & Ethics, Research Methodology, Capstone Project.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career Scope Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Career Scope & Top Recruiters</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
            <p>
              Graduates with an Online MBA can pursue roles such as Business Manager, Marketing Manager, HR Manager, Financial Analyst, Consultant, Operations Manager, Project Manager, and more.
            </p>
            <p>
              Many companies actively recruit MBA graduates from diverse industries including consulting, finance, FMCG, technology, and logistics. Common recruiters include Amazon, Deloitte, EY, KPMG, Wipro, TCS, Microsoft, and more.
            </p>
          </div>
          <div className="mt-8">
            <img
              src={hiringPartnersImg}
              alt="Our Students Work At"
              className="mx-auto w-full max-w-6xl rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Top Universities Offering Online MBA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Top Universities Offering Online MBA</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <img src={manipalLogo} alt="Manipal University" className="h-16 mx-auto" />
            <img src={uttaranchalLogo} alt="Uttaranchal University" className="h-16 mx-auto" />
            <img src={vguLogo} alt="Vivekananda Global University" className="h-16 mx-auto" />
            <img src={ignouLogo} alt="IGNOU" className="h-16 mx-auto" />
          </div>
        </div>
      </section>

      {/* Our Students Work At */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Students Work At</h2>
          <img
            src={hiringPartnersImg}
            alt="Hiring Partners"
            className="mx-auto w-full max-w-5xl rounded-md shadow"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Q: Is an online MBA degree valid for jobs?</h3>
              <p className="text-gray-700">Yes, UGC-approved online MBA degrees are valid for government and private sector jobs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Q: What is the duration of an online MBA?</h3>
              <p className="text-gray-700">The duration is typically 2 years, divided into 4 semesters.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Q: Can I pursue this while working?</h3>
              <p className="text-gray-700">Yes, the flexible mode allows you to balance work and study.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-blue-900 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your MBA Journey Today</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Get access to expert faculty, dedicated support, and top career opportunities. Apply now and take the next step in your career.
        </p>
        <Button className="bg-white text-blue-900 hover:bg-gray-200 text-lg px-6 py-3 rounded-full font-semibold">
          Apply Now
        </Button>
      </section>

      <Footer />
    </main>
  );
};

export default OnlineMBA;
