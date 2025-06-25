import { ThemeProvider } from "./context/ThemeProvider";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <main className="flex">
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </ThemeProvider>
    </main>
  );
}

export default App;
