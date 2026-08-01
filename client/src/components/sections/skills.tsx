import { useState } from "react";
import { ChevronDown } from "lucide-react";

const capabilities = [
  {
    title: "Desktop & Device Software",
    body: "C++/Qt 6 EasyLyte QC apps with multithreaded real-time acquisition, RS-232 serial protocols, and data visualization for medical analyzers in production.",
  },
  {
    title: "Embedded & Manufacturing Tooling",
    body: "Arduino firmware for hardware test fixtures; automated board provisioning with U-Boot over serial and ADB to flash OS images and deploy APKs on the production line.",
  },
  {
    title: "Systems Integration",
    body: "Two-way Java bridges to Android-based analyzers, MySQL calibration/QC storage and reporting, and C#/.NET RFID for sample tracking and instrument authentication.",
  },
  {
    title: "Full-Stack Web",
    body: "Django + JavaScript platforms with auth and dashboards — CS registration portal and Matched athlete career app on Heroku with AWS S3.",
  },
  {
    title: "Data Science Foundation",
    body: "MS in Data Science at Northeastern (from Sept 2024) with coursework in data management/processing and web development; interest in ML and problem-solving on LeetCode.",
  },
];

const skillTags = [
  "Python",
  "Java",
  "JavaScript",
  "C++",
  "C#",
  "Bash",
  "Qt",
  ".NET",
  "Django",
  "React",
  "Spring Boot",
  "MySQL",
  "PostgreSQL",
  "RS-232",
  "Arduino",
  "U-Boot",
  "ADB",
  "RFID",
  "AWS S3",
  "Git",
];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="skills" className="py-24 bg-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-white font-display mb-12 text-center">
          How I Ship Software
        </h2>

        <div className="space-y-3">
          {capabilities.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={`w-full text-left rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-navy text-black"
                    : "bg-surface-2 text-white hover:bg-white/10"
                }`}
                style={{ backgroundColor: isOpen ? undefined : "var(--surface-2)" }}
              >
                <div className="flex items-center justify-between px-6 py-5">
                  <span className="font-display text-lg sm:text-xl font-semibold">{item.title}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-black" : "text-navy"
                    }`}
                  />
                </div>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-black/80 leading-relaxed max-w-3xl">{item.body}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {skillTags.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 rounded-lg text-sm text-white/70 border border-white/10 bg-white/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
