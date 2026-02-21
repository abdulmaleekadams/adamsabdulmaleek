"use client";
import { AnimateIn } from "@/components/animate-in";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const experiences = [
  {
    role: "Software Engineer",
    company: "SoftGEM Technologies",
    location: "Lagos, Nigeria",
    type: "Hybrid",
    period: "Jan 2025 — Present",
    highlights: [
      "Architected multi-tenant finance platform with 6+ isolated microservices including KYC, Core Banking, Loan Management, and VAS",
      "Built eCommerce solution for MarketSquare with multi-vendor management, real-time order tracking, and payment integration",
      "Leveraged AWS (S3, Lambda, EC2) reducing infrastructure costs by 25%",
      "Achieved 99.9% system uptime through service isolation and independent scaling",
    ],
  },
  {
    role: "Software Developer",
    company: "Corebank Nigeria",
    location: "Lagos, Nigeria",
    type: "Remote",
    period: "Mar 2023 — Jul 2025",
    highlights: [
      "Engineered multi-tenant payroll system with core banking integration serving 100+ companies",
      "Automated loan management workflows reducing processing time by 40%",
      "Redesigned company website increasing user engagement by 60% and reducing bounce rate by 25%",
      "Mentored 5+ junior developers in React best practices and code review standards",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Luday SE",
    location: "Abuja, Nigeria",
    type: "Onsite",
    period: "Mar 2024 — Jan 2025",
    highlights: [
      "Led development of full-featured eCommerce platform with secure checkout and order tracking",
      "Built internal project management platform reducing coordination costs by 30%",
      "Implemented i18n and multi-language support expanding accessibility to 10+ countries",
      "Maintained 8+ client websites reducing bug reports by 45%",
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <SectionHeading title="Experience" />
      <div className="space-y-12 md:space-y-16">
        {experiences.map((exp, i) => (
          <AnimateIn key={exp.company} delay={i * 0.1}>
            <div className="grid gap-1 md:grid-cols-[200px_1fr] md:gap-10">
              <div className="mb-2 md:mb-0">
                <p className="text-sm text-muted-foreground">{exp.period}</p>
                <p className="text-xs text-muted-foreground">
                  {exp.location} · {exp.type}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-purple">{exp.company}</p>
                <ul className="mt-3 space-y-2">
                  {exp.highlights.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm leading-relaxed text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
