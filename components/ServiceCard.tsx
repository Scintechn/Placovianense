import {
  Building,
  Layers,
  Paintbrush,
  Thermometer,
  Trowel,
  Wrench,
} from "./icons";
import type { ServiceIcon } from "@/lib/i18n/types";

const map: Record<ServiceIcon, typeof Layers> = {
  layers: Layers,
  thermometer: Thermometer,
  trowel: Trowel,
  paint: Paintbrush,
  building: Building,
  wrench: Wrench,
};

export function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ServiceIcon;
}) {
  const Icon = map[icon];

  return (
    <article className="group relative flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-accent-200 hover:shadow-lg sm:p-7">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-accent-400 group-hover:text-ink-900">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
    </article>
  );
}
