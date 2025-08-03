// src/pages/course/CoursePage.tsx

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import { courses } from "@/data/courseData.json"; // Import data directly from the JSON file
import { BookOpen, DollarSign, Clock, Check, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CoursePage = () => {
  const { courseName } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Look up the course data from the imported JSON file
    const courseData = courses[courseName];
    if (courseData) {
      setCourse(courseData);
    }
  }, [courseName]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xl text-foreground">Course not found!</p>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <NavigationHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-background py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.name}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{course.headline}</p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Details and Description */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-4">About the Program</h2>
                <p className="text-lg text-muted-foreground mb-8">{course.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <Card className="p-4 text-center">
                    <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">Duration</p>
                    <p className="text-lg font-bold">{course.duration}</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">Fees</p>
                    <p className="text-lg font-bold">{course.fees}</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <Check className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold text-sm">Eligibility</p>
                    <p className="text-lg font-bold">{course.eligibility}</p>
                  </Card>
                </div>

                <div className="bg-muted p-8 rounded-lg shadow-inner">
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                    {course.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Right Column - Admission & CTA */}
              <div className="lg:col-span-1">
                <Card className="p-6 bg-card/50 shadow-lg">
                  <CardContent className="space-y-4">
                    <h3 className="text-xl font-bold text-center mb-4">Admission Process</h3>
                    <ul className="space-y-3">
                      {course.admissionProcess.map((step, index) => (
                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                          <span className="bg-primary text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold flex-shrink-0">{index + 1}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6">Apply Now</Button>
                    <Button variant="outline" className="w-full">Download Brochure</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.curriculum.map((topic, index) => (
                <Card key={index} className="p-4 flex items-center gap-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <p className="font-semibold">{topic}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Meet the Faculty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.faculty.map((member, index) => (
                <div key={index} className="flex items-start gap-6 p-6 bg-muted rounded-lg">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-10 h-10 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.title}</p>
                    <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursePage;
