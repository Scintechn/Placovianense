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
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

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
    title: dict.terms.pageTitle,
    description: dict.terms.pageDescription,
    alternates: {
      canonical: `/${locale}/terms`,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangMap[l], `/${l}/terms`]),
      ),
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const t = getDictionary(locale).terms;

  return (
    <Section variant="paper">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
          {t.pageTitle.split("·")[0].trim()}
        </h1>
        <p className="mt-2 text-sm text-ink-500">{t.updated}</p>

        <div className="mt-10 space-y-10">
          {t.body.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-bold text-ink-900">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-ink-700">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}
