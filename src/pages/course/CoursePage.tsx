// src/pages/course/CoursePage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import courseData from '../../data/courseData.json';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { School, GraduationCap, Clock, DollarSign, List, Lightbulb, BookOpen, User2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const CoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? courseData[courseId] : null;

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Course not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-6xl text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">{course.name}</h1>
          <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up delay-200">
            {course.headline}
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 transition-transform transform hover:scale-105 animate-fade-in-up delay-400"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">{course.name}</h2>
            <p className="text-muted-foreground text-center mb-8">{course.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <GraduationCap className="w-8 h-8 text-primary mb-2" />
                <span className="font-semibold text-sm text-muted-foreground">Eligibility</span>
                <p className="text-lg font-bold">{course.eligibility}</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-primary mb-2" />
                <span className="font-semibold text-sm text-muted-foreground">Duration</span>
                <p className="text-lg font-bold">{course.duration}</p>
              </div>
              <div className="flex flex-col items-center">
                <DollarSign className="w-8 h-8 text-primary mb-2" />
                <span className="font-semibold text-sm text-muted-foreground">Fees</span>
                <p className="text-lg font-bold">{course.fees}</p>
              </div>
              <div className="flex flex-col items-center">
                <School className="w-8 h-8 text-primary mb-2" />
                <span className="font-semibold text-sm text-muted-foreground">University</span>
                <p className="text-lg font-bold">IGNOU</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Key Features Section */}
      {course.keyFeatures && course.keyFeatures.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {course.keyFeatures.map((feature, index) => (
                <Card key={index} className="p-6 flex flex-col items-center text-center">
                  <Lightbulb className="w-8 h-8 text-primary mb-4" />
                  <p className="font-semibold text-lg">{feature}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Curriculum Section */}
      {course.curriculum && course.curriculum.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {course.curriculum.map((item, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">{item.semester || item.year}</h3>
                  <ul className="space-y-3">
                    {item.subjects.map((subject, subjectIndex) => (
                      <li key={subjectIndex} className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                        <p className="font-semibold text-muted-foreground">{subject}</p>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Course Details Section */}
      {course.courseDetails && course.courseDetails.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Program Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.courseDetails.map((detail, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
                  <p className="text-muted-foreground">{detail.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Admission Process Section */}
      {course.admissionProcess && course.admissionProcess.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
            <Card className="p-8 shadow-lg">
              <ol className="space-y-4">
                {course.admissionProcess.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-lg font-bold text-primary">{index + 1}.</span>
                    <p className="text-lg text-muted-foreground flex-1">{step}</p>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </section>
      )}

      {/* Faculty Section */}
      {course.faculty && course.faculty.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Faculty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {course.faculty.map((member, index) => (
                <Card key={index} className="p-6 flex flex-col items-center text-center">
                  <User2 className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary mb-2">{member.title}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CoursePage;
