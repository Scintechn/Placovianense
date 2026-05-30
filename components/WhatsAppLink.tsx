"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { track } from "@vercel/analytics";

type Location =
  | "fab"
  | "header"
  | "hero_primary"
  | "services_card"
  | "final_cta"
  | "contact_direct"
  | "footer";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  href: string;
  location: Location;
  children: ReactNode;
};

export function WhatsAppLink({ href, location, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location })}
    >
      {children}
    </a>
  );
}
