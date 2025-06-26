import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import professionalPhoto from "@assets/image_1750795230400.png";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/attached_assets/Resume_Shuja_1750795062850.pdf';
    link.download = 'Shujaullah_Ahsan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="gradient-bg min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={professionalPhoto}
              alt="Shujaullah Ahsan Professional Photo"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-8 border-white/20"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Shujaullah Ahsan
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Software Development Engineer | Data Science Graduate Student | Full-Stack Developer
          </p>
          <p className="text-lg text-blue-50 mb-12 max-w-4xl mx-auto leading-relaxed">
            Passionate about creating innovative software solutions with expertise in C++, Java, Python, and modern web technologies. 
            Currently pursuing Masters in Data Science while leading development of cutting-edge applications at Medica Corporation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              className="bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button
              onClick={downloadResume}
              variant="outline"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/shujaullah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors duration-300"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/shujaullah-ahsan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors duration-300"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:ahsanshuja1127@gmail.com"
              className="text-white hover:text-blue-200 transition-colors duration-300"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
