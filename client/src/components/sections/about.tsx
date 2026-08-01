import { MonitorCog, Cpu, Globe, ArrowRight } from "lucide-react";
import { SITE, mailtoHire } from "@/lib/site";

const stats = [
  { value: "3+", label: "Years of professional experience" },
  { value: "6", label: "Programming languages in production" },
  { value: "4", label: "Academic awards & honors" },
];

const roles = [
  {
    title: "Software Engineer",
    detail: "Desktop & product software",
    icon: MonitorCog,
    highlight: true,
  },
  {
    title: "Systems & Embedded",
    detail: "Device integration & tooling",
    icon: Cpu,
    highlight: false,
  },
  {
    title: "Full-Stack Developer",
    detail: "Web apps & data platforms",
    icon: Globe,
    highlight: false,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-3">
            <p className="eyebrow mb-4">Contact</p>
            <h3 className="font-display text-xl font-semibold text-white mb-3">
              Any type of query &amp; discussion.
            </h3>
            <p className="text-hero-muted text-sm leading-relaxed mb-5">
              Open to software engineering roles and always glad to talk through a problem.
            </p>
            <a
              href={mailtoHire()}
              className="group inline-flex items-center gap-2 text-white text-sm font-medium border-b border-navy pb-1 hover:text-navy transition-colors"
            >
              {SITE.email}
              <ArrowRight className="h-4 w-4 text-navy transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="lg:col-span-5">
            <p className="font-display text-2xl sm:text-3xl text-white leading-snug">
              Good software is not about the tools — it&apos;s about understanding the
              problem well enough to make the solution feel obvious.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 content-start">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-4">
                <span className="font-display text-4xl font-bold text-navy leading-none">
                  {stat.value}
                </span>
                <span className="text-hero-muted text-sm leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {roles.map((role) => (
            <div
              key={role.title}
              className={`rounded-2xl p-7 transition-transform hover:-translate-y-1 ${
                role.highlight ? "bg-navy" : "surface-card"
              }`}
            >
              <role.icon
                className={`h-7 w-7 mb-8 ${role.highlight ? "text-black/70" : "text-navy"}`}
              />
              <h3
                className={`font-display text-xl font-semibold mb-1 ${
                  role.highlight ? "text-black" : "text-white"
                }`}
              >
                {role.title}
              </h3>
              <p className={`text-sm ${role.highlight ? "text-black/65" : "text-hero-muted"}`}>
                {role.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
