import { Link } from "wouter";
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";
import logoImage from "@assets/logo red ark_1761408479638.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Camera Rental",
    "Lighting Equipment",
    "Sound Recording",
    "Film Editing",
    "Color Grading",
    "VFX & CGI",
  ];

  const projects = [
    "Feature Films",
    "Short Films",
    "Documentaries",
    "Music Albums",
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <img 
              src={logoImage} 
              alt="Red Ark Cinema" 
              className="h-12 sm:h-14 w-auto mb-4"
              data-testid="img-footer-logo"
            />
            <p className="text-sm text-muted-foreground mb-6">
              Your complete partner for professional cinema production and post-production services.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-card flex items-center justify-center hover-elevate transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-card flex items-center justify-center hover-elevate transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-card flex items-center justify-center hover-elevate transition-colors"
                data-testid="link-youtube"
              >
                <Youtube className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-card flex items-center justify-center hover-elevate transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-4 h-4 text-foreground" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-card flex items-center justify-center hover-elevate transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Project Types</h4>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            © {currentYear} Red Ark Cinema. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
