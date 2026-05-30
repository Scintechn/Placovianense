export const business = {
  legalName: "Placovianense - Acabamentos Lda",
  brandName: "Placovianense",
  tagline: "Acabamentos",
  siteUrl: "https://placovianense.vercel.app",
  foundedYear: 2014,

  registeredOffice: {
    street: "R. das Rosas 71",
    postalCode: "4935-139",
    locality: "Darque, Viana do Castelo",
    country: "Portugal",
  },

  phone: {
    mobile: { display: "966 501 584", href: "tel:+351966501584" },
  },

  whatsapp: {
    display: "+351 966 501 584",
    number: "351966501584",
  },

  email: {
    display: "geral@placovianense.pt",
    href: "mailto:geral@placovianense.pt",
  },

  hours: {
    weekdays: { morning: "08:00–13:00", afternoon: "14:00–18:00" },
    weekendClosed: true,
  },

  service: {
    region: "Viana do Castelo, Braga, Porto e todo o Minho",
    radiusKm: 80,
  },

  social: {
    facebook: "https://www.facebook.com/placovianense",
  },

  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.7!2d-8.811741!3d41.686337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25b7d01fd07aaf%3A0x2ec178a64ed802a3!2sPlacovianense+-+Acabamentos+Lda!5e0!3m2!1spt-PT!2spt!4v1700000000000",
  mapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Placovianense+-+Acabamentos+Lda,R.+das+Rosas+71,+4935-139+Darque",

  signatureProjects: [
    {
      name: "PARC Viana — Luxury Apartments",
      role: "Tetos falsos, pladur e acabamentos premium",
    },
    {
      name: "E.B. 2,3 Dr. Pedro Barbosa",
      role: "Sistemas de pladur e isolamento acústico em ambiente escolar",
    },
  ],
} as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${business.whatsapp.number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function addressOneLine(): string {
  const o = business.registeredOffice;
  return `${o.street}, ${o.postalCode} ${o.locality}, ${o.country}`;
}
