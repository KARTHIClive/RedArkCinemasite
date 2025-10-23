import colorGradingImage from "@assets/generated_images/Color_grading_workstation_b398f0db.png";
import filmEditingImage from "@assets/generated_images/Film_editing_suite_6ae6489c.png";
import dolbyAtmosImage from "@assets/generated_images/Dolby_Atmos_mixing_studio_686026a2.png";
import vfxImage from "@assets/generated_images/VFX_and_CGI_workstation_c188d20f.png";

export default function PortfolioSection() {
  const portfolioImages = [
    { src: colorGradingImage, alt: "Color Grading Suite", title: "Color Grading" },
    { src: filmEditingImage, alt: "Film Editing Suite", title: "Film Editing" },
    { src: dolbyAtmosImage, alt: "Dolby Atmos Studio", title: "Dolby Atmos Mixing" },
    { src: vfxImage, alt: "VFX Workstation", title: "VFX & CGI" },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-primary text-2xl">03.</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide" data-testid="text-portfolio-title">
              OUR FACILITIES
            </h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            State-of-the-art studios equipped with the latest technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md group hover-elevate transition-all duration-300"
              data-testid={`image-facility-${index}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display text-2xl text-white tracking-wide">
                  {image.title.toUpperCase()}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
