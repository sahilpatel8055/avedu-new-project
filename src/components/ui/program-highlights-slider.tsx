import React, { useRef, useState, useEffect } from 'react';
import { BookOpen, GraduationCap, DollarSign, Sprout, Building, Briefcase, Users, Award, BarChart2 } from "lucide-react";
import { Card } from "@/components/ui/card";

// Array of card data with explicit manual line breaks (using \n)
const cards = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    heading: "Degree from top ranked university",
    description: "Graduate with UGC-entitled & AICTE\napproved online degrees which are\nat part with on-campus degree\nprograms.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    heading: "Exclusive Coursera access",
    description: "Free access to 10K+ courses & professional\ncertifications from top\nglobal universities.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    heading: "Scholarships up to 30%",
    description: "Avail scholarship benefits under merit,\ndefense, Divyaang, alumni,\nand other categories.",
  },
  {
    icon: <Sprout className="w-8 h-8 text-primary" />,
    heading: "Easy financing options",
    description: "Improved affordability with flexible\nfinancing and no-cost EMI options.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    heading: "Manipal alumni status",
    description: "Become a part of a 2,00,000+ global\nManipal alumni network.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    heading: "Weekly webinars with industry leaders",
    description: "Stay updated on key industry trends\nthrough our weekly webinars\nby industry experts.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    heading: "100% placement assistance",
    description: "Boost your employability quotient by acquiring\njob-ready skills & preparing for interviews\nto perform well in placement drives.",
  },
  {
    icon: <Building className="w-8 h-8 text-primary" />,
    heading: "Campus immersion",
    description: "Participate in exclusive in-person\nmeetups at campus with your\nbatchmates and faculty.",
  },
];

const ProgramHighlightsSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const cardWidth = scrollContainerRef.current.querySelector('.snap-center')?.clientWidth || 0;
        const newIndex = Math.round(scrollLeft / (cardWidth + 16)); // 16px is the gap
        setActiveIndex(newIndex);
      }
    };

    const element = scrollContainerRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => {
        element.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

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
              WebkitOverflowScrolling: 'touch',
              MsOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {/* Custom CSS to hide scrollbar for Webkit browsers */}
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
                className="min-w-[95%] sm:min-w-[48%] md:min-w-[30%] lg:min-w-[23%] flex-shrink-0 bg-background shadow-lg p-6 border border-gray-200 flex flex-col items-start space-y-4 snap-center rounded-xl"
                style={{
                  height: '18rem',
                }}
              >
                <div className="p-4 bg-primary-light rounded-full text-primary">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold">{card.heading}</h3>
                {/* Using <pre> with whitespace-pre-wrap to honor \n for line breaks */}
                <pre className="text-muted-foreground whitespace-pre-wrap text-sm">{card.description}</pre>
              </Card>
            ))}
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? 'bg-orange-500 w-6' : 'bg-gray-300'
                }`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.querySelector('.snap-center')?.clientWidth || 0;
                    scrollContainerRef.current.scrollTo({
                      left: index * (cardWidth + 16),
                      behavior: 'smooth',
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlightsSlider;
