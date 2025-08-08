import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; 

// Placeholder images for the slider
import immersion1 from "@/assets/immersion1.jpg";
import immersion2 from "@/assets/immersion2.jpg";
import immersion3 from "@/assets/immersion3.jpg";
import immersion4 from "@/assets/immersion4.jpg";

const slides = [
  {
    image: immersion1,
    alt: "Students networking at an event",
  },
  {
    image: immersion2,
    alt: "Students learning on campus",
  },
  {
    image: immersion3,
    alt: "Students attending an exclusive session",
  },
  {
    image: immersion4,
    alt: "Students on a campus tour",
  },
];

const CampusImmersions = () => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="bg-muted py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Campus Immersions
        </h2>
        <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Experience real campus life through exclusive immersion programs, networking sessions, and on-site learning opportunities.
        </p>
        
        {/* Slider Container */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full object-cover rounded-xl"
                  style={{ maxHeight: '28rem' }}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
            <button
              onClick={previousSlide}
              className="bg-background/50 backdrop-blur-sm text-foreground p-2 rounded-full hover:bg-background transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-background/50 backdrop-blur-sm text-foreground p-2 rounded-full hover:bg-background transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusImmersions;
