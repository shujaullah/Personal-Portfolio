import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Linkedin, Github, Download } from "lucide-react";
import { SITE, downloadResume, mailtoHire } from "@/lib/site";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "Name, email, and message are required.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name}\n${formData.email}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    toast({
      title: "Opening your email app",
      description: "Your message is ready to send via mailto.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-display">
            Let&apos;s Talk
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto">
            Recruiters and hiring managers — email or LinkedIn is fastest
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-14">
          <Button asChild className="btn-orange px-6 h-12">
            <a href={mailtoHire("Hiring inquiry — Portfolio")}>
              <Mail className="mr-2 h-4 w-4" />
              {SITE.email}
            </a>
          </Button>
          <Button asChild className="btn-outline-light px-6 h-12">
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button onClick={downloadResume} className="btn-outline-light px-6 h-12">
            <Download className="mr-2 h-4 w-4" />
            Resume PDF
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                <MapPin className="text-black h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-white/55">{SITE.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                <Github className="text-black h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold">GitHub</h3>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-navy transition-colors"
                >
                  github.com/shujaullah
                </a>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              Happy to walk through EasyLyte (NDA-aware) or Matched — reply with times that work.
            </p>
          </div>

          <Card className="surface-card rounded-2xl border-white/10">
            <CardContent className="p-8">
              <p className="text-white/50 text-sm mb-6">
                Draft a message — opens in your email client (works on GitHub Pages).
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-white/80 mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/35"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white/80 mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="you@company.com"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/35"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white/80 mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Role, team, or how I can help…"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/35"
                  />
                </div>
                <Button type="submit" className="w-full btn-orange h-11">
                  Open in Email
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
