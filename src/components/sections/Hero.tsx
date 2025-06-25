import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1 
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hi 👋, I'm <span className="text-primary">Movindu Lochana</span>
              </motion.h1>
              <motion.p 
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Passionate and results-driven Full Stack Developer with expertise in Java, Python, Go, and JavaScript.
              </motion.p>
            </div>
            <motion.div 
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="px-6">My Projects</Button>
              <Button variant="outline" className="px-6">Contact Me</Button>
            </motion.div>
          </div>
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary-foreground/20">
              {/* You can add your profile image here */}
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary-foreground">ML</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}