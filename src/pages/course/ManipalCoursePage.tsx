import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import manipalCourseData from "@/data/manipalCourseData.json";
import manipalLogo from "@/assets/manipal-logo.png";
import {
  BookOpen,
  DollarSign,
  Award,
  Clock,
  BriefcaseBusiness,
  Star,
  Download,
  Users,
  Banknote,
  LineChart,
  Cloud,
  Shield,
  Bot,
  Code,
  Laptop,
  MessageSquare,
  Globe,
  Headphones
} from "lucide-react";

// Updated specializationIcons mapping to use Lucide-React icons
const specializationIcons = {
  "Digital Marketing": LineChart,
  "Marketing": LineChart,
  "Analytics and Data Science": LineChart,
  "IT & FinTech": Laptop,
  "Finance": Banknote,
  "Human Resource Management": Users,
  "BFSI": Banknote,
  "Operations Management": BriefcaseBusiness,
  "Data Science": LineChart,
  "Cloud Computing": Cloud,
  "Cyber Security": Shield,
  "Artificial Intelligence": Bot,
  "Full Stack Development": Code,
  "Financial Accounting": Banknote,
  "Business Finance": Banknote,
  "Journalism": MessageSquare,
  "Public Relations": Headphones,
  "Accounts & Finance": Banknote
};

const ManipalCoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = manipalCourseData.courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Course not found.</h1>
      </div>
    );
  }

  const CourseSpecializationIcon = ({ spec }: { spec: string }) => {
    const IconComponent = specializationIcons[spec as keyof typeof specializationIcons];
    if (!IconComponent) return <Award className="w-6 h-6 text-primary" />; // Fallback icon
    return <IconComponent className="w-6 h-6 text-primary" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <img
              src={manipalLogo}
              alt={`${course.university} Logo`}
              className="w-32 h-32 rounded-lg shadow-lg object-contain"
            />
            <div>
              <h1 className="text-4xl font-bold text-foreground">
                {course.name}
              </h1>
              <p className="text-xl text-muted-foreground mt-2">
                {course.university}
              </p>
              <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-primary" />
                  <span>{course.level.toUpperCase()} Program</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span>{course.rating} ({course.reviews} Reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <Button size="lg">Apply Now</Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {/* Fees Card Section */}
        <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
          <DollarSign className="w-8 h-8 text-primary" /> Online {course.name} Fee
        </h2>
        <Card className="bg-card p-6 shadow-md">
          <Tabs defaultValue="indian">
            <TabsList className="mb-4">
              <TabsTrigger value="indian">Indian Nationals</TabsTrigger>
              <TabsTrigger value="nri">Non-Resident Indians</TabsTrigger>
              <TabsTrigger value="foreign">Foreign Nationals</TabsTrigger>
            </TabsList>
            <TabsContent value="indian">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex flex-col justify-center">
                  <p className="text-xl font-semibold text-muted-foreground">
                    Full Course Fee ({course.level === 'ug' ? 'Six' : 'Four'} semesters)
                  </p>
                  <p className="text-4xl font-bold text-primary mt-2">
                    {course.feesBreakdown.fullFees}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Inclusive of all taxes
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xl font-semibold text-muted-foreground">
                    Each Semester Fee
                  </p>
                  <p className="text-4xl font-bold text-primary mt-2">
                    {course.feesBreakdown.perSemester}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Inclusive of all taxes
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xl font-semibold text-muted-foreground">
                    EMI Starting at
                  </p>
                  <p className="text-4xl font-bold text-primary mt-2">
                    {course.feesBreakdown.emi}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Terms & conditions apply
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Curriculum Section */}
        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-primary" /> Online {course.name} Curriculum
        </h2>
        <Card className="bg-card p-6 shadow-md">
          <p className="text-muted-foreground mb-6">
            Explore a list of all subjects (semester wise) covered in our {course.level.toUpperCase()} program.
          </p>
          <Tabs defaultValue={course.curriculum[0]?.year}>
            <TabsList className="mb-4">
              {course.curriculum.map((year, index) => (
                <TabsTrigger key={index} value={year.year}>
                  {year.year}
                </TabsTrigger>
              ))}
            </TabsList>
            {course.curriculum.map((year, index) => (
              <TabsContent key={index} value={year.year}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {year.subjects.map((subject, sIndex) => (
                    <Card key={sIndex} className="bg-secondary p-4">
                      <p>{subject}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>

        {/* Specializations Section */}
        <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-2">
          <BriefcaseBusiness className="w-8 h-8 text-primary" /> {course.name} Specializations Offered
        </h2>
        <Card className="bg-card p-6 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {course.specializations.map((spec, index) => (
              <Card key={index} className="flex items-center gap-4 p-4 hover:bg-secondary transition-colors">
                <CourseSpecializationIcon spec={spec} />
                <span className="font-semibold">{spec}</span>
              </Card>
            ))}
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ManipalCoursePage;
