

import Navigation from "@/components/layout/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Achievements from "@/components/sections/achievements";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {

  return (
    <div className="min-h-screen">
      
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
<p>

My background and attitude towards learning software changes me from others
When you look at my CV there are so many skills that would be questionable if I have truly understood them or I just skimmed through.
I started programming when I was 11 years old, inspired by how websites work, I learnt basic html and Js, year later I started to learn about programming microprocessors with C++. It has been 10 years since then. So, I had nothing but time to experience various tech stacks
I always consider approaching a software solution to some personal rules,
Plan the architecture beforehand, research similar solutions
Read latest Documentations on the Tech Stack that I’m going to use
Always be careful to write performance code, even if it cost clarity and be explicitly as possible and practice standard security practices

These rules always help me write efficient code, these reasons makes me unique


</p>
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="achievements">
          <Achievements />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
