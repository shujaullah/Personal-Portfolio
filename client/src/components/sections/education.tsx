import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Education() {
  const education = [
    {
      degree: "Masters in Data Science",
      school: "Northeastern University, Boston, MA",
      period: "September 2022 – Present",
      status: "In Progress",
      statusColor: "bg-blue-500",
      coursework: ["Data Management & Processing", "Web Development", "Machine Learning", "Statistical Analysis"],
      gradient: true
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Massachusetts Boston",
      period: "September 2019 – May 2022",
      status: "Completed",
      statusColor: "bg-green-500",
      coursework: ["Data Structures & Algorithms", "Java Compiler", "Operating Systems", "Database Management", "Android Development", "Theory of Computation"],
      gradient: false
    },
    {
      degree: "Associate in Computer Science",
      school: "Quincy College, Quincy, MA",
      period: "September 2017 – May 2019",
      status: "Foundation",
      statusColor: "bg-blue-500",
      coursework: ["Advanced Java Programming", "Data Structures in C++", "Linux Administration", "Robotics"],
      gradient: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation in computer science and data science
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className={`shadow-lg hover:shadow-xl transition-all duration-300 ${
              edu.gradient ? 'gradient-bg text-white' : 'bg-gray-50'
            }`}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className={`text-2xl font-bold mb-2 ${edu.gradient ? 'text-white' : 'text-gray-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className={`text-lg mb-2 ${edu.gradient ? 'text-blue-100' : 'text-navy'}`}>
                      {edu.school}
                    </p>
                    <p className={`${edu.gradient ? 'text-blue-50' : 'text-gray-600'}`}>
                      {edu.period}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Badge 
                      variant="secondary" 
                      className={`${edu.gradient ? 'bg-white/20 text-white' : 'bg-green-100 text-green-800'} font-medium`}
                    >
                      {edu.status}
                    </Badge>
                  </div>
                </div>
                <div className="mt-6">
                  <p className={`mb-3 font-semibold ${edu.gradient ? 'text-blue-50' : 'text-gray-700'}`}>
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge 
                        key={courseIndex} 
                        variant="secondary"
                        className={`${
                          edu.gradient 
                            ? 'bg-white/20 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        } text-sm`}
                      >
                        {course}
                      </Badge>
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
