"use client";
import { AnimateIn } from "@/components/animate-in";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-auto flex min-h-svh max-w-5xl items-center px-6 pt-20">
      <div>
        <AnimateIn>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            I build systems that scale.
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Full-stack software developer with 5 years of experience shipping
            scalable fintech and eCommerce solutions. React, Next.js, TypeScript,
            Node.js, AWS, Go.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p className="mt-3 text-sm text-muted-foreground">
            Based in Lagos, Nigeria. Shipping globally.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.45}>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="#work"
              className="inline-flex h-10 items-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View Selected Work
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-10 items-center rounded-md border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Get in Touch
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Hero;
