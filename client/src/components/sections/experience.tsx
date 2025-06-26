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
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      imageAlt: "Modern software development workspace",
      responsibilities: [
        "Led development of EasyLyte application using C++ and Qt for Quality Control testing",
        "Optimized serial connections and real-time data visualization with MySQL storage",
        "Employed Agile/Scrum methodologies delivering functional code each sprint",
        "Developed MySQL-based reports enabling detailed manufacturing data analysis",
        "Programmed RFID tags using C# and .NET for EasyLyte systems"
      ]
    },
    {
      title: "UNIX Lab Operator",
      company: "University of Massachusetts Boston",
      period: "January 2020 – May 2022",
      status: "Previous",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      imageAlt: "Server room with UNIX systems",
      responsibilities: [
        "Developed CS portal for class registration using HTML, CSS, JavaScript, and Django",
        "Implemented registration and authentication system with intuitive dashboard",
        "Utilized shell scripts for system monitoring and process management",
        "Automated software updates with Cron jobs maintaining system reliability"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional journey in software development and engineering
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-navy"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 ${index === experiences.length - 1 ? 'mb-0' : ''}`}>
              <div className="flex items-center mb-4">
                <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${
                  exp.status === 'Current' ? 'bg-navy' : 'bg-gray-400'
                }`}></div>
                <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                        <Badge variant={exp.status === 'Current' ? 'default' : 'secondary'}>
                          {exp.status}
                        </Badge>
                      </div>
                      <p className="text-navy-light font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-600 mb-4">{exp.period}</p>
                      <img 
                        src={exp.image} 
                        alt={exp.imageAlt}
                        className="rounded-lg mb-4 w-full h-32 object-cover"
                      />
                      <ul className="text-gray-700 space-y-2">
                        {exp.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <ChevronRight className={`mt-1 mr-2 h-4 w-4 ${exp.status === 'Current' ? 'text-navy' : 'text-gray-500'} flex-shrink-0`} />
                            <span className="text-sm">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
