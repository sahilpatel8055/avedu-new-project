import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Scale, 
  BookOpen,
  TrendingUp,
  Globe
} from "lucide-react";
import mbaIcon from "@/assets/icons/mba-icon.png";
import techIcon from "@/assets/icons/tech-icon.png";
import bbaIcon from "@/assets/icons/bba-icon.png";
import financeIcon from "@/assets/icons/finance-icon.png";
import healthcareIcon from "@/assets/icons/healthcare-icon.png";

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
    icon: <img src={mbaIcon} alt="MBA" className="h-8 w-8" />,
    programs: 45,
    popularCourses: ["MBA", "PGDM", "Executive MBA"],
    trending: true,
  },
  {
    id: "btech",
    title: "Engineering & Technology", 
    icon: <img src={techIcon} alt="Technology" className="h-8 w-8" />,
    programs: 38,
    popularCourses: ["B.Tech", "M.Tech", "BCA", "MCA"],
    trending: true,
  },
  {
    id: "bba",
    title: "BBA",
    icon: <img src={bbaIcon} alt="BBA" className="h-8 w-8" />,
    programs: 22,
    popularCourses: ["BBA", "BBA Hons"],
    trending: false,
  },
  {
    id: "bcom",
    title: "Commerce & Finance",
    icon: <img src={financeIcon} alt="Finance" className="h-8 w-8" />,
    programs: 32,
    popularCourses: ["B.Com", "M.Com", "BCOM", "MCOM"],
    trending: true,
  },
  {
    id: "healthcare",
    title: "Healthcare & Medicine",
    icon: <img src={healthcareIcon} alt="Healthcare" className="h-8 w-8" />,
    programs: 25,
    popularCourses: ["B.Sc Nursing", "BPT", "Health Admin"],
    trending: false,
  },
  {
    id: "law",
    title: "Law & Legal Studies",
    icon: <Scale className="h-8 w-8" />,
    programs: 18,
    popularCourses: ["LLB", "LLM", "BA LLB"],
    trending: false,
  },
  {
    id: "ba",
    title: "Arts & Humanities",
    icon: <Palette className="h-8 w-8" />,
    programs: 42,
    popularCourses: ["BA", "MA", "B.Ed"],
    trending: false,
  },
  {
    id: "data-science",
    title: "Data Science & AI",
    icon: <TrendingUp className="h-8 w-8" />,
    programs: 22,
    popularCourses: ["Data Science", "AI/ML", "Analytics"],
    trending: true,
  },
];

const CategoryCard = ({ category }: { category: CourseCategory }) => {
  return (
    <Card className="h-full hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group cursor-pointer relative">
      {category.trending && (
        <Badge className="absolute -top-2 -right-2 bg-blue-600 text-white z-10">
          Trending
        </Badge>
      )}
      
      <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
        <div className="bg-primary-light p-4 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
          <div className="text-blue-600">
            {category.icon}
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-bold text-lg">{category.title}</h3>
          <p className="text-[#0052CC] font-bold">{category.programs}+ Programs</p>
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
        
        <Button 
          variant="ghost" 
          className="w-full group-hover:bg-[#0052CC] group-hover:text-white transition-colors"
          onClick={() => {
            const routeMap: { [key: string]: string } = {
              'mba': '/courses/mba',
              'btech': '/courses/engineering', 
              'bba': '/courses/bba',
              'bcom': '/courses/commerce',
              'ba': '/courses/arts'
            };
            const route = routeMap[category.id];
            if (route) {
              window.location.href = route;
            }
          }}
        >
          Explore Programs
        </Button>
      </CardContent>
    </Card>
  );
};

const CourseCategories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CourseCategories;