
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: string;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Java", level: "Advanced", icon: "☕", category: "Programming Languages" },
  { name: "JavaScript", level: "Advanced", icon: "🟨", category: "Programming Languages" },
  { name: "Python", level: "Advanced", icon: "🐍", category: "Programming Languages" },
  { name: "TypeScript", level: "Advanced", icon: "📘", category: "Programming Languages" },
  { name: "Go", level: "Intermediate", icon: "🐹", category: "Programming Languages" },
  { name: "Rust", level: "Intermediate", icon: "🦀", category: "Programming Languages" },
  { name: "C++", level: "Intermediate", icon: "⚡", category: "Programming Languages" },
  { name: "Dart", level: "Intermediate", icon: "🎯", category: "Programming Languages" },
  
  // Backend Technologies
  { name: "Spring Boot", level: "Advanced", icon: "🌱", category: "Backend Technologies" },
  { name: "Node.js", level: "Advanced", icon: "💚", category: "Backend Technologies" },
  { name: "Express.js", level: "Advanced", icon: "🚀", category: "Backend Technologies" },
  { name: "FastAPI", level: "Advanced", icon: "⚡", category: "Backend Technologies" },
  { name: "Quarkus", level: "Intermediate", icon: "🔥", category: "Backend Technologies" },
  { name: "Flask", level: "Intermediate", icon: "🌶️", category: "Backend Technologies" },
  
  // Web Technologies
  { name: "React", level: "Advanced", icon: "⚛️", category: "Web Technologies" },
  { name: "Next.js", level: "Advanced", icon: "▲", category: "Web Technologies" },
  { name: "Tailwind CSS", level: "Advanced", icon: "🎨", category: "Web Technologies" },
  { name: "React Query", level: "Advanced", icon: "🔄", category: "Web Technologies" },
  { name: "Zustand", level: "Intermediate", icon: "🐻", category: "Web Technologies" },
  
  // Databases
  { name: "PostgreSQL", level: "Advanced", icon: "🐘", category: "Databases" },
  { name: "MongoDB", level: "Advanced", icon: "🍃", category: "Databases" },
  { name: "Redis", level: "Advanced", icon: "🔴", category: "Databases" },
  { name: "MySQL", level: "Intermediate", icon: "🐬", category: "Databases" },
  
  // Cloud & DevOps
  { name: "AWS", level: "Advanced", icon: "☁️", category: "Cloud & DevOps" },
  { name: "Docker", level: "Advanced", icon: "🐳", category: "Cloud & DevOps" },
  { name: "Kubernetes", level: "Advanced", icon: "☸️", category: "Cloud & DevOps" },
  { name: "Jenkins", level: "Intermediate", icon: "⚙️", category: "Cloud & DevOps" },
  { name: "Terraform", level: "Intermediate", icon: "🏗️", category: "Cloud & DevOps" },
  { name: "Prometheus", level: "Intermediate", icon: "📊", category: "Cloud & DevOps" },
];

const categories = Array.from(new Set(skills.map(skill => skill.category)));

export default function Skills() {

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">Explore My</p>
          <h2 className="text-4xl md:text-5xl font-bold">Tech Skills</h2>
        </div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className="space-y-6"
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-center">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <Card
                      key={skill.name}
                      className="p-4 hover:shadow-lg cursor-pointer group"
                    >
                      <div
                        className="flex items-center gap-3"
                        style={{ transitionDelay: `${(categoryIndex * 200) + (index * 100)}ms` }}
                      >
                        <div className="text-2xl group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{skill.name}</h4>
                          <Badge 
                            variant={
                              skill.level === "Advanced" ? "default" : 
                              skill.level === "Intermediate" ? "secondary" : 
                              "outline"
                            }
                            className="text-xs mt-1"
                          >
                            {skill.level}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))
                }
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <Card className="inline-block p-8 bg-card/50 backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-primary">25+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary">8+</h3>
                <p className="text-muted-foreground">Programming Languages</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary">3.9</h3>
                <p className="text-muted-foreground">GPA Achievement</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}