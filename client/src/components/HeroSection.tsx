import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Cinema_production_hero_image_0c96d45e.png";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 tracking-wider leading-tight" data-testid="text-hero-title">
          RED ARK CINEMA
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto font-light px-2" data-testid="text-hero-subtitle">
          Complete Cinema Solutions | Production to Post-Production
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button
            size="lg"
            onClick={scrollToServices}
            data-testid="button-explore-services"
            className="w-full sm:w-auto uppercase tracking-wide px-8 text-sm sm:text-base"
          >
            Explore Services
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToPortfolio}
            data-testid="button-view-portfolio"
            className="w-full sm:w-auto uppercase tracking-wide px-8 text-sm sm:text-base bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        data-testid="button-scroll-indicator"
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
