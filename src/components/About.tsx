import { Card, CardContent } from "./ui/card";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate AI Scientist with expertise in machine learning, natural language processing,
            and large language models. I specialize in creating intelligent solutions that solve complex real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                <Code className="text-primary-foreground" size={24} />
              </div>
              <h3 className="mb-2">Machine Learning</h3>
              <p className="text-muted-foreground">
                Building robust ML models that deliver accurate predictions and actionable insights.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                <Palette className="text-primary-foreground" size={24} />
              </div>
              <h3 className="mb-2">NLP Expertise</h3>
              <p className="text-muted-foreground">
                Developing advanced natural language processing solutions for text understanding and generation.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="text-primary-foreground" size={24} />
              </div>
              <h3 className="mb-2">LLM Agents</h3>
              <p className="text-muted-foreground">
                Creating intelligent agents powered by large language models to tackle complex challenges.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl mb-6 text-center">My Journey</h3>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              My journey in AI and machine learning has been driven by a passion for solving
              complex problems through innovative technology. I specialize in building intelligent
              systems that make a real-world impact.
            </p>
            <p>
              With expertise in machine learning, NLP, and LLM customization, I've developed
              AI-powered solutions ranging from autonomous trading platforms to intelligent
              educational systems. I excel at translating business challenges into sophisticated
              AI architectures.
            </p>
            <p>
              When I'm not training models or building AI agents, you'll find me researching
              the latest developments in AI, experimenting with cutting-edge frameworks, and
              contributing to the AI community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}