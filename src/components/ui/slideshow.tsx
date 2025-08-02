import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import slideshowGraduation from '@/assets/slideshow-graduation.jpg';
import slideshowCourses from '@/assets/slideshow-courses.jpg';
import slideshowUniversities from '@/assets/slideshow-universities.jpg';

const images = [
  { src: slideshowGraduation, alt: 'Happy Graduation Celebration' },
  { src: slideshowCourses, alt: 'Top 10 Online Degree Courses' },
  { src: slideshowUniversities, alt: 'Top Partner Universities' }
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Card className="overflow-hidden shadow-hover relative">
        <div className="relative w-full h-48 md:h-64">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentIndex 
                ? "bg-white" 
                : "bg-white/50"
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        </div>
      </Card>
    </div>
  );
};

export default Slideshow;