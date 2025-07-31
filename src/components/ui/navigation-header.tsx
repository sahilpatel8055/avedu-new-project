import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary rounded-lg p-2 text-white font-bold text-xl">
              AVEDU
            </div>
            <span className="text-sm text-muted-foreground hidden sm:block">
              Your Education Partner
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">
              Explore Programs
            </a>
            <a href="#universities" className="text-foreground hover:text-primary transition-colors">
              Top Universities
            </a>
            <a href="#counselling" className="text-foreground hover:text-primary transition-colors">
              Counselling
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Search className="h-4 w-4" />
              Search Courses
            </Button>
            <Button className="gap-2 bg-gradient-primary hover:opacity-90">
              <Phone className="h-4 w-4" />
              Get Counselling
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
        )}>
          <nav className="flex flex-col space-y-4 pt-4">
            <a href="#programs" className="text-foreground hover:text-primary transition-colors">
              Explore Programs
            </a>
            <a href="#universities" className="text-foreground hover:text-primary transition-colors">
              Top Universities
            </a>
            <a href="#counselling" className="text-foreground hover:text-primary transition-colors">
              Counselling
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm" className="gap-2 justify-start">
                <Search className="h-4 w-4" />
                Search Courses
              </Button>
              <Button className="gap-2 bg-gradient-primary hover:opacity-90 justify-start">
                <Phone className="h-4 w-4" />
                Get Counselling
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavigationHeader;