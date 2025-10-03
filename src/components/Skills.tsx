import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "XGBoost", level: 80 },
      ]
    },
    {
      title: "NLP & LLMs",
      skills: [
        { name: "Transformers", level: 95 },
        { name: "LangChain", level: 90 },
        { name: "OpenAI API", level: 95 },
        { name: "Fine-tuning", level: 85 },
      ]
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
      ]
    }
  ];

  const technologies = [
    "Python", "TensorFlow", "PyTorch", "Transformers", "LangChain", "OpenAI",
    "Scikit-learn", "Pandas", "NumPy", "BERT", "GPT", "Fine-tuning",
    "NLP", "Deep Learning", "RAG", "Vector Databases", "Docker", "AWS",
    "Azure ML", "Jupyter", "SQL", "Git"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent AI systems, from model development to deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}