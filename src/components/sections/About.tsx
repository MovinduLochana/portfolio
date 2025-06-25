import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Full Stack Developer & DevOps Engineer</h2>
            <p className="text-muted-foreground md:text-lg">
              I'm a passionate and results-driven Full Stack Developer with a robust skill set in Java, Python, Go, and JavaScript. 
              With a solid background in DevOps practices and a deep understanding of CI/CD pipelines, Kubernetes, and Docker, 
              I excel at automating deployments and ensuring seamless integration and delivery of software updates.
            </p>
            <p className="text-muted-foreground md:text-lg">
              Proficient with tools like Jenkins, GitLab CI, and Ansible, I build scalable, high-performance backend systems with 
              expertise in RESTful API design and microservices architecture. I have strong knowledge of system design principles and 
              am capable of designing robust and scalable systems that address complex requirements while enhancing performance and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="gap-2">
                <Download size={16} />
                Download Resume
              </Button>
              <Button variant="outline">View My Work</Button>
            </div>
          </motion.div>
          <motion.div 
            className="relative h-[400px] overflow-hidden rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 p-6">
                <div className="flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <span className="text-4xl font-bold text-primary">5+</span>
                  <span className="text-sm text-muted-foreground text-center">Years Experience</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <span className="text-4xl font-bold text-primary">50+</span>
                  <span className="text-sm text-muted-foreground text-center">Projects Completed</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <span className="text-4xl font-bold text-primary">10+</span>
                  <span className="text-sm text-muted-foreground text-center">Technologies</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <span className="text-4xl font-bold text-primary">24/7</span>
                  <span className="text-sm text-muted-foreground text-center">Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}