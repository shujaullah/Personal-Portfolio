import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, GraduationCap, Code } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Departmental Distinction",
      subtitle: "UMASS Boston CS Department",
      year: "2022",
      icon: Trophy,
    },
    {
      title: "Dean's List",
      subtitle: "UMASS Boston",
      year: "2021 & 2022",
      icon: Medal,
    },
    {
      title: "CS Scholarship",
      subtitle: "UMASS Boston Computer Science",
      year: "2021 & 2022",
      icon: GraduationCap,
    },
    {
      title: "Codeathon Winner",
      subtitle: "Quincy College",
      year: "2018",
      icon: Code,
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-display">
            Achievements
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Academic excellence and recognition
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((achievement) => (
            <Card
              key={achievement.title}
              className="surface-card rounded-2xl text-center text-white hover:border-navy/40 transition-colors"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-black h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold font-display mb-2">{achievement.title}</h3>
                <p className="text-white/50 text-sm mb-1">{achievement.subtitle}</p>
                <p className="text-navy font-medium">{achievement.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
