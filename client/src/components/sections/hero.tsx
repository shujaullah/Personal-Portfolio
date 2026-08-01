import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import professionalPhoto from "@assets/Shuja-Profile.jpg";
import { SITE, downloadResume, mailtoHire } from "@/lib/site";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { href: SITE.linkedin, icon: Linkedin, label: "LinkedIn", external: true },
    { href: SITE.github, icon: Github, label: "GitHub", external: true },
    { href: mailtoHire(), icon: Mail, label: "Email", external: false },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 bg-section">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Name block */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-[0.95] tracking-tight">
              {SITE.firstName}
              <br />
              {SITE.lastName}
              <span className="text-navy">.</span>
            </h1>
            <div className="w-14 h-1 bg-navy mt-6 mb-8 rounded-full" />

            <div className="flex gap-3">
              {socials.map(({ href, icon: Icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-navy hover:text-navy transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
            <div className="relative w-56 sm:w-72 lg:w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-navy/15 blur-3xl" aria-hidden />
              <img
                src={professionalPhoto}
                alt={`${SITE.name} — professional photo`}
                className="relative w-full aspect-square object-cover rounded-[2rem] border border-white/10"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="lg:col-span-4 order-3">
            <p className="eyebrow mb-5">Introduction</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-snug mb-5">
              Software Development Engineer, based in Boston.
            </h2>
            <p className="text-hero-muted leading-relaxed mb-8">
              {SITE.heroSummary}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => scrollTo("experience")}
                className="group inline-flex items-center gap-2 text-white font-medium border-b-2 border-navy pb-1 hover:text-navy transition-colors"
              >
                My story
                <ArrowRight className="h-4 w-4 text-navy transition-transform group-hover:translate-x-1" />
              </button>

              <Button onClick={downloadResume} className="btn-orange px-6 h-11">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
