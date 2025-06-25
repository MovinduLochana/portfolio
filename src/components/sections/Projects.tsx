import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Github, ExternalLink } from "lucide-react";

// Sample project data
const projects = [
  {
    title: "Microservices Dashboard",
    description: "A real-time monitoring dashboard for distributed microservices architecture with health checks and performance metrics.",
    image: "/images/projects/microservices.webp",
    tags: ["Java", "Spring Boot", "Docker", "Kubernetes", "Prometheus", "React"],
    github: "https://github.com/username/microservices-dashboard",
    demo: "https://demo-url.com/project1"
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
    image: "/images/projects/ecommerce.webp",
    tags: ["Node.js", "Express", "MongoDB", "React", "Redux", "Stripe"],
    github: "https://github.com/username/ecommerce-platform",
    demo: "https://demo-url.com/project2"
  },
  {
    title: "DevOps Automation Tools",
    description: "A suite of custom tools for automating CI/CD pipelines, infrastructure provisioning, and deployment processes.",
    image: "/images/projects/devops.webp",
    tags: ["Python", "Go", "AWS", "Terraform", "Jenkins", "Docker"],
    github: "https://github.com/username/devops-automation",
    demo: "https://demo-url.com/project3"
  },
  {
    title: "Scalable Data Processing Pipeline",
    description: "A high-throughput data processing system capable of handling millions of events per second with fault tolerance.",
    image: "/images/projects/data-pipeline.webp",
    tags: ["Kafka", "Elasticsearch", "Redis", "Go", "Kubernetes"],
    github: "https://github.com/username/data-pipeline",
    demo: "https://demo-url.com/project4"
  },
  {
    title: "Secure Authentication System",
    description: "A robust authentication and authorization system with OAuth2, JWT, and multi-factor authentication support.",
    image: "/images/projects/auth-system.webp",
    tags: ["Java", "Spring Security", "OAuth2", "JWT", "PostgreSQL"],
    github: "https://github.com/username/auth-system",
    demo: "https://demo-url.com/project5"
  },
  {
    title: "Real-time Collaboration Tool",
    description: "A collaborative workspace with real-time document editing, chat, and video conferencing capabilities.",
    image: "/images/projects/collaboration.webp",
    tags: ["TypeScript", "WebSockets", "React", "Node.js", "MongoDB"],
    github: "https://github.com/username/collab-tool",
    demo: "https://demo-url.com/project6"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-4">Portfolio</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Explore some of my recent work showcasing my technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-48 w-full overflow-hidden bg-muted">
                  <div className="h-full w-full bg-gradient-to-br from-primary/40 to-primary-foreground/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground/70">{project.title}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="outline">+{project.tags.length - 4}</Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="gap-1" asChild>
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button variant="secondary" size="lg" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}