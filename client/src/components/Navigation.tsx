import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Equipment", href: "#equipment" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" data-testid="link-home">
            <h1 className="font-display text-2xl md:text-3xl tracking-wider text-primary">
              RED ARK CINEMA
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                data-testid={`link-${item.label.toLowerCase()}`}
                className="text-sm font-medium text-foreground hover-elevate px-3 py-2 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              data-testid="button-get-quote"
              className="uppercase tracking-wide"
            >
              Get Quote
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                data-testid={`mobile-link-${item.label.toLowerCase()}`}
                className="block w-full text-left text-foreground hover-elevate px-3 py-2 rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              data-testid="mobile-button-get-quote"
              className="w-full uppercase tracking-wide"
            >
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
