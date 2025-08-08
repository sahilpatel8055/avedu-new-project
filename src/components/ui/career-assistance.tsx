import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import React from 'react';

const CareerAssistance = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-foreground mb-10">
          Career Assistance
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side with image */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/src/assets/placement.jpg" 
              alt="A working professional" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Right side with cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6">
              <CardContent className="flex items-center gap-4">
                <Star className="text-primary h-6 w-6" />
                <h3 className="text-xl font-semibold">AI-Powered Resume Builder</h3>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="flex items-center gap-4">
                <Star className="text-primary h-6 w-6" />
                <h3 className="text-xl font-semibold">Mock Video Interview</h3>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="flex items-center gap-4">
                <Star className="text-primary h-6 w-6" />
                <h3 className="text-xl font-semibold">Personality Test</h3>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="flex items-center gap-4">
                <Star className="text-primary h-6 w-6" />
                <h3 className="text-xl font-semibold">Aptitude Test training</h3>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="flex items-center gap-4">
                <Star className="text-primary h-6 w-6" />
                <h3 className="text-xl font-semibold">Skills enhancement</h3>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="flex items-center gap-4">
                <Star className="text-primary h-6 w-6" />
                <h3 className="text-xl font-semibold">JOB OPENINGS</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAssistance;
