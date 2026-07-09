
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Image from "next/image";

export default function About() {

  return (
    <section id="about" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 ">
          <p className="text-muted-foreground mb-4">Get to Know More</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square overflow-hidden rounded-2xl flex items-center justify-center">
                <Image className="w-full object-contain" src="/mypic.png" width={2152} height={3824} alt="profilePic"/>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Current Status Cards */}
            <div className="grid gap-4">
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">IT</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">CURRENT ACADEMIC STANDING</h3>
                    <p className="text-muted-foreground">Undergraduate Student</p>
                    <p className="text-sm font-medium">BSc. (Hons) in Information Technology</p>
                    <p className="text-sm text-muted-foreground">specializing in Software Engineering</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <span className="text-blue-500 font-bold text-sm">GPA</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">ACADEMIC EXCELLENCE</h3>
                    <p className="text-muted-foreground">GPA: 3.9 (Up to Year 2 Semester 1)</p>
                    <p className="text-sm font-medium">Dean&apos;s List for all semesters</p>
                    <p className="text-sm text-muted-foreground">Sri Lanka Institute of Information Technology</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Self-motivated results-driven Full Stack Cloud Native Developer with deep expertise 
                in designing and building scalable, event-driven, and secure distributed systems by 
                leveraging modern languages such as Java, JavaScript, Rust, Go, Python to build 
                real-time applications with high availability and performance.
              </p>
              <p>
                Strong fundamental knowledge in system design, microservices, and DevOps automation 
                and Adept at solving complex engineering challenges using a mix of tools across 
                multiple programming languages, cloud platforms, and infrastructure technologies.
              </p>
            </div>

            {/* Key Skills Tags */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Cloud Native</Badge>
              <Badge variant="secondary">Full Stack</Badge>
              <Badge variant="secondary">Microservices</Badge>
              <Badge variant="secondary">DevOps</Badge>
              <Badge variant="secondary">System Design</Badge>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-muted-foreground">imagine.</span>{" "}
            <span className="text-primary">believe.</span>
          </h3>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            achieve.
          </h3>
        </div>
      </div>
    </section>
  );
}