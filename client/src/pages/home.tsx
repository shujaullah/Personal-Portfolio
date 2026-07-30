import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";
import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />

      <footer className="bg-black border-t border-white/10 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-2 font-display">
            {SITE.shortName}
          </h3>
          <p className="text-white/45 mb-6">{SITE.tagline}</p>
          <div className="flex justify-center gap-5 mb-8">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/45 hover:text-navy transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/45 hover:text-navy transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="text-white/45 hover:text-navy transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-white/35 text-sm">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
