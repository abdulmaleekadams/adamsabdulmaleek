import Hero from '@/container/hero/hero';
import About from '@/container/about/about';
import Skills from '@/container/skills/skills';
import Projects from '@/container/projects/projects';
import Contact from '@/container/contact/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}


