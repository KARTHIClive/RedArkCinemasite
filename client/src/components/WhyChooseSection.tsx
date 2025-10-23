import { Card } from "@/components/ui/card";
import { Award, Users, Layers, Zap } from "lucide-react";

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: Award,
      number: "01",
      title: "State-of-the-Art Equipment",
      description: "Latest cinema cameras, lighting, and sound equipment from industry leaders",
    },
    {
      icon: Users,
      number: "02",
      title: "Experienced Team",
      description: "Skilled technicians and artists with years of industry experience",
    },
    {
      icon: Layers,
      number: "03",
      title: "Complete Services",
      description: "All production and post-production needs under one roof",
    },
    {
      icon: Zap,
      number: "04",
      title: "Fast Turnaround",
      description: "Efficient workflows ensuring quality delivery on schedule",
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wide" data-testid="text-why-choose-title">
            WHY CHOOSE RED ARK CINEMA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for professional cinema production
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <Card
              key={reason.number}
              className="p-8 hover-elevate transition-all duration-300 group"
              data-testid={`card-reason-${reason.number}`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-3xl text-primary">{reason.number}</span>
                    <h3 className="text-xl font-bold text-foreground" data-testid={`text-reason-title-${reason.number}`}>
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
