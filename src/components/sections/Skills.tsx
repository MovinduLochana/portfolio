import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/skillData";

export default function Skills() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Technologies I excel at
            </p>
          </motion.div>
          
          <Tabs defaultValue="programming" className="w-full max-w-4xl">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
              <TabsTrigger value="programming">Languages</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
            </TabsList>
            
            {Object.entries(skillsData).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-8">
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="flex flex-col items-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      variants={item}
                    >
                      <div className="h-12 w-12 mb-2 flex items-center justify-center">
                        <img src={skill.icon} alt={skill.name} className="max-h-12 max-w-12" />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}