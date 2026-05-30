"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { track } from "@vercel/analytics";

type Location = "header" | "final_cta" | "contact_direct" | "footer";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
  href: string;
  location: Location;
  children: ReactNode;
};

export function PhoneLink({ href, location, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      href={href}
      onClick={() => track("phone_click", { location })}
    >
      {children}
    </a>
  );
}
