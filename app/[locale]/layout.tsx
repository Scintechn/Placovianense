import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

import {
  defaultLocale,
  getDictionary,
  hreflangMap,
  isLocale,
  locales,
} from "@/lib/i18n";
import { addressOneLine, business, whatsappLink } from "@/lib/business";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-runtime",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display-runtime",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

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
    metadataBase: new URL(business.siteUrl),
    title: {
      default: dict.meta.siteTitle,
      template: `%s · ${business.brandName}`,
    },
    description: dict.meta.siteDescription,
    applicationName: business.brandName,
    authors: [{ name: business.legalName }],
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        locales.map((l) => [hreflangMap[l], `/${l}`]),
      ),
    },
    openGraph: {
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      url: `/${locale}`,
      siteName: business.brandName,
      locale: hreflangMap[locale].replace("-", "_"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);
  const fabMessage =
    locale === "pt"
      ? "Olá Placovianense, gostaria de pedir um orçamento."
      : "Hi Placovianense, I'd like to request a quote.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: business.legalName,
    alternateName: business.brandName,
    url: business.siteUrl,
    telephone: business.phone.mobile.href.replace("tel:", ""),
    email: business.email.href.replace("mailto:", ""),
    image: `${business.siteUrl}/opengraph-image`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.registeredOffice.street,
      postalCode: business.registeredOffice.postalCode,
      addressLocality: business.registeredOffice.locality,
      addressCountry: "PT",
    },
    areaServed: [
      { "@type": "City", name: "Viana do Castelo" },
      { "@type": "City", name: "Braga" },
      { "@type": "City", name: "Porto" },
      { "@type": "AdministrativeArea", name: "Minho" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [business.social.facebook],
    description: dict.meta.siteDescription,
    foundingDate: String(business.foundedYear),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phone.mobile.href.replace("tel:", ""),
      contactType: "customer service",
      availableLanguage: ["Portuguese", "English"],
    },
    knowsAbout: [
      "Pladur",
      "Gesso cartonado",
      "Tetos falsos",
      "Capoto",
      "Isolamento térmico",
      "Isolamento acústico",
      "Reabilitação de fachadas",
      "Pintura",
    ],
  };

  return (
    <html lang={locale === "pt" ? "pt-PT" : "en-GB"} className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="min-h-screen bg-paper text-ink-900 antialiased">
        <Header
          locale={locale}
          t={dict.nav}
          switcherLabels={{
            pt: dict.localeSwitcher.pt,
            en: dict.localeSwitcher.en,
            label: dict.localeSwitcher.label,
          }}
        />
        <main id="main">{children}</main>
        <Footer locale={locale} t={dict.footer} nav={dict.nav} />
        <WhatsAppFab message={fabMessage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* JSON-LD for the registered office address as a separate Place node */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              name: business.brandName,
              address: addressOneLine(),
              hasMap: business.mapDirectionsUrl,
              telephone: business.phone.mobile.href.replace("tel:", ""),
              potentialAction: {
                "@type": "CommunicateAction",
                target: whatsappLink(),
              },
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
