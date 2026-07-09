import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

export default function Contact() {

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always interested in hearing about new opportunities, collaborations, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">EMAIL</h4>
                    <a 
                      href="mailto:wmovindulochana@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      wmovindulochana@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* LinkedIn */}
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LINKEDIN</h4>
                    <a 
                      href="https://linkedin.com/in/movindulochana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </Card>

              {/* GitHub */}
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-500/10 flex items-center justify-center">
                    <Github className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">GITHUB</h4>
                    <a 
                      href="https://github.com/movindulochana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      View my repositories
                    </a>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">BASED IN</h4>
                    <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com/in/movindulochana" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/movindulochana" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="mailto:wmovindulochana@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="animate-fadeInRight"
            style={{ animationDelay: '0.4s' }}
          >
            <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Let's work together!" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or idea..."
                    className="min-h-30"
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Note:</strong> This form is currently for demonstration purposes. 
                  Please use the contact information above to reach me directly.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer Quote */}
        <div
          className="text-center mt-20 animate-fadeInUp"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-medium text-muted-foreground italic leading-relaxed">
              &quot;There is no time for caution&quot;
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Ready to build something amazing together
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}