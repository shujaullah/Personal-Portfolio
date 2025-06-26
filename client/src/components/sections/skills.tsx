import { Card, CardContent } from "@/components/ui/card";
import { Code, Layers, Database, Wrench, ClipboardCheck, Monitor } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-navy",
      skills: [
        { name: "Python", level: 5 },
        { name: "Java", level: 5 },
        { name: "C++", level: 4 },
        { name: "JavaScript", level: 4 },
        { name: "C#", level: 3 },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "bg-green-500",
      skills: ["Django", "React", "Spring Boot", "Qt", ".NET", "Spring"]
    },
    {
      title: "Databases & Backend",
      icon: Database,
      color: "bg-purple-500",
      skills: ["MySQL", "PostgreSQL", "AWS S3", "Heroku", "Oracle SQL", "MongoDB"]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "bg-red-500",
      skills: ["Git/GitHub", "IntelliJ", "VS Code", "Android Studio", "PyCharm", "Bitbucket"]
    },
    {
      title: "Testing & Documentation",
      icon: ClipboardCheck,
      color: "bg-orange-500",
      skills: ["Espresso Testing", "Risk Assessment", "SRD Writing", "SDD Creation", "Software Verification"]
    },
    {
      title: "Systems & Emerging Tech",
      icon: Monitor,
      color: "bg-indigo-500",
      skills: ["Linux", "Windows", "macOS", "AI/ML", "TypeScript", "R"]
    }
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <div className="flex items-center">
      <span className="text-gray-700 flex-1">{name}</span>
      <div className="ml-4 w-24 bg-gray-200 rounded-full h-2">
        <div 
          className="bg-navy h-2 rounded-full transition-all duration-500"
          style={{ width: `${(level / 5) * 100}%` }}
        />
      </div>
    </div>
  );

  const SkillTag = ({ skill }: { skill: string }) => (
    <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 mr-2 mb-2">
      {skill}
    </span>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across modern development technologies and methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {Array.isArray(category.skills) && typeof category.skills[0] === 'object' ? (
                    // Skills with levels (programming languages)
                    category.skills.map((skill: any, skillIndex: number) => (
                      <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                    ))
                  ) : (
                    // Skills as tags
                    <div>
                      {(category.skills as string[]).map((skill, skillIndex) => (
                        <SkillTag key={skillIndex} skill={skill} />
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
