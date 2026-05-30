export type Dictionary = {
  meta: {
    siteTitle: string;
    siteDescription: string;
    pageTitle: string;
    pageDescription: string;
  };
  nav: {
    home: string;
    services: string;
    contact: string;
    callCta: string;
    whatsappCta: string;
    skipToContent: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    trustBadges: { icon: "shield" | "ruler" | "clock"; label: string }[];
  };
  trust: {
    stats: { value: string; label: string }[];
  };
  services: {
    title: string;
    intro: string;
    items: {
      slug: string;
      title: string;
      description: string;
      icon: ServiceIcon;
    }[];
    cta: string;
  };
  pillars: {
    title: string;
    intro: string;
    items: { title: string; description: string; icon: PillarIcon }[];
  };
  process: {
    title: string;
    intro: string;
    steps: { title: string; description: string }[];
  };
  references: {
    title: string;
    intro: string;
    items: { name: string; role: string }[];
    note: string;
  };
  finalCta: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  contact: {
    pageTitle: string;
    pageDescription: string;
    intro: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      subject: string;
      subjectOptions: { value: string; label: string }[];
      message: string;
      messagePlaceholder: string;
      consent: string;
      consentLink: string;
      submit: string;
      submitting: string;
      success: string;
      errorGeneric: string;
      errorValidation: string;
    };
    direct: {
      title: string;
      whatsapp: string;
      phone: string;
      email: string;
      hours: string;
      address: string;
    };
  };
  services_page: {
    pageTitle: string;
    pageDescription: string;
    intro: string;
    details: {
      slug: string;
      title: string;
      description: string;
      bullets: string[];
    }[];
  };
  privacy: {
    pageTitle: string;
    pageDescription: string;
    updated: string;
    body: { heading: string; paragraphs: string[] }[];
  };
  terms: {
    pageTitle: string;
    pageDescription: string;
    updated: string;
    body: { heading: string; paragraphs: string[] }[];
  };
  footer: {
    rights: string;
    address: string;
    privacy: string;
    terms: string;
    complaints: string;
    builtBy: string;
  };
  localeSwitcher: {
    pt: string;
    en: string;
    label: string;
  };
};

export type ServiceIcon =
  | "layers"
  | "thermometer"
  | "trowel"
  | "paint"
  | "building"
  | "wrench";

export type PillarIcon = "award" | "ruler" | "mapPin";
