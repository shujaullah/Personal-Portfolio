import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock, Mail } from "lucide-react";
import { mailtoHire, SITE } from "@/lib/site";

type ProjectLink =
  | { type: "github"; href: string; label?: string }
  | { type: "demo"; href: string; label?: string }
  | { type: "private"; label?: string }
  | { type: "mailto"; subject: string; label?: string };

interface Project {
  title: string;
  featured: boolean;
  problem: string;
  role: string;
  result: string;
  technologies: string[];
  links: ProjectLink[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "EasyLyte Application",
      featured: true,
      problem:
        "Medical-device manufacturing needed reliable Quality Control software with live device data and durable test records.",
      role:
        "Lead developer — C++/Qt UI, multi-threaded serial I/O, MySQL storage, and C#/.NET RFID programming integrations.",
      result:
        "Production QC tooling used in Medica manufacturing workflows for real-time visualization, device connectivity, and reporting.",
      technologies: ["C++", "Qt", "MySQL", "Multi-threading", "C#", ".NET"],
      links: [
        { type: "private", label: "Private / NDA" },
        { type: "mailto", subject: "EasyLyte walkthrough request", label: "Request walkthrough" },
      ],
    },
    {
      title: "Matched — Athletes Career Platform",
      featured: true,
      problem:
        "Professional athletes needed a structured way to plan post-retirement careers with profiles, auth, and personalized dashboards.",
      role: "Team lead — Django backend, auth/registration flows, AWS S3 assets, and Heroku deployment.",
      result:
        "Full-stack web platform with registration, authentication, and personalized career dashboards for athletes.",
      technologies: ["Django", "JavaScript", "AWS S3", "Heroku"],
      links: [
        { type: "github", href: SITE.github, label: "GitHub profile" },
        { type: "mailto", subject: "Matched demo / repo request", label: "Ask for demo" },
      ],
    },
    {
      title: "Java Compiler (subset)",
      featured: false,
      problem: "Needed a from-scratch compiler pipeline to deepen systems understanding.",
      role: "Sole developer — lexer, parser, syntax errors, and bytecode generation.",
      result: "Working educational compiler from lexical analysis through bytecode emission.",
      technologies: ["Java", "Parsing", "Bytecode"],
      links: [{ type: "github", href: SITE.github, label: "GitHub profile" }],
    },
    {
      title: "JDBC Shop Management System",
      featured: false,
      problem: "Small-shop ops needed CLI tooling for customers, inventory, and sales.",
      role: "Sole developer — JDBC + Oracle SQL schema and command-line workflows.",
      result: "End-to-end shop management CLI covering customers, inventory, and sales.",
      technologies: ["JDBC", "Oracle SQL", "CLI"],
      links: [{ type: "github", href: SITE.github, label: "GitHub profile" }],
    },
  ];

  const featured = projects.filter((p) => p.featured);
  const additional = projects.filter((p) => !p.featured);

  const renderLinks = (links: ProjectLink[]) => (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => {
        if (link.type === "private") {
          return (
            <Button key="private" variant="secondary" disabled className="cursor-default bg-white/10 text-white/50">
              <Lock className="mr-2 h-4 w-4" />
              {link.label ?? "Private / NDA"}
            </Button>
          );
        }
        if (link.type === "mailto") {
          return (
            <Button key={link.subject} asChild className="btn-outline-light">
              <a href={mailtoHire(link.subject)}>
                <Mail className="mr-2 h-4 w-4" />
                {link.label ?? "Contact"}
              </a>
            </Button>
          );
        }
        if (link.type === "github") {
          return (
            <Button key={link.href + (link.label ?? "")} asChild className="btn-orange">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                {link.label ?? "GitHub"}
              </a>
            </Button>
          );
        }
        return (
          <Button key={link.href} asChild className="btn-outline-light">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {link.label ?? "Live Demo"}
            </a>
          </Button>
        );
      })}
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-display">Featured Projects</h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Production and team work first — problem, ownership, outcome
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {featured.map((project) => (
            <Card key={project.title} className="surface-card rounded-2xl text-white overflow-hidden">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <h3 className="text-2xl font-semibold font-display">{project.title}</h3>
                  <Badge className="bg-navy text-black shrink-0 hover:bg-navy">Featured</Badge>
                </div>
                <dl className="space-y-4 text-sm mb-6 flex-1">
                  <div>
                    <dt className="font-semibold text-navy mb-1">Problem</dt>
                    <dd className="text-white/70 leading-relaxed">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy mb-1">My role</dt>
                    <dd className="text-white/70 leading-relaxed">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy mb-1">Result</dt>
                    <dd className="text-white/70 leading-relaxed">{project.result}</dd>
                  </div>
                </dl>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-white/5 text-white/70 border border-white/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {renderLinks(project.links)}
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white/80 mb-6 text-center font-display">
          Additional coursework projects
        </h3>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {additional.map((project) => (
            <Card key={project.title} className="surface-card rounded-2xl text-white">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold font-display mb-2">{project.title}</h4>
                <p className="text-sm text-white/60 mb-4 leading-relaxed">{project.result}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-white/5 text-white/60">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {renderLinks(project.links)}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
