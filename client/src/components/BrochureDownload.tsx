import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrochureDownload() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(220, 20, 60, 0.25) 0%, rgba(139, 0, 0, 0.15) 30%, transparent 70%)',
            animation: 'breathing-light 5s ease-in-out infinite',
          }}
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
            <FileText className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground tracking-wide mb-4" data-testid="text-brochure-title">
          STUDIO SERVICE BROCHURE
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Download our complete brochure with all studio services, equipment details, and pricing information
        </p>
        <a href="/downloads/Red_Ark_Cinema_Brochure.pdf" download>
          <Button
            size="lg"
            className="uppercase tracking-wide px-10 gap-2"
            data-testid="button-download-brochure"
          >
            <Download className="w-5 h-5" />
            Download Brochure
          </Button>
        </a>
      </div>
    </section>
  );
}
