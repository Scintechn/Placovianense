import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  defaultLocale,
  getDictionary,
  hreflangMap,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";
import { whatsappLink } from "@/lib/business";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { ArrowRight, Check, MessageCircle } from "@/components/icons";

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
    title: dict.services_page.pageTitle,
    description: dict.services_page.pageDescription,
    alternates: {
      canonical: `/${locale}/services`,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangMap[l], `/${l}/services`]),
      ),
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const t = getDictionary(locale).services_page;

  return (
    <>
      <section className="bg-brand-900 text-white">
        <Container className="py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
            {locale === "pt" ? "Serviços" : "Services"}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {t.pageTitle.split("·")[0].trim()}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-brand-100 sm:text-lg">
            {t.intro}
          </p>
        </Container>
      </section>

      <Section variant="paper">
        <Container>
          <div className="space-y-6 sm:space-y-8">
            {t.details.map((d, i) => (
              <Reveal key={d.title} delay={i * 60}>
                <article className="rounded-3xl border border-ink-100 bg-white p-7 shadow-sm sm:p-9">
                  <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
                    <div>
                      <h2 className="font-display text-2xl font-bold text-ink-900">
                        {d.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">
                        {d.description}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {d.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm leading-relaxed text-ink-700 sm:text-base"
                        >
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <WhatsAppLink
              href={whatsappLink(
                locale === "pt"
                  ? "Olá Placovianense, gostaria de pedir um orçamento."
                  : "Hi Placovianense, I'd like to request a quote.",
              )}
              location="services_card"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent-400 px-6 text-sm font-semibold text-ink-900 transition-colors hover:bg-accent-300"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {locale === "pt"
                ? "Pedir orçamento por WhatsApp"
                : "Request a quote via WhatsApp"}
            </WhatsAppLink>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-900 hover:text-brand-700"
            >
              {locale === "pt" ? "Formulário de contacto" : "Contact form"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
