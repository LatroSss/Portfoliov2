import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Skills from "./src/components/skills";
import Projects from "./src/components/projects";
import Contact from "./src/components/contact";
import Footer from "./src/components/footer";
import About from "./src/components/about";


export default function Home() {
  return (
    <>
   
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </>
  );
}
