import { useState } from "react";
import { ChevronDown } from "lucide-react";

const capabilities = [
  {
    title: "Desktop & Device Software",
    body: "C++/Qt applications with multi-threaded serial I/O, real-time visualization, and production QC workflows for medical devices at Medica.",
  },
  {
    title: "Systems Integration",
    body: "MySQL reporting, C#/.NET RFID tooling, and hardware-adjacent features that connect instruments to manufacturing data.",
  },
  {
    title: "Full-Stack Web",
    body: "Django + JavaScript platforms with auth, dashboards, and cloud storage (AWS S3) — from lab portals to athlete career apps.",
  },
  {
    title: "Engineering Craft",
    body: "Agile delivery, verification docs (SRD/SDD), and clear ownership from design through shipping.",
  },
  {
    title: "Data Science Foundation",
    body: "MS coursework in ML, statistics, and data management — applied alongside day-to-day software engineering.",
  },
];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(1);

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
          {[
            "C++",
            "Qt",
            "C# /.NET",
            "MySQL",
            "Python",
            "Django",
            "React",
            "JavaScript",
            "AWS S3",
            "Git",
          ].map((skill) => (
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
