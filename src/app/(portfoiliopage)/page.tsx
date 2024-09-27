import { FloatingNav } from "@/components/ui/floating-navbar";
import { About, Experience, Hero, Projects } from "@/container";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            },
          ]}
        />
        <Hero />
        <About />
        <Projects />
        <Experience />
      </div>
    </main>
  );
}
