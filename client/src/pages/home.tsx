import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Shujaullah Ahsan</h3>
            <p className="text-gray-400 mb-6">Software Development Engineer | Data Science Graduate Student</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/shujaullah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/shujaullah-ahsan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:ahsanshuja1127@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail className="h-8 w-8" />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© 2024 Shujaullah Ahsan. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
