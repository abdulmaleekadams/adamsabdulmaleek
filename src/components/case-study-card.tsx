"use client";
import { urlForImage } from "@/sanity/lib/sanity.image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  project: {
    _id: string;
    title?: string | null;
    desc?: any;
    tags?: string[] | null;
    previewLink?: string | null;
    repoLink?: string | null;
    previewImage?: any;
    problem?: string | null;
    role?: string | null;
    impact?: string | null;
  };
}

export function CaseStudyCard({ project }: CaseStudyCardProps) {
  const imageUrl = project.previewImage
    ? urlForImage(project.previewImage)?.width(800).height(450).url()
    : null;

  const hasCaseStudy = project.problem || project.role || project.impact;

  return (
    <article className="w-[85vw] max-w-lg flex-shrink-0 snap-start md:w-[60vw] md:max-w-xl lg:max-w-2xl">
      {imageUrl && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
          <Image
            src={imageUrl}
            alt={project.title || "Project preview"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 672px"
          />
        </div>
      )}

      <div className="mt-5">
        <h3 className="text-lg font-semibold md:text-xl">{project.title}</h3>

        {/* Show desc from CMS as fallback when no case study fields */}
        {!hasCaseStudy && project.desc && (
          <div className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
            <PortableText value={project.desc} />
          </div>
        )}

        {project.tags && project.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {hasCaseStudy && (
          <div className="mt-4 space-y-3">
            {project.problem && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Problem
                </h4>
                <p className="mt-1 text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}
            {project.role && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Role
                </h4>
                <p className="mt-1 text-sm leading-relaxed">{project.role}</p>
              </div>
            )}
            {project.impact && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Impact
                </h4>
                <p className="mt-1 text-sm leading-relaxed">{project.impact}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 flex gap-4">
          {project.previewLink && (
            <Link
              href={project.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-4 transition-colors hover:text-purple"
            >
              Live Site
            </Link>
          )}
          {project.repoLink && (
            <Link
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-4 transition-colors hover:text-purple"
            >
              Repository
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
