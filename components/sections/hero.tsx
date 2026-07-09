
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-background via-background to-muted/20 relative overflow-hidden">

      <div className="container mx-auto relative">
        <div className="text-center space-y-8">
          {/* Main Content */}
          <div
            className="space-y-6 opacity-0 animate-fadeInUp animation-delay-200"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              MOVINDU LOCHANA
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              CLOUD NATIVE AND FULL STACK DEVELOPER
            </p>

    

            {/* Action Buttons */}
            <div
              className="flex flex-wrap justify-center gap-4 mt-8 opacity-0 animate-fadeInUp animation-delay-800"
            >
              <Button size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact Info
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center gap-4 mt-6 opacity-0 animate-fadeIn animation-delay-1000"
            >
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com/in/movindulochana" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/movindulochana" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a href="mailto:wmovindulochana@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute inset-0 top-full left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeInUp animation-delay-1200">
            <p className="text-sm text-muted-foreground mb-2">Get to Know More</p>
            <div className="flex flex-col items-center animate-bounce">
              <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
                <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
          