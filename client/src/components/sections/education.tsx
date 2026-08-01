import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  const education = [
    {
      degree: "Masters in Data Science",
      school: "Northeastern University, Boston, MA",
      period: "September 2024 – Present",
      status: "In Progress",
      coursework: ["Introduction to Data Management and Processing", "Web Development"],
      highlight: true,
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Massachusetts Boston, Boston, MA",
      period: "September 2019 – May 2022",
      status: "Completed",
      coursework: [
        "Data Structures and Algorithms",
        "Higher Level Languages",
        "Java Compiler",
        "Operating Systems",
        "Database Management",
        "Android Development",
        "Theory of Computation",
      ],
      highlight: false,
    },
    {
      degree: "Associate in Computer Science",
      school: "Quincy College, Quincy, MA",
      period: "September 2017 – May 2019",
      status: "Foundation",
      coursework: [
        "Advanced Java Programming",
        "Data Structures and Algorithms in C++",
        "Linux Administration",
        "Robotics",
      ],
      highlight: false,
    },
  ];

  return (
    <section id="education" className="py-24 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-display">Education</h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Computer science foundation and graduate data science at Northeastern
          </p>
        </div>

        <div className="space-y-5 max-w-4xl mx-auto">
          {education.map((edu) => (
            <Card
              key={edu.degree}
              className={`rounded-2xl overflow-hidden border-0 ${
                edu.highlight ? "bg-navy text-black" : "surface-card text-white"
              }`}
            >
              <CardContent className="p-7">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display mb-1">{edu.degree}</h3>
                    <p className={`text-lg mb-1 ${edu.highlight ? "text-black/75" : "text-navy"}`}>
                      {edu.school}
                    </p>
                    <p className={edu.highlight ? "text-black/60" : "text-white/45"}>{edu.period}</p>
                  </div>
                  <Badge
                    className={
                      edu.highlight
                        ? "bg-black/15 text-black w-fit"
                        : "bg-white/10 text-white/80 w-fit"
                    }
                  >
                    {edu.status}
                  </Badge>
                </div>
                <div className="mt-5">
                  <p className={`mb-2 font-semibold text-sm ${edu.highlight ? "text-black/70" : "text-white/50"}`}>
                    Relevant coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className={`text-sm px-3 py-1 rounded-lg ${
                          edu.highlight ? "bg-black/10 text-black/80" : "bg-white/5 text-white/70"
                        }`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
