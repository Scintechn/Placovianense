import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    siteTitle: "Placovianense — Drywall, Ceilings & Finishes | Viana do Castelo, Portugal",
    siteDescription:
      "Specialists in drywall, suspended ceilings, thermal & acoustic insulation, plaster and painting in Northern Portugal. Free WhatsApp quote.",
    pageTitle: "Placovianense — Drywall, Ceilings & Finishes in Northern Portugal",
    pageDescription:
      "Over 10 years delivering premium interior finishes across the Minho region. Drywall, ETICS, plaster, paint — with millimetre precision and on schedule.",
  },
  nav: {
    home: "Home",
    services: "Services",
    contact: "Contact",
    callCta: "Call",
    whatsappCta: "WhatsApp",
    skipToContent: "Skip to content",
  },
  hero: {
    eyebrow: "Premium finishes · Viana do Castelo",
    headline: "Drywall, suspended ceilings & premium finishes in Northern Portugal",
    subheadline:
      "Placovianense specialises in suspended ceilings, partitions, thermal and acoustic insulation, painting, ETICS, plaster and projected renders — over 10 years signing premium finishes across luxury apartments, family homes and public buildings in Northern Portugal.",
    primaryCta: "Get a free quote on WhatsApp",
    secondaryCta: "Explore services",
    trustBadges: [
      { icon: "shield", label: "10+ years on site" },
      { icon: "ruler", label: "Millimetre precision" },
      { icon: "clock", label: "Deadlines respected" },
    ],
  },
  trust: {
    stats: [
      { value: "10+", label: "Years of activity" },
      { value: "200+", label: "Projects delivered" },
      { value: "100%", label: "In-house crew" },
    ],
  },
  services: {
    title: "Placovianense specialties",
    tagline:
      "Suspended Ceilings · Partitions · Thermal Insulation · Acoustic Insulation · Painting · ETICS · Plaster & Projected Renders",
    intro:
      "From the drywall skeleton to the last coat of paint, we handle every stage of your interior and exterior finishes with the same crew.",
    items: [
      {
        slug: "pladur",
        title: "Drywall systems & partitions",
        description:
          "Gypsum board, smart partitions, technical walls and linear or flat suspended ceilings.",
        icon: "layers",
      },
      {
        slug: "isolamento",
        title: "Thermal & acoustic insulation",
        description:
          "ETICS (Capoto), mineral wools and insulation solutions that cut energy bills and noise.",
        icon: "thermometer",
      },
      {
        slug: "gesso",
        title: "Projected plaster & renders",
        description:
          "High-flatness projected plaster and resilient renders — surfaces ready to paint.",
        icon: "trowel",
      },
      {
        slug: "pintura",
        title: "Painting & final finishes",
        description:
          "Meticulous interior and exterior painting, with careful prep for a modern, durable look.",
        icon: "paint",
      },
      {
        slug: "fachadas",
        title: "Façade rehabilitation",
        description:
          "Treatment, repair and certified coating systems for deteriorated façades.",
        icon: "building",
      },
      {
        slug: "manutencao",
        title: "Maintenance & small works",
        description:
          "Targeted repairs, partial finishes and quick interventions for landlords and businesses.",
        icon: "wrench",
      },
    ],
    cta: "Tell us about your project",
  },
  pillars: {
    title: "Why choose Placovianense?",
    intro: "Three commitments that show up on every delivered project.",
    items: [
      {
        title: "Proven track record",
        description:
          "Over 10 years signing finishes on landmark projects — from premium apartments to public buildings.",
        icon: "award",
      },
      {
        title: "Precision & detail",
        description:
          "Every drywall joint, plaster coat and paint pass goes through strict quality control. No last-minute touch-ups.",
        icon: "ruler",
      },
      {
        title: "Northern Portugal proximity",
        description:
          "Based in Darque, Viana do Castelo. Fast response and close follow-up across Minho and Greater Porto.",
        icon: "mapPin",
      },
    ],
  },
  process: {
    title: "From first message to handover",
    intro: "A clear process — no surprises on budget or schedule.",
    steps: [
      {
        title: "First contact",
        description:
          "Reach us on WhatsApp and share photos, plans or a quick description of the space.",
      },
      {
        title: "Site visit",
        description:
          "We schedule an on-site assessment, measure areas and design the best technical solution.",
      },
      {
        title: "Detailed proposal",
        description:
          "You receive a quote broken down by materials and labour, with a clear execution timeline.",
      },
      {
        title: "Clean execution",
        description:
          "We start the work keeping the site organised and delivering on the agreed date.",
      },
    ],
  },
  references: {
    title: "Reference projects",
    intro: "A few projects where Placovianense delivered finishes.",
    items: [
      {
        name: "PARC Viana — Luxury Apartments",
        role: "Suspended ceilings, drywall and premium finishes in a high-end residential project.",
      },
      {
        name: "E.B. 2,3 Dr. Pedro Barbosa School",
        role: "Drywall systems and acoustic insulation in a school environment.",
      },
    ],
    note: "Full portfolio available on request. We work on private builds, condominiums, public tenders and commercial refits.",
  },
  finalCta: {
    headline: "Ready to transform your space?",
    subheadline:
      "Trust the finishes of your home or business to a team rooted in Viana do Castelo.",
    primaryCta: "Chat with us on WhatsApp",
    secondaryCta: "Call now",
  },
  contact: {
    pageTitle: "Contact · Placovianense Acabamentos",
    pageDescription:
      "Get a free quote from Placovianense. Reach us by WhatsApp, phone or the contact form.",
    intro:
      "Tell us briefly what you need. We usually reply within a few hours, often the same day.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "email@example.com",
      phone: "Phone (optional)",
      phonePlaceholder: "+351 9XX XXX XXX",
      subject: "Type of work",
      subjectOptions: [
        { value: "pladur", label: "Drywall / suspended ceilings" },
        { value: "isolamento", label: "Thermal / acoustic insulation" },
        { value: "gesso", label: "Plaster & renders" },
        { value: "pintura", label: "Painting & finishes" },
        { value: "outro", label: "Other / not sure yet" },
      ],
      message: "Description",
      messagePlaceholder:
        "Describe the space (m², location, type of work) and when you'd like to start.",
      consent: "I have read and accept the",
      consentLink: "privacy policy",
      submit: "Send request",
      submitting: "Sending…",
      success: "Request sent! We'll get back to you shortly.",
      errorGeneric: "Could not send. Please try again or reach us on WhatsApp.",
      errorValidation: "Please check the highlighted fields.",
    },
    direct: {
      title: "Direct contact",
      whatsapp: "WhatsApp",
      phone: "Phone",
      email: "Email",
      hours: "Hours",
      address: "Address",
    },
  },
  services_page: {
    pageTitle: "Services · Placovianense Acabamentos",
    pageDescription:
      "Drywall, suspended ceilings, thermal insulation, plaster, painting and façade rehabilitation in Northern Portugal.",
    intro:
      "Technical detail on the services we deliver across private, public and commercial works in Minho and Greater Porto.",
    details: [
      {
        slug: "pladur",
        title: "Drywall systems & suspended ceilings",
        description:
          "Structure, assembly and finishing of walls, ceilings and partitions in gypsum board.",
        bullets: [
          "Linear, flat or backlit cove suspended ceilings",
          "Acoustic and technical partitions for hospitality and offices",
          "Water-resistant board linings for wet areas",
          "Joint treatment and paint-ready preparation",
        ],
      },
      {
        slug: "isolamento",
        title: "Thermal & acoustic insulation (ETICS / Capoto)",
        description:
          "ETICS systems and interior insulation that cut energy bills and noise.",
        bullets: [
          "ETICS with EPS, mineral wool or XPS",
          "Insulation of ceilings, walls and façades",
          "Acoustic solutions for apartments and studios",
          "Compatible with energy efficiency incentive programmes",
        ],
      },
      {
        slug: "gesso",
        title: "Projected plaster & renders",
        description:
          "Perfect levelling of surfaces for premium finishes.",
        bullets: [
          "High-flatness projected plaster",
          "Resilient renders for wet and exterior areas",
          "Traditional and burnished plaster in heritage works",
          "Paint, wallpaper or decorative plaster ready",
        ],
      },
      {
        slug: "pintura",
        title: "Painting & final finishes",
        description:
          "Interior and exterior painting with careful prep and quality paints.",
        bullets: [
          "Matte, satin or lacquered painting",
          "Exterior paints with UV and anti-fungal protection",
          "Decorative Venetian and stucco finishes",
          "Support choosing colours and samples",
        ],
      },
      {
        slug: "fachadas",
        title: "Façade rehabilitation",
        description:
          "Treatment and coating of deteriorated façades with durable solutions.",
        bullets: [
          "Repair of cracks and water infiltrations",
          "Application of certified coating systems",
          "Façade painting with high-resistance paints",
          "Coordination with scaffolding and site safety",
        ],
      },
    ],
  },
  privacy: {
    pageTitle: "Privacy Policy · Placovianense",
    pageDescription:
      "How we handle your personal data when you contact Placovianense.",
    updated: "Last updated: 30 May 2026",
    body: [
      {
        heading: "Data controller",
        paragraphs: [
          "Placovianense - Acabamentos Lda, with registered office at R. das Rosas 71, 4935-139 Darque, Viana do Castelo, Portugal, is the data controller for the personal data collected through this site.",
        ],
      },
      {
        heading: "Data collected",
        paragraphs: [
          "We only collect data you voluntarily provide through the contact form: name, email, optional phone number and the description of your request.",
          "We also use anonymous traffic metrics (Vercel Analytics), with no personally identifying cookies.",
        ],
      },
      {
        heading: "Purpose and legal basis",
        paragraphs: [
          "Data is used exclusively to respond to your quote or information request. The legal basis is your consent and pre-contractual steps.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "We keep data for the time required to answer your request and, if a commercial proposal follows, for the legal retention period of contractual and fiscal documents.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You can request access, rectification, deletion or portability of your data at any time by emailing geral@placovianense.pt.",
          "You also have the right to lodge a complaint with the Portuguese Data Protection Authority (CNPD).",
        ],
      },
    ],
  },
  terms: {
    pageTitle: "Terms & Conditions · Placovianense",
    pageDescription:
      "Terms of use for the Placovianense - Acabamentos Lda website.",
    updated: "Last updated: 30 May 2026",
    body: [
      {
        heading: "Purpose",
        paragraphs: [
          "These terms govern the use of the institutional website of Placovianense - Acabamentos Lda, intended to present services and facilitate contact with prospective clients.",
        ],
      },
      {
        heading: "Content & intellectual property",
        paragraphs: [
          "All site content (text, images, brands) belongs to Placovianense or is licensed, and may not be reproduced without authorisation.",
        ],
      },
      {
        heading: "Quotes",
        paragraphs: [
          "Quotes provided after contact are valid for the period stated in each proposal and may be revised if the scope of the work changes.",
        ],
      },
      {
        heading: "Dispute resolution",
        paragraphs: [
          "For consumer disputes, the consumer may turn to the Vale do Cávado consumer arbitration centre (CIAB) or the European Online Dispute Resolution platform.",
        ],
      },
    ],
  },
  footer: {
    rights: "All rights reserved.",
    address: "R. das Rosas 71, 4935-139 Darque, Viana do Castelo",
    privacy: "Privacy policy",
    terms: "Terms & conditions",
    complaints: "Complaints book",
    builtBy: "Site built by",
  },
  localeSwitcher: {
    pt: "PT",
    en: "EN",
    label: "Language",
  },
};
