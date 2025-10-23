import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import ProjectTypesSection from "@/components/ProjectTypesSection";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen relative z-10">
      <Navigation />
      <main className="pt-16">
        <div className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 tracking-wide" data-testid="text-services-page-title">
              OUR SERVICES
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
              Complete cinema solutions from production to post-production, all under one roof.
            </p>
          </div>
        </div>
        <ServicesSection />
        <ProjectTypesSection />
      </main>
      <Footer />
    </div>
  );
}
