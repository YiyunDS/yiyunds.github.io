import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-6xl tracking-tight">
                Hi, I'm <span className="text-primary">Yiyun Zhou</span>
              </h2>
              <h3 className="text-xl md:text-2xl text-muted-foreground">
                AI Scientist
              </h3>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              I specialize in building advanced machine learning models, NLP systems, and LLM agents
              to solve complex problems. Passionate about pushing the boundaries of AI technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button variant="outline" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:yiyunzhouds@icloud.com">
                  <Mail size={20} />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758598307046-22f11e2a6917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc1OTUyMDAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional workspace"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ArrowDown size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}