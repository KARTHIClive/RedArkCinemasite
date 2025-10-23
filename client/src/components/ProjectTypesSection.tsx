import { Card } from "@/components/ui/card";
import { Film, Video, Music, FileText } from "lucide-react";

export default function ProjectTypesSection() {
  const projectTypes = [
    {
      title: "Feature Films",
      icon: Film,
      phases: ["Pre-Production", "Production", "Post-Production", "Distribution"],
      description: "Complete end-to-end solutions for feature-length cinema",
    },
    {
      title: "Short Films",
      icon: Video,
      phases: ["Production", "Post-Production", "Festival Distribution"],
      description: "Professional support for independent filmmakers",
    },
    {
      title: "Music Albums",
      icon: Music,
      phases: ["Recording", "Mixing", "Mastering", "Release"],
      description: "Studio production for music videos and albums",
    },
    {
      title: "Documentaries",
      icon: FileText,
      phases: ["Research", "Production", "Post-Production", "Broadcasting"],
      description: "Comprehensive documentary production services",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-6">
            <span className="font-display text-primary text-xl sm:text-2xl flex-shrink-0">02.</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide" data-testid="text-project-types-title">
              PROJECT TYPES
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-border ml-4" />
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
            We support every stage of your creative journey, from concept to final delivery
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {projectTypes.map((project) => (
            <Card
              key={project.title}
              className="p-6 hover-elevate transition-all duration-300 group light-reflection"
              data-testid={`card-project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <project.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3 tracking-wide" data-testid={`text-project-title-${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {project.title.toUpperCase()}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="space-y-2">
                {project.phases.map((phase, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{phase}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
