import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavigationHeader from "@/components/ui/navigation-header";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Star, Award, Clock } from "lucide-react";
import manipalCourseData from "@/data/manipalCourseData.json";

// Import all approval icons
import ugcIcon from "@/assets/icons/ugc-icon.png";
import aicteIcon from "@/assets/icons/aicte-icon.png";
import nirfIcon from "@/assets/icons/nirf-icon.png";
import naacIcon from "@/assets/icons/naac-icon.png";
import qsIcon from "@/assets/icons/qs-icon.png";
import nbaIcon from "@/assets/icons/nba-icon.png";
import manipalLogo from "@/assets/manipal-logo.png";

const approvalIcons = {
  UGC: ugcIcon,
  AICTE: aicteIcon,
  NIRF: nirfIcon,
  "NAAC A+": naacIcon,
  "QS Ranking": qsIcon,
  NBA: nbaIcon,
};

const Manipal = () => {
  const [degreePage, setDegreePage] = useState("front");

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      <section
        className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16"
        id="top"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex flex-col items-center">
              <img
                src={manipalLogo}
                alt="Manipal University Logo"
                className="w-24 h-24 mb-4 rounded-full"
              />
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Manipal University
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A globally-recognised institution with a strong emphasis on
                academic excellence and research.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 bg-card p-3 rounded-lg border">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-lg">4.5</span>
              <span className="text-muted-foreground text-sm">(12,345 reviews)</span>
            </div>
            <div className="flex items-center gap-2 bg-card p-3 rounded-lg border">
              <Award className="w-5 h-5 text-primary" />
              <span className="font-semibold text-lg">Ranked 5th</span>
              <span className="text-muted-foreground text-sm">(NIRF 2023)</span>
            </div>
          </div>
          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <Button size="lg">Talk to a Counselor</Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={degreePage} onValueChange={setDegreePage} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="front">UG Courses</TabsTrigger>
              <TabsTrigger value="back">PG Courses</TabsTrigger>
            </TabsList>
            <TabsContent value="front" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {manipalCourseData.courses
                  .filter((course) => course.level === "ug")
                  .map((course) => (
                    <Card key={course.id} className="flex flex-col">
                      <CardHeader className="flex-row items-center gap-4 space-y-0">
                        <img
                          src={manipalLogo}
                          alt={`${course.name} logo`}
                          className="w-16 h-16 rounded-lg object-contain"
                        />
                        <div className="flex-1">
                          <CardTitle>{course.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{course.rating}</span>
                            <span className="text-muted-foreground">
                              ({course.reviews} reviews)
                            </span>
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 space-y-4">
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            <span>{course.fees}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">
                            Approvals:
                          </span>
                          {course.approvals.map((approval) => (
                            <img
                              key={approval.name}
                              src={
                                approvalIcons[
                                  approval.name as keyof typeof approvalIcons
                                ]
                              }
                              alt={approval.name}
                              className="w-8 h-8 object-contain"
                            />
                          ))}
                        </div>
                        <div className="mt-auto">
                          <Link to={`/manipal/courses/${course.id}`}>
                            <Button className="w-full">View Details</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="back" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {manipalCourseData.courses
                  .filter((course) => course.level === "pg")
                  .map((course) => (
                    <Card key={course.id} className="flex flex-col">
                      <CardHeader className="flex-row items-center gap-4 space-y-0">
                        <img
                          src={manipalLogo}
                          alt={`${course.name} logo`}
                          className="w-16 h-16 rounded-lg object-contain"
                        />
                        <div className="flex-1">
                          <CardTitle>{course.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{course.rating}</span>
                            <span className="text-muted-foreground">
                              ({course.reviews} reviews)
                            </span>
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 space-y-4">
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            <span>{course.fees}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">
                            Approvals:
                          </span>
                          {course.approvals.map((approval) => (
                            <img
                              key={approval.name}
                              src={
                                approvalIcons[
                                  approval.name as keyof typeof approvalIcons
                                ]
                              }
                              alt={approval.name}
                              className="w-8 h-8 object-contain"
                            />
                          ))}
                        </div>
                        <div className="mt-auto">
                          <Link to={`/manipal/courses/${course.id}`}>
                            <Button className="w-full">View Details</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manipal;
