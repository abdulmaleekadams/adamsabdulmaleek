"use client";
import { AnimateIn } from "@/components/animate-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/data";

const Capabilities = () => {
  return (
    <Section id="capabilities">
      <SectionHeading title="Capabilities" />
      <div className="grid grid-cols-1 border border-border md:grid-cols-2">
        {capabilities.map((cap, i) => (
          <AnimateIn key={cap.title} delay={i * 0.1} className="h-full">
            <div className="h-full border border-border p-8 md:p-10">
              <h3 className="text-lg font-semibold">{cap.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {cap.description}
              </p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
};

export default Capabilities;
