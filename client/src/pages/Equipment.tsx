import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera, Lightbulb, Mic } from "lucide-react";
import EquipmentCard from "@/components/EquipmentCard";
import cameraImage from "@assets/generated_images/Professional_camera_equipment_0a850baa.png";
import lightImage from "@assets/generated_images/Professional_lighting_equipment_7d67b66d.png";
import soundImage from "@assets/generated_images/Sound_recording_equipment_1bfea796.png";

export default function Equipment() {
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

  return (
    <div className="min-h-screen relative z-10">
      <Navigation />
      <main className="pt-16">
        <div className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 tracking-wide" data-testid="text-equipment-page-title">
              EQUIPMENT RENTALS
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-12">
              Professional cinema equipment for rent. State-of-the-art cameras, lighting, and sound recording gear.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {equipmentRentals.map((equipment) => (
                <EquipmentCard key={equipment.title} {...equipment} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
