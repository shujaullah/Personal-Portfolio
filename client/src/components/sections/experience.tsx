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
        "Designed and implemented the EasyLyte QC testing application in C++/Qt 6, improving measurement accuracy and reducing manual effort in laboratory workflows",
        "Engineered high-performance multithreaded C++ modules for real-time data acquisition and processing, significantly enhancing device responsiveness",
        "Optimized RS-232 serial communication protocols and data visualization pipelines for reliable interaction with medical analyzers in production",
        "Implemented two-way Java communication between the Android-based analyzer and the desktop app, parsing and validating real-time instrument data streams",
        "Developed Arduino firmware for a custom test fixture to drive and exercise instrument hardware during manufacturing and QA",
        "Built automated board-provisioning tooling that scripts U-Boot over serial and ADB to flash OS images and deploy APKs, reducing manual setup time on the production line",
        "Integrated MySQL for persistent calibration and QC data; developed SQL-driven reporting tools with actionable insights for manufacturing teams",
        "Developed RFID programming solutions using C#/.NET, streamlining sample tracking and instrument authentication",
        "Partnered with QA, manufacturing, and product management under Agile/Scrum to deliver production-ready software each sprint",
      ],
    },
    {
      title: "UNIX Lab Operator",
      company: "University of Massachusetts Boston",
      period: "January 2020 – May 2022",
      status: "Previous",
      responsibilities: [
        "Developed and deployed a CS registration portal using Django, HTML, CSS, and JavaScript, streamlining student enrollment",
        "Built secure authentication workflows and intuitive dashboards for students and faculty",
        "Automated system monitoring and maintenance with shell scripts and cron jobs, reducing downtime and improving lab reliability",
        "Supported faculty and students in resolving UNIX system issues, improving lab productivity and system uptime",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-display">Work Experience</h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Production software for medical devices — desktop, embedded, and manufacturing tooling
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
