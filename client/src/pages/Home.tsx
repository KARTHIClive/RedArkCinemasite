import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StudioIntro from "@/components/StudioIntro";
import ShowreelVideo from "@/components/ShowreelVideo";
import ServicesSection from "@/components/ServicesSection";
import ProjectTypesSection from "@/components/ProjectTypesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative z-10">
      <Navigation />
      <main>
        <HeroSection />
        <StudioIntro />
        <ShowreelVideo />
        <ServicesSection />
        <ProjectTypesSection />
        <PortfolioSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
