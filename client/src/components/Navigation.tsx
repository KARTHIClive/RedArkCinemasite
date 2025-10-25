import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo red ark_1761408857219.png";

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Equipment", href: "/equipment" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link href="/" data-testid="link-home" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Red Ark Cinema" 
              className="h-10 sm:h-12 md:h-14 w-auto"
              data-testid="img-logo"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`link-${item.label.toLowerCase()}`}
                className={`text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors ${
                  location === item.href ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button
                data-testid="button-get-quote"
                className="uppercase tracking-wide"
              >
                Get Quote
              </Button>
            </Link>
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
          <div className="px-4 sm:px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                data-testid={`mobile-link-${item.label.toLowerCase()}`}
                className={`block w-full text-left hover-elevate px-4 py-3 rounded-md transition-colors font-medium ${
                  location === item.href ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={handleNavClick}>
              <Button
                data-testid="mobile-button-get-quote"
                className="w-full uppercase tracking-wide mt-2"
              >
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
