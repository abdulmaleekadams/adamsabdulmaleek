"use client";
import { CaseStudyCard } from "@/components/case-study-card";
import { AnimateIn } from "@/components/animate-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  getFeaturedProjects,
  getProjects,
} from "@/sanity/lib/sanity.queries";
import { useQuery } from "@tanstack/react-query";

const Projects = () => {
  const { data: featured } = useQuery({
    queryKey: ["featured-projects"],
    queryFn: () => getFeaturedProjects(),
  });

  const { data: allProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
    enabled: featured?.length === 0 || !featured,
  });

  const projects = featured && featured.length > 0 ? featured : allProjects;

  if (!projects || projects.length === 0) return null;

  return (
    <Section id="work">
      <SectionHeading
        title="Selected Work"
        subtitle="I don't just write code. I solve business problems with software."
      />

      <AnimateIn>
        <div className="relative">
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-background to-transparent" />

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide pr-6">
            {projects.map((project) => (
              <CaseStudyCard key={project._id} project={project} />
            ))}
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
};

export default Projects;
