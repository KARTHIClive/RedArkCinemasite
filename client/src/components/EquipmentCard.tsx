import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface EquipmentCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: LucideIcon;
}

export default function EquipmentCard({
  title,
  description,
  features,
  image,
  icon: Icon,
}: EquipmentCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 group" data-testid={`card-equipment-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-equipment-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-primary mt-1">•</span>
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
