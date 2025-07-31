import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Calculator, 
  Computer, 
  Heart, 
  Scale, 
  GraduationCap,
  TrendingUp,
  Globe
} from "lucide-react";

interface CourseCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  programs: number;
  popularCourses: string[];
  trending?: boolean;
}

const categories: CourseCategory[] = [
  {
    id: "mba",
    title: "MBA & Management",
    icon: <Briefcase className="h-8 w-8" />,
    programs: 45,
    popularCourses: ["MBA", "PGDM", "Executive MBA"],
    trending: true,
  },
  {
    id: "btech",
    title: "Engineering & Technology", 
    icon: <Computer className="h-8 w-8" />,
    programs: 38,
    popularCourses: ["B.Tech", "M.Tech", "Diploma"],
  },
  {
    id: "bcom",
    title: "Commerce & Finance",
    icon: <Calculator className="h-8 w-8" />,
    programs: 32,
    popularCourses: ["B.Com", "M.Com", "CA Foundation"],
    trending: true,
  },
  {
    id: "healthcare",
    title: "Healthcare & Medicine",
    icon: <Heart className="h-8 w-8" />,
    programs: 25,
    popularCourses: ["B.Sc Nursing", "BPT", "Health Admin"],
  },
  {
    id: "law",
    title: "Law & Legal Studies",
    icon: <Scale className="h-8 w-8" />,
    programs: 18,
    popularCourses: ["LLB", "LLM", "BA LLB"],
  },
  {
    id: "ba",
    title: "Arts & Humanities",
    icon: <GraduationCap className="h-8 w-8" />,
    programs: 42,
    popularCourses: ["BA", "MA", "B.Ed"],
  },
  {
    id: "data-science",
    title: "Data Science & AI",
    icon: <TrendingUp className="h-8 w-8" />,
    programs: 22,
    popularCourses: ["Data Science", "AI/ML", "Analytics"],
    trending: true,
  },
  {
    id: "international",
    title: "International Programs",
    icon: <Globe className="h-8 w-8" />,
    programs: 15,
    popularCourses: ["Global MBA", "Intl. Business", "Foreign Languages"],
  },
];

const CategoryCard = ({ category }: { category: CourseCategory }) => {
  return (
    <Card className="h-full hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group cursor-pointer relative">
      {category.trending && (
        <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground z-10">
          Trending
        </Badge>
      )}
      
      <CardContent className="p-6 text-center space-y-4">
        <div className="bg-primary-light p-4 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
          <div className="text-primary">
            {category.icon}
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{category.title}</h3>
          <p className="text-accent font-medium">{category.programs}+ Programs</p>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Popular Courses:</p>
          <div className="flex flex-wrap gap-1 justify-center">
            {category.popularCourses.map((course) => (
              <Badge key={course} variant="outline" className="text-xs">
                {course}
              </Badge>
            ))}
          </div>
        </div>
        
        <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          Explore Programs
        </Button>
      </CardContent>
    </Card>
  );
};

const CourseCategories = () => {
  return (
    <section className="py-16 bg-gradient-subtle" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-accent-light text-accent mb-4">
            Program Categories
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Find Your Perfect Course
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore diverse academic programs across multiple disciplines. 
            From traditional degrees to emerging fields, find what matches your career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;