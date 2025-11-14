import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-family.jpg";

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero = ({ onCtaClick }: HeroProps) => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-trust-blue/95 via-trust-blue/90 to-healing-green/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Open Your Heart, Change a Life
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-4 leading-relaxed">
            Become a Host Home Family in Utah
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
            Provide care, purpose, and stability for adults with disabilities — and receive professional training, support, and meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              variant="default"
              onClick={onCtaClick}
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-trust-blue hover:bg-trust-blue/90"
            >
              Learn How to Become a Host Home Provider
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
