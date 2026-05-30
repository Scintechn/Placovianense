import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "paper" | "paper-warm" | "brand" | "ink";

export function Section({
  className,
  variant = "paper",
  children,
  ...rest
}: HTMLAttributes<HTMLElement> & { variant?: Variant }) {
  const variants: Record<Variant, string> = {
    paper: "bg-paper text-ink-900",
    "paper-warm": "bg-paper-warm text-ink-900",
    brand: "bg-brand-900 text-white",
    ink: "bg-ink-900 text-white",
  };

  return (
    <section
      className={cn(
        "relative py-16 sm:py-24",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
