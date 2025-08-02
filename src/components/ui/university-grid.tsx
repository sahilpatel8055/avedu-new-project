import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, GraduationCap, ExternalLink } from "lucide-react";
import universityPlaceholder from "@/assets/university-placeholder.jpg";

interface University {
  id: string;
  name: string;
  location: string;
  rating: number;
  students: string;
  ugPrograms: number;
  pgPrograms: number;
  fees: string;
  approvals: string[];
  image?: string;
}

import { Link } from "react-router-dom";
import ignouLogo from "@/assets/ignou-logo.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";
import UniversityLogosMarquee from "@/components/ui/university-logos-marquee";

const universities: University[] = [
  {
    id: "ignou",
    name: "IGNOU",
    location: "New Delhi, India",
    rating: 4.8,
    students: "4M+",
    ugPrograms: 120,
    pgPrograms: 150,
    fees: "₹7,200+/year",
    approvals: ["UGC", "AICTE", "NAAC A++"],
    image: ignouLogo,
  },
  {
    id: "manipal", 
    name: "Manipal University Online",
    location: "Jaipur, India",
    rating: 4.6,
    students: "50K+",
    ugPrograms: 8,
    pgPrograms: 12,
    fees: "₹75,000+/year",
    approvals: ["UGC", "AICTE", "NAAC A+"],
    image: manipalLogo,
  },
  {
    id: "uttaranchal",
    name: "Uttaranchal University Online",
    location: "Dehradun, India", 
    rating: 4.5,
    students: "25K+",
    ugPrograms: 15,
    pgPrograms: 18,
    fees: "₹45,000+/year",
    approvals: ["UGC", "AICTE", "NAAC A+"],
    image: uttaranchalLogo,
  },
  {
    id: "vgu",
    name: "Vivekananda Global University",
    location: "Jaipur, India",
    rating: 4.4,
    students: "15K+", 
    ugPrograms: 12,
    pgPrograms: 15,
    fees: "₹40,000+/year",
    approvals: ["UGC", "AICTE", "AIU"],
    image: vguLogo,
  },
  {
    id: "5",
    name: "Sikkim Manipal University",
    location: "Gangtok, SK",
    rating: 4.4,
    students: "45K+", 
    ugPrograms: 20,
    pgPrograms: 18,
    fees: "₹40,000/year",
    approvals: ["UGC", "AICTE", "NAAC A"],
  },
  {
    id: "6",
    name: "Jain University Online",
    location: "Bangalore, KA",
    rating: 4.5,
    students: "35K+",
    ugPrograms: 22,
    pgPrograms: 24,
    fees: "₹50,000/year", 
    approvals: ["UGC", "AICTE", "NAAC A++"],
  }
];

const UniversityCard = ({ university }: { university: University }) => {
  return (
    <Card className="h-full hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group">
      <CardHeader className="pb-2 sm:pb-3">
        <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden mb-2 sm:mb-3">
          <img 
            src={university.image || universityPlaceholder}
            alt={university.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-1 sm:space-y-2">
          <h3 className="font-semibold text-base sm:text-lg leading-tight">{university.name}</h3>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
            {university.location}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-2 sm:pb-3 space-y-3 sm:space-y-4">
        {/* Rating & Students */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-medium">{university.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            {university.students}
          </div>
        </div>

        {/* Programs */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-2 bg-primary-light rounded-lg">
            <div className="font-semibold text-primary">{university.ugPrograms}</div>
            <div className="text-xs text-muted-foreground">UG Courses</div>
          </div>
          <div className="text-center p-2 bg-primary-light rounded-lg">
            <div className="font-semibold text-primary">{university.pgPrograms}</div>
            <div className="text-xs text-muted-foreground">PG Courses</div>
          </div>
        </div>

        {/* Fees */}
        <div className="text-center p-3 bg-success-light rounded-lg">
          <div className="font-semibold text-success">{university.fees}</div>
          <div className="text-xs text-muted-foreground">Starting Fees</div>
        </div>

        {/* Approvals */}
        <div className="flex flex-wrap gap-1">
          {university.approvals.map((approval) => (
            <Badge key={approval} variant="secondary" className="text-xs">
              {approval}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0 space-y-3">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Link to={`/university/${university.id}`}>
            <Button variant="outline" size="sm" className="gap-1 w-full">
              <GraduationCap className="h-4 w-4" />
              View Courses
            </Button>
          </Link>
          <Button size="sm" className="gap-1 w-full">
            <ExternalLink className="h-4 w-4" />
            Apply Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const UniversityGrid = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background" id="universities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-primary-light text-primary mb-4">
            <strong>Top Partner Universities</strong>
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <strong>Explore Over 100+ Universities</strong>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from India's top universities offering UGC-approved online degrees. 
            All universities are carefully selected and verified by our experts.
          </p>
        </div>

        {/* University Logos Marquee */}
        <UniversityLogosMarquee />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {universities.map((university) => (
            <UniversityCard key={university.id} university={university} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2">
            View All Universities
            <ExternalLink className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UniversityGrid;