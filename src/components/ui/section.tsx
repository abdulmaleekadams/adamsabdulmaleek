import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-5xl px-6 py-24 md:py-32 lg:py-40", className)}
    >
      {children}
    </section>
  );
}
