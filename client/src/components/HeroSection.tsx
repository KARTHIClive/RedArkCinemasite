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
        <div 
          className="relative inline-block px-10 sm:px-16 py-8 sm:py-10 rounded-xl"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 60px rgba(220, 20, 60, 0.15), inset 0 0 30px rgba(0, 0, 0, 0.3)'
          }}
        >
          <h1 
            className="text-shimmer text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 font-bold pt-2" 
            data-testid="text-hero-title"
            style={{
              lineHeight: '1.5',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))'
            }}
          >
            സിനിമ മോഹികളെ... വരൂ ഇങ്ങോട്ട്...
          </h1>
          <p 
            className="text-glow-red text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-0 max-w-3xl mx-auto font-semibold px-2 text-primary" 
            data-testid="text-hero-subtitle"
            style={{
              lineHeight: '1.5'
            }}
          >
            നമുക്ക് ഒരു അടിപൊളി പടം ചെയ്യാം...
          </p>
        </div>
        
        <div className="mt-8 sm:mt-10">
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
