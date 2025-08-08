import React from 'react';

// Import all 7 images with the correct paths
import convocation1 from "@/assets/convocation/1.jpg";
import convocation2 from "@/assets/convocation/2.jpg";
import convocation3 from "@/assets/convocation/3.jpg";
import convocation4 from "@/assets/convocation/4.jpg";
import convocation5 from "@/assets/convocation/5.jpg";
import convocation6 from "@/assets/convocation/6.jpg";
import convocation7 from "@/assets/convocation/7.jpg";

const images = [
  { src: convocation1, alt: "Convocation Ceremony 1" },
  { src: convocation2, alt: "Convocation Ceremony 2" },
  { src: convocation3, alt: "Convocation Ceremony 3" },
  { src: convocation4, alt: "Convocation Ceremony 4" },
  { src: convocation5, alt: "Convocation Ceremony 5" },
  { src: convocation6, alt: "Convocation Ceremony 6" },
  { src: convocation7, alt: "Convocation Ceremony 7" },
];

const ConvocationGallery = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Our Convocation Gallery
        </h2>
        <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Celebrating the achievements of our successful graduates.
        </p>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConvocationGallery;
