"use client";
import { ProjectCard } from "@/components/project-card";
import { CardCarousel } from "@/components/ui/card-carousel";
import { getProjects } from "@/sanity/lib/sanity.queries";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

const Projects = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });

  if (!data || isLoading) return null;

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  const cards = data?.map((card, index) => (
    <ProjectCard
      setCurrentIndex={setCurrentIndex}
      carouselRef={carouselRef}
      isMobile={isMobile}
      key={card._id}
      card={card}
      index={index}
    />
  ));

  return (
    <section className="w-full h-full py-20 relative" id="projects">
      <h2 className="heading">My Selected Work</h2>
      <CardCarousel carouselRef={carouselRef} items={cards} />
    </section>
  );
};

export default Projects;
