"use client";
import { AnimateIn } from "@/components/animate-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const About = () => {
  return (
    <Section id="about">
      <SectionHeading title="About" />
      <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
        <AnimateIn>
          <p>
            I studied Computer Science at Kwara State University where I
            graduated with Second Class Honours (Upper Division) in 2023. Six
            months into my internship at Corebank I was promoted to a full-time
            role — and I haven&apos;t slowed down since.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <p>
            Most of my career has been spent inside fintech and eCommerce. I
            think in data flows, failure modes, and what happens six months from
            now when traffic is 10x what it is today. The best code is the code
            you don&apos;t have to rewrite.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p>
            I&apos;m currently deepening my backend skills with Go — building
            toward high-performance microservices and cloud-native applications.
            I pick the right tool for the job, not the trendy one.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <p>
            Outside of shipping features, I care about raising the bar for the
            people around me. I&apos;ve mentored junior developers, run code
            reviews, and written internal documentation — because a stronger
            team compounds faster than any individual contribution.
          </p>
        </AnimateIn>
      </div>
    </Section>
  );
};

export default About;
