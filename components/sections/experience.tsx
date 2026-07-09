
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  projects: {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
  }[];
  companyLogo: string;
}

const experiences: Experience[] = [
  {
    title: "Freelance Developer",
    company: "Various Clients",
    location: "Remote",
    duration: "2023 - Present",
    type: "Freelance",
    description: "Delivering full-stack solutions for international clients",
    companyLogo: "💼",
    projects: [
      {
        title: "ERP System for Naturista Ceylon (Pvt) Ltd (Sri Lanka)",
        description: "Conducted in-depth analysis of Enterprise Resource Planning (ERP) systems, identifying and documenting all core, advanced, and specialized modules including Financial Management, Human Resources, Supply Chain, Inventory, Procurement, Sales, CRM, Manufacturing, Warehouse Management. Outlined modern enhancements such as AI/ML integration, IoT support, cloud deployment, mobile access, and API connectivity.",
        technologies: ["Java", "Spring Boot", "Next.js", "Python", "PyTorch", "React Native", "PostgreSQL", "AWS"],
      },
      {
        title: "DNA Counseling Automation System for DNA Longevity (UAE, Dubai)",
        description: "AI-Powered Genetic Counseling Management System, A platform to automate medical documentation for genetic counselors. Engineered a custom LLM pipeline that transforms raw session transcripts into structured clinical summaries. Architected the system with a focus on HIPAA compliance, incorporating end-to-end encryption, secure audit logs, and BAA-compliant cloud infrastructure.",
        technologies: ["Next.js", "PostgreSQL", "GCP", "OpenAI"],
      },
    ],
  },
];

export default function Experience() {

  return (
    <section id="experience" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16 animate-fadeInUp"
        >
          <p className="text-muted-foreground mb-4">Browse My Recent</p>
          <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Company Info */}
                  <div className="lg:w-1/3 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                        {experience.companyLogo}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{experience.company}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {experience.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        📍 {experience.location}
                      </p>
                      <p className="flex items-center gap-2">
                        📅 {experience.duration}
                      </p>
                    </div>

                    <h4 className="font-semibold text-lg text-primary">
                      {experience.title}
                    </h4>
                    
                    <p className="text-muted-foreground">
                      {experience.description}
                    </p>
                  </div>

                  {/* Projects */}
                  <div className="lg:w-2/3 space-y-6">
                    {experience.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <h4 className="font-semibold text-lg">
                            {project.title}
                          </h4>
                          {project.link && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        
                        {projectIndex < experience.projects.length - 1 && (
                          <hr className="border-border/50" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Academic Projects Section */}
        <div
          className="mt-16"
          style={{ animationDelay: '0.6s' }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">Academic Projects</h3>
          
          <div className="grid gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-lg">Deep Learning for Melanoma Classification</h4>
                  <Badge variant="secondary">Year 2 Sem 1</Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  Developed a binary classification pipeline using the ISIC 2020 dataset (33k+ images) to detect malignant skin lesions. 
                  Addressed extreme class imbalance (1.8% positive rate) by implementing weighted BCE loss and AUC-ROC as the primary performance metric.
                  Evaluated and benchmarked 6 distinct architectures (ResNet, DenseNet, EfficientNet-B4/B7, ViT, and ResNeXt).
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">PyTorch</Badge>
                  <Badge variant="outline">Scikit-Learn</Badge>
                  <Badge variant="outline">Matplotlib</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-lg">Bike Rental System</h4>
                  <Badge variant="secondary">Year 1 Sem 2</Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  Architected a secure user management system for bike rentals with payment processing. 
                  Rich UI/UX created with Next.js (React), backend written in Java Spring Boot with Data JPA.
                  Spring Security with custom JWT Filter for Authorization, BCrypt password hashing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Java</Badge>
                  <Badge variant="outline">Spring Boot</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">Shadcn UI</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-lg">Home Automation System</h4>
                  <Badge variant="secondary">Year 1 Sem 1</Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  IoT solution to enhance convenience and save energy. Continuously monitors temperature, detects rain and automatically shuts off windows. 
                  Prevents gas and fire hazards, intrusion detection (PIR) with RFID security control. Mobile app for monitoring and control.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">NodeMCU (C++)</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">IoT</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}