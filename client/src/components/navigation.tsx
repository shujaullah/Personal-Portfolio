import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SITE, mailtoHire } from "@/lib/site";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", href: "home" },
    { label: "Experience", href: "experience" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Education", href: "education" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <button type="button" onClick={() => scrollToSection("home")} className="text-left">
            <span className="text-xl font-bold text-white font-display tracking-tight">
              {SITE.shortName}
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-white/70 hover:text-white transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild className="btn-orange px-5 h-10">
              <a href={mailtoHire("Let's talk — Portfolio")}>Let&apos;s Talk</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-[#111] border-white/10 text-white">
                <div className="flex flex-col space-y-2 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-white/80 hover:text-navy transition-colors font-medium py-3"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button asChild className="btn-orange mt-4">
                    <a href={mailtoHire("Let's talk — Portfolio")}>Let&apos;s Talk</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
