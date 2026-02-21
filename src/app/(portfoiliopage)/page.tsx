import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  About,
  Capabilities,
  Contact,
  Experience,
  Footer,
  Hero,
  Projects,
} from "@/container";

export default function Home() {
  return (
    <main className="relative bg-background overflow-hidden">
      <FloatingNav />
      <Hero />
      <Projects />
      <Experience />
      <Capabilities />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
