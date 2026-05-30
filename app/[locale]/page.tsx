import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  defaultLocale,
  getDictionary,
  hreflangMap,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";
import { business, whatsappLink } from "@/lib/business";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCardLink } from "@/components/ServiceCardLink";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { PhoneLink } from "@/components/PhoneLink";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  Shield,
  Sparkles,
} from "@/components/icons";
import type { PillarIcon } from "@/lib/i18n/types";

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
    title: dict.meta.pageTitle,
    description: dict.meta.pageDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangMap[l], `/${l}`]),
      ),
    },
  };
}

// Swap with a real Placovianense project photo when delivered.
// Wide landscape, ≥ 2400px, focal point upper-third.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=85&w=2400&auto=format&fit=crop";
const HERO_IMAGE_ALT_PT =
  "Interior moderno com tetos falsos e acabamentos em pladur";
const HERO_IMAGE_ALT_EN =
  "Modern interior with suspended ceilings and drywall finishes";

const pillarIconMap: Record<PillarIcon, typeof Award> = {
  award: Award,
  ruler: Ruler,
  mapPin: MapPin,
};

const badgeIconMap = {
  shield: Shield,
  ruler: Ruler,
  clock: Clock,
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const t = getDictionary(locale);

  const heroMessage =
    locale === "pt"
      ? "Olá Placovianense! Vi a vossa página e gostaria de pedir um orçamento."
      : "Hi Placovianense! I saw your page and I'd like a quote.";
  const servicesMessage =
    locale === "pt"
      ? "Olá Placovianense, gostaria de mais detalhes sobre os serviços."
      : "Hi Placovianense, I'd like more details about your services.";

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-brand-900 text-white">
        {/* Full-bleed photo */}
        <Image
          src={HERO_IMAGE}
          alt={locale === "pt" ? HERO_IMAGE_ALT_PT : HERO_IMAGE_ALT_EN}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />
        {/* Dark navy overlay — keep text legible */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900/90 via-brand-900/80 to-ink-900/90"
        />
        {/* Warm accent wash, top-right */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_85%_5%,_var(--color-accent-400),_transparent_55%)]"
        />

        <Container className="relative z-10 grid gap-12 py-16 sm:py-24 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-14">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand-100 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent-300" aria-hidden="true" />
              {t.hero.eyebrow}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              {t.hero.headline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
              {t.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <WhatsAppLink
                href={whatsappLink(heroMessage)}
                location="hero_primary"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent-400 px-7 text-base font-semibold text-ink-900 shadow-lg shadow-accent-400/30 transition-all hover:bg-accent-300"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {t.hero.primaryCta}
              </WhatsAppLink>
              <Link
                href={`/${locale}/services`}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                {t.hero.secondaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {t.hero.trustBadges.map((b) => {
                const Icon = badgeIconMap[b.icon];
                return (
                  <li
                    key={b.label}
                    className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-brand-100 backdrop-blur"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-400/15 text-accent-300">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {b.label}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/5] w-full max-w-md justify-self-end overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                    {locale === "pt" ? "Obras assinadas" : "Signature works"}
                  </p>
                  <div className="mt-4 space-y-4">
                    {business.signatureProjects.map((p) => (
                      <div
                        key={p.name}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <p className="font-display text-base font-semibold text-white">
                          {p.name}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-brand-100">
                          {p.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-brand-900/60 p-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-brand-200">
                    {locale === "pt" ? "Resposta direta" : "Direct reply"}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-white">
                    {business.phone.mobile.display}
                  </p>
                  <p className="mt-1 text-xs text-brand-200">
                    {locale === "pt"
                      ? "Atendimento direto em dias úteis."
                      : "Direct line on weekdays."}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-ink-100 bg-paper-warm">
        <Container className="grid gap-6 py-10 sm:grid-cols-3">
          {t.trust.stats.map((s) => (
            <div
              key={s.label}
              className="flex items-baseline gap-4 border-l-2 border-accent-400 pl-4"
            >
              <span className="font-display text-4xl font-extrabold text-brand-900 sm:text-5xl">
                {s.value}
              </span>
              <span className="text-sm font-medium text-ink-500 sm:text-base">
                {s.label}
              </span>
            </div>
          ))}
        </Container>
      </section>

      {/* SERVICES */}
      <Section variant="paper" id="services">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
                {locale === "pt" ? "Serviços" : "Services"}
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
                {t.services.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                {t.services.intro}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s, i) => {
              // 'manutencao' has no dedicated section on /services; link without anchor.
              const href =
                s.slug === "manutencao"
                  ? `/${locale}/services`
                  : `/${locale}/services#${s.slug}`;
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <ServiceCardLink
                    slug={s.slug}
                    href={href}
                    title={s.title}
                    description={s.description}
                    icon={s.icon}
                  />
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppLink
              href={whatsappLink(servicesMessage)}
              location="services_card"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t.services.cta}
            </WhatsAppLink>
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-900 hover:text-brand-700"
            >
              {locale === "pt" ? "Ver detalhe técnico" : "See technical detail"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* PILLARS */}
      <Section variant="paper-warm" id="why">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
                {locale === "pt" ? "Confiança" : "Trust"}
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
                {t.pillars.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                {t.pillars.intro}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.pillars.items.map((p, i) => {
              const Icon = pillarIconMap[p.icon];
              return (
                <Reveal key={p.title} delay={i * 90}>
                  <article className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-sm">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-400 text-ink-900">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {p.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* PROCESS */}
      <Section variant="paper" id="process">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
                {locale === "pt" ? "Processo" : "Process"}
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
                {t.process.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                {t.process.intro}
              </p>
            </div>
          </Reveal>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <li className="relative h-full rounded-3xl border border-ink-100 bg-paper-warm p-7">
                  <span className="font-display text-5xl font-extrabold text-accent-400/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* REFERENCES */}
      <Section variant="paper-warm" id="references">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-500">
                {locale === "pt" ? "Portefólio" : "Portfolio"}
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
                {t.references.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                {t.references.intro}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {t.references.items.map((ref, i) => (
              <Reveal key={ref.name} delay={i * 90}>
                <article className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-sm">
                  <CheckCircle2
                    className="h-6 w-6 text-accent-500"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                    {ref.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {ref.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-xs text-ink-500">
            {t.references.note}
          </p>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-900 via-brand-900 to-ink-900 text-white">
        <Container className="relative z-10 grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                {t.finalCta.headline}
              </h2>
              <p className="mt-4 max-w-xl text-base text-brand-100 sm:text-lg">
                {t.finalCta.subheadline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink
                  href={whatsappLink(heroMessage)}
                  location="final_cta"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent-400 px-7 text-base font-semibold text-ink-900 shadow-lg shadow-accent-400/20 transition-all hover:bg-accent-300"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  {t.finalCta.primaryCta}
                </WhatsAppLink>
                <PhoneLink
                  href={business.phone.mobile.href}
                  location="final_cta"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {t.finalCta.secondaryCta}
                </PhoneLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                {locale === "pt" ? "Sediados em" : "Based in"}
              </p>
              <p className="mt-3 font-display text-xl font-semibold">
                {business.registeredOffice.locality}
              </p>
              <p className="mt-1 text-sm text-brand-100">
                {business.registeredOffice.street},{" "}
                {business.registeredOffice.postalCode}
              </p>
              <div className="mt-6 space-y-2 text-sm text-brand-100">
                <p>
                  <span className="text-brand-200">
                    {locale === "pt" ? "Telefone" : "Phone"}:
                  </span>{" "}
                  <span className="font-semibold text-white">
                    {business.phone.mobile.display}
                  </span>
                </p>
                <p>
                  <span className="text-brand-200">
                    {locale === "pt" ? "Horário" : "Hours"}:
                  </span>{" "}
                  <span className="font-semibold text-white">
                    {business.hours.weekdays.morning} ·{" "}
                    {business.hours.weekdays.afternoon}
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
