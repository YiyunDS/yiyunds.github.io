import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "AI Agent Trading Platform",
      description: "An autonomous trading system powered by LLM agents that analyzes market data, executes trades, and optimizes portfolios in real-time.",
      image: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTk0OTY0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Python", "LangChain", "OpenAI", "PostgreSQL"],
      githubUrl: "https://github.com/yiyun-zhou/ai-trading-platform",
      liveUrl: "https://ai-trading-demo.vercel.app",
      featured: true
    },
    {
      title: "AI Exam Platform",
      description: "An intelligent examination system that generates adaptive questions, grades responses using NLP, and provides personalized feedback to students.",
      image: "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBkZXNpZ258ZW58MXx8fHwxNzU5NDg3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["PyTorch", "Transformers", "FastAPI", "React"],
      githubUrl: "https://github.com/yiyun-zhou/ai-exam-platform",
      liveUrl: "https://ai-exam-demo.vercel.app",
      featured: true
    },
    {
      title: "AI Self Tax Assistant",
      description: "An AI-powered tax preparation assistant that guides users through tax filing, identifies deductions, and ensures compliance with tax regulations.",
      image: "https://images.unsplash.com/photo-1758598307046-22f11e2a6917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc1OTUyMDAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["GPT-4", "LangChain", "RAG", "MongoDB"],
      githubUrl: "https://github.com/yiyun-zhou/ai-tax-assistant",
      liveUrl: "https://ai-tax-demo.vercel.app",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of AI projects that demonstrate my expertise in machine learning,
            NLP, and building intelligent systems that solve real-world problems.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`overflow-hidden ${project.featured ? 'md:grid md:grid-cols-2' : ''}`}>
              <div className="relative aspect-video md:aspect-auto">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.featured && (
                        <Badge variant="secondary">Featured</Badge>
                      )}
                    </div>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href="https://github.com/yiyun-zhou" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}