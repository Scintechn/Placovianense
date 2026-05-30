"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { ServiceCard } from "./ServiceCard";
import type { ServiceIcon } from "@/lib/i18n/types";

export function ServiceCardLink({
  slug,
  href,
  title,
  description,
  icon,
}: {
  slug: string;
  href: string;
  title: string;
  description: string;
  icon: ServiceIcon;
}) {
  return (
    <Link
      href={href}
      onClick={() => track("service_card_open", { service_id: slug })}
      className="block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <ServiceCard title={title} description={description} icon={icon} />
    </Link>
  );
}
