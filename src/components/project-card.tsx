"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { useModal } from "@/provider/modal-provider";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import ProjectModal from "./project-modal";

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const ProjectCard = ({
  card,
  index,
  layout = false,
  carouselRef,
  isMobile,
  setCurrentIndex,
}: {
  card: Card;
  index: number;
  layout?: boolean;
  setCurrentIndex?: (index: number) => void;
  isMobile: () => boolean;
  carouselRef: React.RefObject<HTMLDivElement>;
}) => {
  const { setOpen } = useModal();

  const handleOpen = () => {
    setOpen(
      <ProjectModal
        carouselRef={carouselRef}
        isMobile={isMobile}
        setCurrentIndex={setCurrentIndex}
      >
        Project details
      </ProjectModal>,
      index
    );
  };

  return (
    <>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
