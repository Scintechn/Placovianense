import { ImageResponse } from "next/og";
import { defaultLocale, getDictionary, isLocale, locales } from "@/lib/i18n";
import { business } from "@/lib/business";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${business.brandName} — Acabamentos`;

export function generateImageMetadata() {
  return locales.map((locale) => ({ id: locale }));
}

export default async function OG({
  params,
}: {
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0a1a33 0%, #173460 55%, #1f447a 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: "#f59e0b",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0a1a33",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            P
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>
              {business.brandName}
            </div>
            <div
              style={{
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 4,
                color: "#82a4ce",
              }}
            >
              {business.tagline}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 22,
              color: "#fbd388",
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            {dict.hero.eyebrow}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            {dict.hero.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#b1c8e4",
          }}
        >
          <span>{business.registeredOffice.locality}</span>
          <span style={{ color: "#f59e0b", fontWeight: 700 }}>
            {business.phone.mobile.display}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
