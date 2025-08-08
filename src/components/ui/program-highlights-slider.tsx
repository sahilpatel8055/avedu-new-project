import React, { useRef, useState, useEffect } from 'react';
import { BookOpen, GraduationCap, DollarSign, Sprout, Building, Briefcase, Users, Award, BarChart2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const cards = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    heading: "Degree from top university",
    description: "Graduate with UGC-entitled &\nAICTE approved online degrees which\nare at part with on-campus degree\nprograms.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    heading: "Exclusive Coursera access",
    description: "Free access to 10K+ courses &\nprofessional certifications from top\nglobal universities.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    heading: "Scholarships up to 30%",
    description: "Avail scholarship benefits under\nmerit,defense, Divyaang, alumni,\nand other categories.",
  },
  {
    icon: <Sprout className="w-8 h-8 text-primary" />,
    heading: "Easy financing options",
    description: "Improved affordability with\nflexible financing and\nno-cost EMI options.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    heading: "Manipal alumni status",
    description: "Become a part of a 2,00,000+ global\nManipal alumni network.",
  },
  {
    icon: <BarChart2 className="w-8 h-8 text-primary" />,
    heading: "Weekly webinars with\nindustry leaders",
    description: "Stay updated on key industry\ntrends through our weekly webinars\nby industry experts.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    heading: "100% placement assistance",
    description: "Boost your employability quotient\nby acquiring job-ready skills & preparing\nfor interviews to perform\nwell in placement drives.",
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
    let scrollInterval: NodeJS.Timeout | null = null;
    let scrollTimeout: NodeJS.Timeout | null = null;
    const scrollContainer = scrollContainerRef.current;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          const cardWidth = scrollContainer.querySelector('.snap-center')?.clientWidth || 0;
          const isAtEnd = Math.ceil(scrollContainer.scrollLeft) + scrollContainer.clientWidth >= scrollContainer.scrollWidth;
          
          if (isAtEnd) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
          }
        }
      }, 1000);
    };

    const handleScroll = () => {
      if (scrollContainer) {
        if (scrollInterval) clearInterval(scrollInterval);
        
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          startAutoScroll();
        }, 5000);

        const scrollLeft = scrollContainer.scrollLeft;
        const cardWidth = scrollContainer.querySelector('.snap-center')?.clientWidth || 0;
        const newIndex = Math.round(scrollLeft / (cardWidth + 24));
        setActiveIndex(newIndex);
      }
    };
    
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      startAutoScroll();
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section className="bg-[#fff7f7] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Why Students Choose <span className="text-orange-500">Our Program</span>
          </h2>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-scroll snap-x snap-mandatory gap-6 pb-4 cursor-grab"
            style={{
              WebkitOverflowScrolling: 'touch',
              MsOverflowStyle: 'none',
              scrollbarWidth: 'none',
              overscrollBehaviorX: 'contain',
              // The following properties enable click and drag for scrolling on desktop browsers.
              userSelect: 'none',
              touchAction: 'pan-x'
            }}
          >
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
                className="min-w-[90%] sm:min-w-[40%] md:min-w-[25%] lg:min-w-[20%] flex-shrink-0 bg-background shadow-lg p-3.5 border-2 border-gray-200 flex flex-col items-start space-y-4 snap-center rounded-xl"
                style={{
                  height: '15rem',
                }}
              >
                <div className="p-4 bg-primary-light rounded-full text-primary">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold">{card.heading}</h3>
                <pre className="text-muted-foreground whitespace-pre-wrap text-sm">{card.description}</pre>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  index === activeIndex ? 'bg-orange-500 w-6' : 'bg-gray-300 w-2'
                }`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = scrollContainerRef.current.querySelector('.snap-center')?.clientWidth || 0;
                    scrollContainerRef.current.scrollTo({
                      left: index * (cardWidth + 24),
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
