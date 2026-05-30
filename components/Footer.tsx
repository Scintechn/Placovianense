import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n";
import { business, whatsappLink } from "@/lib/business";
import { Logo } from "./Logo";
import { WhatsAppLink } from "./WhatsAppLink";
import { PhoneLink } from "./PhoneLink";
import { MessageCircle, Phone, MapPin } from "./icons";

export function Footer({
  locale,
  t,
  nav,
}: {
  locale: Locale;
  t: Dictionary["footer"];
  nav: Dictionary["nav"];
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 bg-brand-900 text-brand-100">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm text-brand-200">
            {business.legalName}
          </p>
          <p className="mt-1 max-w-xs text-sm text-brand-200">
            <MapPin
              className="mr-1.5 inline h-4 w-4 align-[-2px]"
              aria-hidden="true"
            />
            {t.address}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href={`/${locale}`} className="hover:text-white">
                {nav.home}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/services`} className="hover:text-white">
                {nav.services}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-white">
                {nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            Contactos
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <WhatsAppLink
                href={whatsappLink()}
                location="footer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {business.phone.mobile.display}
              </WhatsAppLink>
            </li>
            <li>
              <PhoneLink
                href={business.phone.mobile.href}
                location="footer"
                className="inline-flex items-center gap-2 hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {business.phone.mobile.display}
              </PhoneLink>
            </li>
            <li>
              <a
                href={business.email.href}
                className="inline-flex items-center gap-2 hover:text-white"
              >
                {business.email.display}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-brand-200 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {business.legalName}. {t.rights}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href={`/${locale}/privacy-policy`}
              className="hover:text-white"
            >
              {t.privacy}
            </Link>
            <Link href={`/${locale}/terms`} className="hover:text-white">
              {t.terms}
            </Link>
            <a
              href="https://www.livroreclamacoes.pt/inicio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {t.complaints}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
