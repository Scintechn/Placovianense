import { business } from "@/lib/business";
import { cn } from "@/lib/cn";

type Tone = "dark" | "light";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const mark = tone === "dark" ? "text-brand-900" : "text-white";
  const tag = tone === "dark" ? "text-ink-500" : "text-brand-200";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className={mark} />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            mark,
          )}
        >
          {business.brandName}
        </span>
        <span className={cn("text-[11px] uppercase tracking-[0.18em]", tag)}>
          {business.tagline}
        </span>
      </div>
    </div>
  );
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
      fill="none"
    >
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        rx="8"
        className="fill-accent-400"
      />
      <path
        d="M11 27V13h6.4c3 0 4.9 1.6 4.9 4.2 0 2.7-1.9 4.3-4.9 4.3h-3v5.5H11Zm3.4-8.2h2.6c1.4 0 2.2-.6 2.2-1.7 0-1-.8-1.6-2.2-1.6h-2.6v3.3ZM23 27V13h2.8l4.8 8.8V13H33v14h-2.6L25.5 18v9H23Z"
        fill="currentColor"
      />
    </svg>
  );
}
