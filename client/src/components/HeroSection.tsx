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
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wider" data-testid="text-hero-title">
          RED ARK CINEMA
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light" data-testid="text-hero-subtitle">
          Complete Cinema Solutions | Production to Post-Production
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToServices}
            data-testid="button-explore-services"
            className="uppercase tracking-wide px-8 text-base"
          >
            Explore Services
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToPortfolio}
            data-testid="button-view-portfolio"
            className="uppercase tracking-wide px-8 text-base bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20"
          >
            View Portfolio
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        data-testid="button-scroll-indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
