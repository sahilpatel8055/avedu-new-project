import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Import all 7 images with the correct paths
import convocation1 from "@/assets/convocation/1.jpg";
import convocation2 from "@/assets/convocation/2.jpg";
import convocation3 from "@/assets/convocation/3.jpg";
import convocation4 from "@/assets/convocation/4.jpg";
import convocation5 from "@/assets/convocation/5.jpg";
import convocation6 from "@/assets/convocation/6.jpg";
import convocation7 from "@/assets/convocation/7.jpg";

const slides = [
  { src: convocation1, alt: "Convocation Ceremony 1" },
  { src: convocation2, alt: "Convocation Ceremony 2" },
  { src: convocation3, alt: "Convocation Ceremony 3" },
  { src: convocation4, alt: "Convocation Ceremony 4" },
  { src: convocation5, alt: "Convocation Ceremony 5" },
  { src: convocation6, alt: "Convocation Ceremony 6" },
  { src: convocation7, alt: "Convocation Ceremony 7" },
];

const ConvocationSlider = () => {
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
          Our Convocation Gallery
        </h2>
        <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Celebrating the achievements of our successful graduates.
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
                  src={slide.src}
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

export default ConvocationSlider;
