import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, GraduationCap, ExternalLink } from "lucide-react";
import universityPlaceholder from "@/assets/university-placeholder.jpg";
import { Link } from "react-router-dom";
import ignouLogo from "@/assets/ignou-logo.png";
import manipalLogo from "@/assets/manipal-logo.png";
import uttaranchalLogo from "@/assets/uttaranchal-logo.png";
import vguLogo from "@/assets/vgu-logo.png";

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
  },
];

const UniversityCard = ({ university, onOpenCounseling }: { university: University; onOpenCounseling?: () => void }) => {
  return (
    <Card className="h-full rounded-xl bg-[#f5f3ff] border border-gray-200 shadow-[inset_0_1px_3px_rgba(255,255,255,0.6),_0_2px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group">
      <CardHeader className="pb-1 sm:pb-2">
        <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden mb-1 sm:mb-2">
          <img 
            src={university.image || universityPlaceholder}
            alt={university.name}
            className="w-full h-full object-contain p-1 sm:p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-sm sm:text-base lg:text-lg leading-tight text-gray-900">{university.name}</h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {university.location}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-1 sm:pb-2 space-y-2 sm:space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-primary text-primary" />
            <span className="font-medium text-xs sm:text-sm">{university.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs">{university.students}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="text-center p-1.5 sm:p-2 bg-indigo-100 rounded-lg">
            <div className="font-semibold text-indigo-700 text-xs sm:text-sm">{university.ugPrograms}</div>
            <div className="text-xs text-muted-foreground">UG Courses</div>
          </div>
          <div className="text-center p-1.5 sm:p-2 bg-indigo-100 rounded-lg">
            <div className="font-semibold text-indigo-700 text-xs sm:text-sm">{university.pgPrograms}</div>
            <div className="text-xs text-muted-foreground">PG Courses</div>
          </div>
        </div>

        <div className="text-center p-2 sm:p-3 bg-green-100 rounded-lg">
          <div className="font-semibold text-green-700 text-xs sm:text-sm">{university.fees}</div>
          <div className="text-xs text-muted-foreground">Starting Fees</div>
        </div>

        <div className="flex flex-wrap gap-1">
          {university.approvals.map((approval) => (
            <Badge key={approval} variant="secondary" className="text-xs">
              {approval}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 w-full">
          <Link to={`/university/${university.id}`}>
            <Button variant="outline" size="sm" className="gap-1 w-full text-xs py-1.5 sm:py-2">
              <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4" />
              View Courses
            </Button>
          </Link>
          <Button size="sm" className="gap-1 w-full text-xs py-1.5 sm:py-2" onClick={onOpenCounseling}>
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
            Apply Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

interface UniversityGridProps {
  onOpenCounseling?: () => void;
}

const UniversityGrid: React.FC<UniversityGridProps> = ({ onOpenCounseling }) => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white border border-gray-200/50 rounded-lg mx-4 my-8" id="universities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-primary-light text-primary mb-4">
            <strong>Top Universities</strong>
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            <strong>Explore Over 100+ Universities in India</strong>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from India's top universities offering UGC-approved online degrees. 
            All universities are carefully selected and verified by our experts.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {universities.map((university) => (
            <UniversityCard key={university.id} university={university} onOpenCounseling={onOpenCounseling} />
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
