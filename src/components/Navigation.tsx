import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

interface NavigationProps {
  onCtaClick: () => void;
}

export const Navigation = ({ onCtaClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo className="h-10" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#mission" className="text-foreground hover:text-healing-green transition-colors">
              Our Mission
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-healing-green transition-colors">
              How It Works
            </a>
            <a href="#services" className="text-foreground hover:text-healing-green transition-colors">
              Services
            </a>
            <Button onClick={onCtaClick} className="bg-healing-green hover:bg-deep-green">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a 
              href="#mission" 
              className="block text-foreground hover:text-healing-green transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Our Mission
            </a>
            <a 
              href="#how-it-works" 
              className="block text-foreground hover:text-healing-green transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#services" 
              className="block text-foreground hover:text-healing-green transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <Button 
              onClick={() => {
                onCtaClick();
                setIsOpen(false);
              }} 
              className="w-full bg-healing-green hover:bg-deep-green"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
