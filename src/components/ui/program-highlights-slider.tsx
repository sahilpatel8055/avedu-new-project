import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, GraduationCap, DollarSign, Sprout, Building, Trophy, Briefcase, Users, Award, BarChart2 } from "lucide-react";
import { Card } from "@/components/ui/card";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.snap-center')?.clientWidth || 0;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? cardWidth + 16 : -(cardWidth + 16),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#fff7f7] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Students Choose <span className="text-orange-500">Our Program</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Cards wrapper - Manual scrollable */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll snap-x snap-mandatory gap-4 pb-4 cursor-grab"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              MsOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {/* Hiding scrollbar for Webkit browsers */}
            <style>
              {`
              .flex::-webkit-scrollbar {
                display: none;
              }
              `}
            </style>
            
            {cards.map((card, index) => (
              <Card
                key={index}
                className="min-w-[70%] md:min-w-[30%] lg:min-w-[20%] flex-shrink-0 bg-background shadow-lg p-6 flex flex-col items-start space-y-4 snap-center rounded-xl"
                style={{
                  height: '20rem',
                }}
              >
                <div className="p-4 bg-primary-light rounded-full text-primary">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold">{card.heading}</h3>
                <p className="text-muted-foreground line-clamp-2">{card.description}</p>
              </Card>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 flex justify-between w-full px-4 items-center">
            <button
              onClick={() => scrollBy('left')}
              className="bg-background/50 backdrop-blur-sm text-foreground p-2 rounded-full shadow-md hover:bg-background transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scrollBy('right')}
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
