"use client";

import { Timeline } from "@/components/ui/timeline";
import { getExperience } from "@/sanity/lib/sanity.queries";
import { useQuery } from "@tanstack/react-query";

const Experience = () => {
  const { data: experience, isLoading } = useQuery({
    queryKey: ["experience"],
    queryFn: () => getExperience(),
  });

  if (isLoading) return null;

  if (!experience) return null;

  return (
    <section className="w-full h-full py-20 relative" id="experience">
      <h2 className="heading">My Work Experience</h2>
      <Timeline data={experience} />
    </section>
  );
};

export default Experience;
