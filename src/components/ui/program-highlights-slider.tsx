import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, GraduationCap, DollarSign, Sprout, Building, Trophy, Briefcase, Users, Star, Award, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

// Array of card data
const cards = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    heading: "Degree from top ranked university",
    description: "Graduate with UGC-entitled & AICTE approved online degrees which are at par with on-campus degree programs.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    heading: "Exclusive Coursera access",
    description: "Free access to 10K+ courses & professional certifications from top global universities.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    heading: "Scholarships up to 30%",
    description: "Avail scholarship benefits under merit, defense, Divyaang, alumni, and other categories.",
  },
  {
    icon: <Sprout className="w-8 h-8 text-primary" />,
    heading: "Easy financing options",
    description: "Improved affordability with flexible financing and no-cost EMI options.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    heading: "Manipal alumni status",
    description: "Become a part of a 2,00,000+ global Manipal alumni network.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    heading: "Weekly webinars with industry leaders",
    description: "Stay updated on key industry trends through our weekly webinars by industry experts.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    heading: "100% placement assistance",
    description: "Boost your employability quotient by acquiring job-ready skills & preparing for interviews to perform well in placement drives.",
  },
  {
    icon: <Building className="w-8 h-8 text-primary" />,
    heading: "Campus immersion",
    description: "Participate in exclusive in-person meetups at campus with your batchmates and faculty.",
  },
];

const ProgramHighlightsSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextCard = () => {
    setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  return (
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Students Choose Our Program
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="flex overflow-hidden relative">
            {/* Cards wrapper */}
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(calc(-${current * 100}% / 3 - ${current * 1}rem))`,
              }}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  className="min-w-[calc(100%/3-1rem)] flex-shrink-0 bg-background shadow-lg p-6 flex flex-col items-start space-y-4"
                  style={{
                    transform: `translateX(-${current * (100 / 3 + 1)}%)`,
                    transition: 'transform 0.5s ease-in-out'
                  }}
                >
                  <div className="p-4 bg-primary-light rounded-full text-primary">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{card.heading}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 flex justify-between w-full px-4 items-center">
            <button
              onClick={prevCard}
              className="bg-background/50 backdrop-blur-sm text-foreground p-2 rounded-full shadow-md hover:bg-background transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextCard}
              className="bg-background/50 backdrop-blur-sm text-foreground p-2 rounded-full shadow-md hover:bg-background transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlightsSlider;
