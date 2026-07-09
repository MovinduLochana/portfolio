import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: string;
  featured: boolean;
  links: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  image?: string;
  status?: string;
}

const projects: Project[] = [
  {
    title: "Real Time Supply Chain Management System",
    description: "A highly scalable, real-time supply chain management platform supporting order tracking, inventory reservation, shipment coordination, notifications, and AI-driven forecasting and anomaly detection by consuming Kafka streams.",
    longDescription: "An enthusiastic project to learn how to integrate real-world technologies in a large scale enterprise environment. Built on modern microservices architecture with proto buffers for internal services. Postgres and MongoDB are used for persistence and Redis as cache. Uses an API Gateway and Kubernetes DNS instead of Eureka for service discovery. Full observability with Prometheus, event-driven processing with Kafka, and secure authentication & authorization integrated with Keycloak. Rust for ultra-low-latency telemetry ingestion from delivery vehicles. Go is used for lightweight internal services like audits and log aggregation sidecars.",
    technologies: ["Java", "Spring Boot", "Netflix OSS", "Kafka", "PostgreSQL", "Redis", "Keycloak", "Rust", "Axum", "Tokio", "Python", "FastAPI", "PyTorch", "Go", "Next.js", "React Native", "Better-Auth", "React Query", "Docker", "Helm", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Prometheus", "Grafana"],
    category: "Full Stack",
    featured: true,
    status: "Ongoing",
    links: {
      github: "https://github.com/movindulochana/supply-chain-system"
    }
  },
  {
    title: "Java Microservices Quiz System",
    description: "Question service can create questions and persist data using Data JPA, Quiz Service can create quizzes by involving question service functions via Open Feign. Includes API Gateway for load balancing and Service Discovery server using Eureka.",
    technologies: ["Java", "Spring Boot", "Spring Gateway", "Hibernate/JPA", "MySQL", "Netflix OSS", "Open Feign", "Eureka"],
    category: "Backend",
    featured: true,
    links: {
      github: "https://github.com/movindulochana/quiz-microservices"
    }
  },
  {
    title: "Convenient Shop Location Service",
    description: "A Node.js (Express) project with Authentication and Authorization using JWT tokens and refresh tokens. Uses MongoDB to persist Geo Locations with Geospatial aggregation queries. Integrates with AWS S3 for image storage.",
    technologies: ["JavaScript", "React Native", "Express.js", "Node.js", "Redis", "JWT", "MongoDB", "AWS S3"],
    category: "Mobile & Backend",
    featured: true,
    links: {
      github: "https://github.com/movindulochana/shop-location-service"
    }
  },
  {
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js 14 and shadcn/ui components. Features smooth animations, dark mode support, and optimized performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Framer Motion"],
    category: "Frontend",
    featured: false,
    links: {
      demo: "https://movindulochana.dev",
      github: "https://github.com/movindulochana/portfolio"
    }
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies for scalability.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    category: "Full Stack",
    featured: false,
    links: {
      github: "https://github.com/movindulochana/ecommerce-platform"
    }
  },
  {
    title: "Real-time Chat Application",
    description: "WebSocket-based chat application with real-time messaging, file sharing, and user presence indicators. Supports group chats and private messaging.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express.js"],
    category: "Full Stack",
    featured: false,
    links: {
      github: "https://github.com/movindulochana/realtime-chat"
    }
  }
];

// const categories = Array.from(new Set(projects.map(p => p.category)));

export default function Projects() {

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">Explore My Recent</p>
          <h2 className="text-4xl md:text-5xl font-bold">Project Highlights</h2>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={project.title}
                className="transition-all duration-800"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Project Image/Icon */}
                    <div className="lg:w-1/4">
                      <div className="aspect-video bg-linear-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold text-xl">
                            {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="mt-4 w-full justify-center">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Project Details */}
                    <div className="lg:w-3/4 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          {project.status && (
                            <Badge variant="outline" className="mt-2">
                              {project.status}
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {project.links.github && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {project.links.demo && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Project Description</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                        {project.longDescription && (
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {project.longDescription}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={project.title}
                className="transition-all duration-800"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                    {project.links.github && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16"
        >
          <Card className="inline-block p-8 bg-card/50 backdrop-blur">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and contributions
            </p>
            <Button asChild>
              <a href="https://github.com/movindulochana" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View GitHub Profile
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}