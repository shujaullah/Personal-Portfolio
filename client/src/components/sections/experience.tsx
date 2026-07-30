import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Medica Corporation, Boston, MA",
      period: "November 2022 – Present",
      status: "Current",
      responsibilities: [
        "Own end-to-end development of EasyLyte, a C++/Qt Quality Control app used in medical-device manufacturing workflows for real-time test visualization and serial device I/O",
        "Optimized serial connections and multi-threaded data paths so QC operators get live charts and reliable device communication during production testing",
        "Shipped MySQL-backed manufacturing reports that give teams searchable visibility into QC and production test data across EasyLyte systems",
        "Built C#/.NET tooling to program RFID tags and integrate them into EasyLyte device workflows",
        "Deliver in Agile/Scrum sprints as primary owner of EasyLyte features — from design and implementation through verification documentation",
      ],
    },
    {
      title: "UNIX Lab Operator",
      company: "University of Massachusetts Boston",
      period: "January 2020 – May 2022",
      status: "Previous",
      responsibilities: [
        "Built a Django CS portal (HTML/CSS/JS) for class registration with authentication and student dashboards used by lab peers and staff",
        "Automated system monitoring and software updates with shell scripts and Cron, reducing manual ops work on shared UNIX lab machines",
        "Supported lab reliability for student coursework environments across Linux systems",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-display">Work Experience</h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Ownership and production delivery — Medica and earlier systems work
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto space-y-8">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10 md:left-1/2" />

          {experiences.map((exp, index) => (
            <div key={exp.title} className="relative">
              <div
                className={`absolute left-2.5 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full border-2 border-black z-10 ${
                  exp.status === "Current" ? "bg-navy" : "bg-white/40"
                }`}
              />
              <Card
                className={`ml-10 md:ml-0 surface-card text-white rounded-2xl ${
                  index % 2 === 0 ? "md:mr-[52%] md:pr-2" : "md:ml-[52%] md:pl-2"
                }`}
              >
                <CardContent className="p-7">
                  <div className="flex justify-between items-start gap-3 mb-3 flex-wrap">
                    <h3 className="text-xl font-semibold font-display text-white">{exp.title}</h3>
                    <Badge
                      className={
                        exp.status === "Current"
                          ? "bg-navy text-black hover:bg-navy"
                          : "bg-white/10 text-white/70"
                      }
                    >
                      {exp.status}
                    </Badge>
                  </div>
                  <p className="text-navy font-medium mb-1">{exp.company}</p>
                  <p className="text-white/45 text-sm mb-5">{exp.period}</p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex items-start text-sm text-white/75 leading-relaxed">
                        <ChevronRight className="mt-0.5 mr-2 h-4 w-4 text-navy flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
