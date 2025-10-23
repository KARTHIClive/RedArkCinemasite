import { Camera, Lightbulb, Mic, Film, Palette, Music, Volume2, Wand2, Sparkles, TrendingUp, Globe } from "lucide-react";
import EquipmentCard from "./EquipmentCard";
import ServiceCard from "./ServiceCard";
import cameraImage from "@assets/generated_images/Professional_camera_equipment_0a850baa.png";
import lightImage from "@assets/generated_images/Professional_lighting_equipment_7d67b66d.png";
import soundImage from "@assets/generated_images/Sound_recording_equipment_1bfea796.png";

export default function ServicesSection() {
  const equipmentRentals = [
    {
      title: "Camera Unit",
      description: "Professional cinema cameras for every production need",
      features: ["4K/6K/8K Capture", "RED & ARRI Systems", "Complete Lens Packages"],
      image: cameraImage,
      icon: Camera,
    },
    {
      title: "Light Unit",
      description: "Comprehensive lighting solutions for any scene",
      features: ["LED & Tungsten", "Grip Equipment", "Lighting Control"],
      image: lightImage,
      icon: Lightbulb,
    },
    {
      title: "Sound Recording",
      description: "Crystal-clear audio capture equipment",
      features: ["Boom & Wireless", "Field Recorders", "Studio-Grade Mics"],
      image: soundImage,
      icon: Mic,
    },
  ];

  const postProduction = [
    {
      title: "Film Editing",
      description: "Professional editing services with the latest software and expert editors",
      icon: Film,
    },
    {
      title: "Colour Grading",
      description: "Advanced color correction and grading for cinematic looks",
      icon: Palette,
    },
    {
      title: "Dubbing",
      description: "Professional voice recording and dubbing services",
      icon: Mic,
    },
    {
      title: "Re-Recording (RR)",
      description: "Expert audio re-recording for perfect sound synchronization",
      icon: Volume2,
    },
    {
      title: "Background Music",
      description: "Custom music composition and licensing for your projects",
      icon: Music,
    },
    {
      title: "Dolby Atmos Mixing",
      description: "Immersive audio mixing with Dolby Atmos technology",
      icon: Volume2,
    },
  ];

  const creativeServices = [
    {
      title: "Graphic Design",
      description: "Professional graphics for titles, credits, and promotional materials",
      icon: Wand2,
    },
    {
      title: "CGI",
      description: "Cutting-edge computer-generated imagery and 3D animation",
      icon: Sparkles,
    },
    {
      title: "VFX",
      description: "Visual effects compositing and enhancement for stunning visuals",
      icon: Sparkles,
    },
  ];

  const distribution = [
    {
      title: "Digital Marketing",
      description: "Strategic marketing campaigns to reach your target audience",
      icon: TrendingUp,
    },
    {
      title: "Distribution",
      description: "Multi-platform distribution services for maximum reach",
      icon: Globe,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-6">
            <span className="font-display text-primary text-xl sm:text-2xl flex-shrink-0">01.</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide" data-testid="text-services-title">
              SERVICES
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-6 sm:mb-8 tracking-wide">
            EQUIPMENT RENTALS
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {equipmentRentals.map((equipment) => (
              <EquipmentCard key={equipment.title} {...equipment} />
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-6 sm:mb-8 tracking-wide">
            POST-PRODUCTION SERVICES
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {postProduction.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-6 sm:mb-8 tracking-wide">
            CREATIVE SERVICES
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {creativeServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-6 sm:mb-8 tracking-wide">
            MARKETING & DISTRIBUTION
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {distribution.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
