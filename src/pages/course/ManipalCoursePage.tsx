import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import manipalCourseData from "../../data/manipalCourseData.json";
import { Check, Star, Award, Clock, Users, GraduationCap, Building2, CheckCircle } from "lucide-react";

// Import all approval icons
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import nirfIcon from "@/assets/icons/nirf-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import qsIcon from "@/assets/icons/qs-icon.png";
import nbaIcon from "@/assets/icons/nba-icon.png";

// Import course approval icons
import upgradIcon from "@/assets/icons/upgrad-logo.png";
import edxIcon from "@/assets/icons/edx-logo.png";
import courseraIcon from "@/assets/icons/coursera-logo.png";

interface Course {
  id: string;
  name: string;
  university: string;
  universityId: string;
  logo: string;
  rating: number;
  reviews: number;
  fees: string;
  duration: string;
  placementAssistance: boolean;
  learningMode: string;
  features: string[];
  approvals: { name: string; description: string; icon: string }[];
  eligibility: {
    qualification: string;
    marks: string;
    entranceExam: string;
    workExperience: string;
  };
  curriculum: {
    year: string;
    subjects: string[];
  }[];
  specializations: string[];
  faculty: {
    name: string;
    designation: string;
    experience: string;
  }[];
  campusPhotos: string[];
}

const approvalIcons = {
  UGC: ugcIcon,
  AICTE: aicteIcon,
  NIRF: nirfIcon,
  "NAAC A+": naacIcon,
  "QS Ranking": qsIcon,
  NBA: nbaIcon,
};

const ManipalCoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const foundCourse = manipalCourseData.courses.find(
      (c) => c.id === courseId
    );
    setCourse(foundCourse || null);
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Course not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <img
                  src={course.logo}
                  alt={`${course.university} Logo`}
                  className="w-20 h-20 rounded-lg object-contain"
                />
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                    {course.name}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {course.university}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">
                    {course.rating}
                  </span>
                  <span className="text-muted-foreground">
                    ({course.reviews} Reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 mb-8 text-sm">
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span>Fees: {course.fees}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-primary" />
                  <span>{course.learningMode}</span>
                </div>
              </div>
            </div>

            <div className="lg:max-w-md w-full">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-primary">
                    Apply Now
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-center text-muted-foreground">
                    Fill out the form below to get a free consultation with an
                    expert counselor.
                  </p>
                  <Button size="lg" className="w-full">
                    Talk to a Counselor
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 lg:grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="specializations">Specializations</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="placements">Placements</TabsTrigger>
            </TabsList>

            {/* Overview Tab Content */}
            <TabsContent value="overview" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Course Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Approvals & Accreditations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {course.approvals.map((approval, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 bg-muted p-3 rounded-lg"
                        >
                          {approval.icon && (
                            <img
                              src={approvalIcons[approval.name as keyof typeof approvalIcons] || approval.icon}
                              alt={`${approval.name} Icon`}
                              className="w-10 h-10 object-contain"
                            />
                          )}
                          <div>
                            <p className="font-semibold">{approval.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {approval.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Eligibility Tab Content */}
            <TabsContent value="eligibility" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Eligibility Criteria</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Qualification</p>
                      <p className="text-sm text-muted-foreground">
                        {course.eligibility.qualification}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Minimum Marks</p>
                      <p className="text-sm text-muted-foreground">
                        {course.eligibility.marks}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <Check className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Entrance Exam</p>
                      <p className="text-sm text-muted-foreground">
                        {course.eligibility.entranceExam}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Work Experience</p>
                      <p className="text-sm text-muted-foreground">
                        {course.eligibility.workExperience}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Curriculum Tab Content */}
            <TabsContent value="curriculum" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Course Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {course.curriculum.map((year, yearIndex) => (
                      <div key={yearIndex}>
                        <h3 className="font-semibold text-lg mb-2">
                          {year.year}
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          {year.subjects.map((subject, subjectIndex) => (
                            <li key={subjectIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                              <span>{subject}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Specializations Tab Content */}
            <TabsContent value="specializations" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Specializations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.specializations.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-muted rounded-lg"
                      >
                        <Award className="w-6 h-6 text-primary" />
                        <span className="font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Faculty Tab Content */}
            <TabsContent value="faculty" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Meet the Faculty</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {course.faculty.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-muted rounded-lg"
                      >
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold">{member.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {member.designation}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {member.experience}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Placements Tab Content */}
            <TabsContent value="placements" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Placements & Career</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                    <Building2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold">
                        Placement Assistance:{" "}
                        {course.placementAssistance ? "Yes" : "No"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Career services, resume building, and interview
                        preparation.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <img
                      src={upgradIcon}
                      alt="UpGrad"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src={edxIcon}
                      alt="EdX"
                      className="w-full h-auto object-contain"
                    />
                    <img
                      src={courseraIcon}
                      alt="Coursera"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManipalCoursePage;
