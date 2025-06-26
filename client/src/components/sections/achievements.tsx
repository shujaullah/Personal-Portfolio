import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, GraduationCap, Code } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Departmental Distinction",
      subtitle: "UMASS Boston CS Department",
      year: "2022",
      icon: Trophy,
      color: "bg-yellow-500"
    },
    {
      title: "Dean's List",
      subtitle: "UMASS Boston",
      year: "2021 & 2022",
      icon: Medal,
      color: "bg-green-500"
    },
    {
      title: "CS Scholarship",
      subtitle: "UMASS Boston",
      year: "2021 & 2022",
      icon: GraduationCap,
      color: "bg-blue-500"
    },
    {
      title: "Codeathon Winner",
      subtitle: "Quincy College",
      year: "2018",
      icon: Code,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic excellence and professional accomplishments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{achievement.subtitle}</p>
                <p className="text-navy font-medium">{achievement.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
