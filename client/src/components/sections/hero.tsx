import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import professionalPhoto from "@assets/image_1750795230400.png";
import { SITE, downloadResume, mailtoHire } from "@/lib/site";

const focusTags = ["C++ / Qt", "Medical Devices", "Full-Stack", "MySQL", "C# /.NET"];
const marqueeItems = [
  "Desktop Software",
  "Quality Control Apps",
  "Serial Device I/O",
  "Full-Stack Web",
  "Data Science",
  "RFID Integration",
  "Agile Delivery",
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-0 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-[calc(100vh-8rem)]">
          {/* Left copy */}
          <div className="lg:col-span-5 order-2 lg:order-1 z-10">
            <p className="text-hero-muted mb-3 text-sm uppercase tracking-[0.2em]">Available for roles</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
              I&apos;m{" "}
              <span className="text-navy">
                {SITE.firstName} {SITE.lastName}
              </span>
            </h1>
            <p className="text-lg text-hero-muted mb-6">{SITE.tagline}</p>
            <p className="text-hero-soft/90 mb-8 leading-relaxed max-w-md">
              Building production software for medical devices at Medica — QC tooling,
              real-time data, and device integrations.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button onClick={scrollToProjects} className="btn-orange px-7 h-12 text-base">
                Portfolio
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button asChild className="btn-outline-light px-7 h-12 text-base">
                <a href={mailtoHire("Hire inquiry — Portfolio")}>Hire Me</a>
              </Button>
              <Button
                onClick={downloadResume}
                variant="ghost"
                className="text-white/70 hover:text-navy hover:bg-transparent h-12 px-2"
              >
                Resume ↓
              </Button>
            </div>

            <div className="flex gap-3">
              {[
                { href: SITE.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: SITE.github, icon: Github, label: "GitHub" },
                { href: mailtoHire(), icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:border-navy hover:text-navy transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Center photo */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center relative">
            <div className="relative w-64 sm:w-80 lg:w-full max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] bg-navy/20 blur-2xl" aria-hidden />
              <img
                src={professionalPhoto}
                alt={`${SITE.name} — professional photo`}
                className="relative w-full aspect-[3/4] object-cover rounded-[1.75rem] border border-white/10"
              />
            </div>
          </div>

          {/* Right tags */}
          <div className="lg:col-span-3 order-3 hidden lg:flex flex-col items-end gap-3 self-center">
            {focusTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-xl border border-white/15 text-sm text-white/80 bg-white/5 backdrop-blur-sm hover:border-navy/60 hover:text-navy transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-12 border-y border-white/10 bg-navy overflow-hidden py-4">
        <div className="marquee-track gap-10 text-black font-display font-semibold text-lg tracking-wide">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10 shrink-0">
              {item}
              <span className="opacity-50">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
