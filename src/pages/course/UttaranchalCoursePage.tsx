import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, DollarSign, Clock, BookOpen, Award, Check, ChevronLeft } from "lucide-react";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import uttaranchalCourseData from "@/data/uttaranchalCourseData.json";

const UttaranchalCoursePage = () => {
  const { courseId } = useParams();
  const course = uttaranchalCourseData.courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-xl text-muted-foreground">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-12" id="top">
        <div className="container mx-auto px-4">
          <Link to="/university/uttaranchal" className="flex items-center text-primary hover:underline mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Uttaranchal University
          </Link>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <img src={uttaranchalLogo} alt={`${course.university} Logo`} className="w-16 h-16 rounded-lg object-contain" />
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{course.name}</h1>
                  <p className="text-lg text-muted-foreground">{course.university} Online</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="font-semibold text-primary">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews} Reviews)</span>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {course.level.toUpperCase()} Program
                </Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="flex-1 lg:max-w-md">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="text-center text-primary">Key Highlights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Total Fees:</span>
                    </div>
                    <span className="font-bold text-foreground">{course.fees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Duration:</span>
                    </div>
                    <span className="font-bold text-foreground">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Format:</span>
                    </div>
                    <span className="font-bold text-foreground">Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Specializations:</span>
                    </div>
                    <span className="font-bold text-foreground">{course.specializationsCount}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fees & Eligibility Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Fees Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Full Fees:</span>
                  <span className="font-semibold">{course.feesBreakdown.fullFees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Per Semester:</span>
                  <span className="font-semibold">{course.feesBreakdown.perSemester}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">EMI Option:</span>
                  <span className="font-semibold">{course.feesBreakdown.emi}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                {course.level === 'ug' ? (
                  <p>10+2 or equivalent with a minimum of 45% aggregate marks from a recognized board.</p>
                ) : (
                  <p>Bachelor's degree in any discipline with a minimum of 45% aggregate marks from a recognized university.</p>
                )}
                <p className="mt-4">*A 5% relaxation is given for SC/ST candidates.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum & Specializations Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Curriculum & Specializations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Curriculum */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Curriculum</h3>
              <div className="space-y-6">
                {course.curriculum.map((year, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <CardTitle className="text-xl mb-4 text-foreground">{year.year}</CardTitle>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {year.subjects.map((subject, idx) => (
                        <li key={idx}>{subject}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Specializations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.specializations.map((spec, index) => (
                  <Badge key={index} variant="secondary" className="text-sm px-4 py-2 font-normal justify-center bg-white border border-border/50">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey with {course.name}?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Apply now to take the first step towards a successful career. Our counselors are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Apply for Admission
            </Button>
            <Button variant="outline" size="lg">
              Talk to Counselor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UttaranchalCoursePage;
