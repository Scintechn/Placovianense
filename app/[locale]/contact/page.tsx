import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  defaultLocale,
  getDictionary,
  hreflangMap,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";
import { addressOneLine, business, whatsappLink } from "@/lib/business";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { PhoneLink } from "@/components/PhoneLink";
import { Clock, MapPin, MessageCircle, Phone } from "@/components/icons";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  return {
    title: dict.contact.pageTitle,
    description: dict.contact.pageDescription,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangMap[l], `/${l}/contact`]),
      ),
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const t = getDictionary(locale).contact;

  return (
    <>
      <section className="bg-brand-900 text-white">
        <Container className="py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            {locale === "pt" ? "Contacto" : "Contact"}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {locale === "pt"
              ? "Falemos sobre a sua obra"
              : "Let's talk about your project"}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-100 sm:text-lg">
            {t.intro}
          </p>
        </Container>
      </section>

      <Section variant="paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
            <div>
              <ContactForm t={t.form} locale={locale} />
            </div>

            <aside className="space-y-5">
              <div className="rounded-3xl border border-ink-100 bg-paper-warm p-6 shadow-sm sm:p-7">
                <h2 className="font-display text-lg font-bold text-ink-900">
                  {t.direct.title}
                </h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      {t.direct.whatsapp}
                    </p>
                    <WhatsAppLink
                      href={whatsappLink()}
                      location="contact_direct"
                      className="mt-1 inline-flex items-center gap-2 font-semibold text-brand-900 hover:text-accent-600"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      {business.phone.mobile.display}
                    </WhatsAppLink>
                  </li>
                  <li>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      {t.direct.phone}
                    </p>
                    <PhoneLink
                      href={business.phone.mobile.href}
                      location="contact_direct"
                      className="mt-1 inline-flex items-center gap-2 font-semibold text-brand-900 hover:text-accent-600"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {business.phone.mobile.display}
                    </PhoneLink>
                  </li>
                  <li>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      {t.direct.email}
                    </p>
                    <a
                      href={business.email.href}
                      className="mt-1 inline-flex items-center gap-2 font-semibold text-brand-900 hover:text-accent-600"
                    >
                      {business.email.display}
                    </a>
                  </li>
                  <li>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      {t.direct.hours}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-2 text-ink-900">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {business.hours.weekdays.morning} ·{" "}
                      {business.hours.weekdays.afternoon}
                    </p>
                  </li>
                  <li>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      {t.direct.address}
                    </p>
                    <p className="mt-1 inline-flex items-start gap-2 text-ink-900">
                      <MapPin
                        className="mt-0.5 h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{addressOneLine()}</span>
                    </p>
                    <a
                      href={business.mapDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs font-semibold text-accent-600 hover:text-accent-500"
                    >
                      {locale === "pt"
                        ? "Abrir no Google Maps →"
                        : "Open in Google Maps →"}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-sm">
                <iframe
                  src={business.mapEmbedSrc}
                  title={`${business.brandName} — ${business.registeredOffice.locality}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0"
                />
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
