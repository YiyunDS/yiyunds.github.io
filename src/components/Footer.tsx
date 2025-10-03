import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg">Your Name</h3>
              <p className="text-muted-foreground">Full Stack Developer</p>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Creating digital experiences that make a difference. 
              Always learning, always building.
            </p>
          </div>

          <div className="space-y-4">
            <h4>Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4>Connect</h4>
            <div className="flex gap-2">
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
                <a href="mailto:your.email@example.com">
                  <Mail size={20} />
                </a>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>your.email@example.com</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Your Name. Made with <Heart size={16} className="text-red-500" fill="currentColor" /> and React.
          </p>
        </div>
      </div>
    </footer>
  );
}