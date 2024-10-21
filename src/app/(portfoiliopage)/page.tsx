import { FloatingNav } from "@/components/ui/floating-navbar";
import { About, Experience, Footer, Hero, Projects } from "@/container";
import Approach from "@/container/Approach";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
