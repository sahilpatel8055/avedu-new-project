import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, GraduationCap, Award, ArrowRight } from "lucide-react";
import Slideshow from "@/components/ui/slideshow";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-subtle py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent-light text-accent font-semibold animate-fade-in-up">
                #1 Educational Counselling Platform
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-slide-in-left">
                Find Your Perfect
                <span className="bg-gradient-hero bg-clip-text text-transparent block">
                  Online Degree
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                Get expert counselling and choose from 100+ universities across India. 
                Find the best UG & PG programs that fit your budget and career goals.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-accent text-2xl font-bold">
                  <Users className="h-6 w-6" />
                  50K+
                </div>
                <p className="text-sm text-muted-foreground">Students Guided</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-success text-2xl font-bold">
                  <GraduationCap className="h-6 w-6" />
                  100+
                </div>
                <p className="text-sm text-muted-foreground">Universities</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-accent text-2xl font-bold">
                  <Star className="h-6 w-6 fill-current" />
                  4.8/5
                </div>
                <p className="text-sm text-muted-foreground">Student Rating</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 gap-2 shadow-primary">
                Get Free Counselling
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Award className="h-5 w-5" />
                Explore Universities
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              ✅ 100% Free Counselling • ✅ Expert Career Guidance • ✅ Budget-Friendly Options
            </div>
          </div>

          {/* Hero Slideshow */}
          <div className="relative">
            <Slideshow />
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -left-6 p-4 shadow-card bg-card/95 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="bg-success-light p-2 rounded-full">
                  <Award className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-sm">UGC Approved</p>
                  <p className="text-xs text-muted-foreground">All Universities</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;