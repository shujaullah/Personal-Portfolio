import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "EasyLyte Application",
      description: "Led development of a comprehensive Quality Control testing application using C++ and Qt framework, featuring real-time data visualization and optimized serial connections for medical device testing.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Quality control laboratory equipment",
      technologies: ["C++", "Qt", "MySQL", "Multi-threading"],
      techColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-purple-100 text-purple-800", "bg-yellow-100 text-yellow-800"]
    },
    {
      title: "Matched - Athletes Career Platform",
      description: "Led team development of a comprehensive web platform helping professional athletes transition to post-retirement careers, featuring registration, authentication, and personalized dashboards.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Professional sports team meeting",
      technologies: ["Django", "AWS S3", "JavaScript", "Heroku"],
      techColors: ["bg-green-100 text-green-800", "bg-orange-100 text-orange-800", "bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800"]
    },
    {
      title: "Java Compiler Implementation",
      description: "Built a subset of Java compiler from scratch, implementing lexical analysis, parsing, syntax error detection, and bytecode generation for educational and research purposes.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Computer screen showing code compilation",
      technologies: ["Java", "Compiler Theory", "Bytecode", "Parsing"],
      techColors: ["bg-red-100 text-red-800", "bg-gray-100 text-gray-800", "bg-yellow-100 text-yellow-800", "bg-blue-100 text-blue-800"]
    },
    {
      title: "JDBC Shop Management System",
      description: "Developed a comprehensive command-line application for managing shop operations including customer management, product inventory, and sales tracking with Oracle database integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      imageAlt: "Database management dashboard",
      technologies: ["JDBC", "Oracle SQL", "CLI", "Database Design"],
      techColors: ["bg-red-100 text-red-800", "bg-orange-100 text-orange-800", "bg-gray-100 text-gray-800", "bg-green-100 text-green-800"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of innovative solutions and technical implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src={project.image} 
                alt={project.imageAlt}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className={project.techColors[techIndex]}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-navy text-white hover:bg-navy-dark transition-colors duration-300">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  {index === 1 && (
                    <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {index === 0 && (
                    <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
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
