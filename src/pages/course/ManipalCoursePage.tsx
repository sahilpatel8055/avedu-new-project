import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import manipalCourseData from "../../data/manipalCourseData.json"; // Corrected path
import { Check, Star, Award, DollarSign, Clock, Download } from "lucide-react";
import { Icon } from '@iconify/react';

// Import all approval icons
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import nirfIcon from "@/assets/icons/nirf-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import qsIcon from "@/assets/icons/qs-icon.png";
import nbaIcon from "@/assets/icons/nba-icon.png";

// A mapping for the approval icons
const approvalIcons: { [key: string]: string } = {
  "UGC-DEB": ugcIcon,
  "AICTE": aicteIcon,
  "NAAC A+": naacIcon,
  "NIRF": nirfIcon,
  "QS Ranking": qsIcon, // Added QS icon
  "NBA": nbaIcon // Added NBA icon
};

const ManipalCoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeYear, setActiveYear] = useState("year1");

  const course = manipalCourseData[courseId as keyof typeof manipalCourseData];

  useEffect(() => {
    if (!course) {
      navigate('/not-found'); // Or to a list of courses if you have one
    }
  }, [course, navigate]);

  if (!course) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationHeader />
      <main>
        {/* Course Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.heading}</h1>
              <p className="text-lg text-muted-foreground mb-8">{course.description}</p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">Apply Now</Button>
                <Button size="lg" variant="outline">Download Brochure</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Approvals Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Approvals & Accreditations</h2>
            <div className="flex justify-center flex-wrap gap-6 max-w-4xl mx-auto">
              {course.approvals.map((approval, index) => (
                <div key={index} className="flex flex-col items-center p-4">
                  <img src={approvalIcons[approval]} alt={approval} className="w-24 h-24 object-contain mb-2" />
                  <span className="text-sm font-semibold text-center">{approval}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Specializations Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {course.specializations.map((spec, index) => (
                <Card key={index} className="text-center p-6 flex flex-col items-center">
                  {/* Assuming spec.icon is a string like "fa6-solid:chart-line" */}
                  <Icon icon={spec.icon} className="text-4xl text-primary mb-4" />
                  <h3 className="text-lg font-semibold">{spec.name}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Curriculum Section */}
        <section className="py-16 bg-background dark:bg-zinc-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Online {course.name} Course Curriculum</h2>
            <p className="text-center text-muted-foreground mb-8">
              Explore list of all subjects (semester wise) covered in our {course.name} program
            </p>
            <div className="flex justify-center items-center gap-6 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>24 months</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span>4 Sem</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span>90 Credits</span>
              </div>
            </div>
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2 p-1 rounded-full bg-gray-200 dark:bg-zinc-800">
                {Object.keys(course.curriculum).map((year) => (
                  <Button
                    key={year}
                    variant={activeYear === year ? "default" : "ghost"}
                    className="rounded-full"
                    onClick={() => setActiveYear(year)}
                  >
                    {year.toUpperCase()}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {course.curriculum[activeYear as keyof typeof course.curriculum] &&
                Object.entries(course.curriculum[activeYear as keyof typeof course.curriculum]).map(([sem, subjects]) => (
                  <Card key={sem} className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md">
                    <CardTitle className="mb-4 text-xl font-semibold text-primary">{sem.charAt(0).toUpperCase() + sem.slice(1).replace('sem', 'Semester ')}</CardTitle>
                    <ul className="space-y-2">
                      {subjects.map((subject, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mr-2" />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Fees Structure Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Online {course.name} Course Fee</h2>
            <div className="max-w-4xl mx-auto p-8 rounded-xl bg-purple-100 dark:bg-purple-950/50 flex flex-col md:flex-row items-center justify-around gap-6 text-center">
              <div className="flex-1">
                <h3 className="text-muted-foreground mb-2">Full course fee (Four semesters)</h3>
                <p className="text-5xl font-bold text-purple-800 dark:text-purple-300">{course.fees.fullFees}</p>
                <p className="text-sm text-muted-foreground mt-2">Inclusive of all taxes</p>
              </div>
              <div className="md:w-px md:h-24 w-24 h-px bg-purple-300 dark:bg-purple-700"></div>
              <div className="flex-1">
                <h3 className="text-muted-foreground mb-2">Each semester fee</h3>
                <p className="text-3xl font-bold text-purple-800 dark:text-purple-300">{course.fees.perSemester}</p>
                <p className="text-sm text-muted-foreground mt-2">Inclusive of all taxes</p>
              </div>
              <div className="md:w-px md:h-24 w-24 h-px bg-purple-300 dark:bg-purple-700"></div>
              <div className="flex-1">
                <h3 className="text-muted-foreground mb-2">EMI starting at</h3>
                <p className="text-3xl font-bold text-purple-800 dark:text-purple-300">{course.fees.emiOptions}<span className="text-xl font-normal">/ Month</span></p>
                <p className="text-sm text-muted-foreground mt-2">Terms & conditions apply</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reputed Hiring Partners Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Reputed Hiring Partners</h2>
            <div className="max-w-4xl mx-auto">
              <img src={course.hiringPartnersImage} alt="Hiring Partners" className="w-full h-auto object-contain" />
            </div>
          </div>
        </section>

        {/* Program Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
            <div className="max-w-4xl mx-auto">
              <img src={course.programBenefitsImage} alt="Program Benefits" className="w-full h-auto object-contain" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ManipalCoursePage;
