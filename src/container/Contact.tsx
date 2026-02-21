"use client";
import { AnimateIn } from "@/components/animate-in";
import { Section } from "@/components/ui/section";
import { socialLinks } from "@/data";

const Contact = () => {
  return (
    <Section id="contact">
      <AnimateIn>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Let&apos;s build something.
        </h2>
      </AnimateIn>

      <AnimateIn delay={0.1}>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          I&apos;m available for full-time roles, contract work, and technical
          consulting. Open to remote opportunities globally.
        </p>
      </AnimateIn>

      <AnimateIn delay={0.2}>
        <div className="mt-8 space-y-3">
          <a
            href="mailto:abdulmaleeekadams@gmail.com"
            className="text-sm font-medium underline underline-offset-4 transition-colors hover:text-purple"
          >
            abdulmaleeekadams@gmail.com
          </a>
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
};

export default Contact;
