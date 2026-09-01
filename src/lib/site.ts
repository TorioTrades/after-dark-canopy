export const site = {
  name: "After Dark Canopy Cleaners",
  legalName: "After Dark Canopy Cleaners PTY Ltd",
  tagline: "Complete Kitchen Cleans",
  phone: "+61 408 201 103",
  phoneHref: "tel:+61408201103",
  email: "info@afterdarkcanopycleaners.com",
  adminEmail: "admin@afterdarkcanopycleaners.com",
  address: "135 Banfield Road, Heidelberg West, VIC 3081, Australia",
  hours: "Monday – Friday, 8:00 AM – 5:00 PM",
  serviceArea: "Melbourne, VIC, Australia",
  facebook: "https://www.facebook.com/afterdarkcanopycleaners",
  instagram: "https://www.instagram.com/afterdarkcanopycleaners/",
  linkedin: "https://www.linkedin.com/company/afterdarkcanopycleaners",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "After Dark Canopy Cleaners",
  description:
    "Commercial kitchen cleaning and canopy cleaning specialists in Melbourne, VIC.",
  url: "https://afterdarkcanopycleaners.com",
  telephone: "+61408201103",
  email: "info@afterdarkcanopycleaners.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "135 Banfield Road",
    addressLocality: "Heidelberg West",
    addressRegion: "VIC",
    postalCode: "3081",
    addressCountry: "AU",
  },
  openingHours: "Mo-Fr 08:00-17:00",
  areaServed: "Melbourne, VIC, Australia",
  sameAs: [site.facebook, site.instagram, site.linkedin],
};

export type ServiceItem = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  long: string;
  includes: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "canopy-range-hood-cleaning",
    icon: "Wind",
    title: "Canopy & Range Hood Cleaning",
    short:
      "Industrial-strength degreasing of kitchen canopies and range hoods. We strip away months of grease buildup to restore full airflow, eliminate fire hazards, and bring your extraction system back to peak performance.",
    long: "Over time, commercial kitchen canopies accumulate thick layers of grease that restrict airflow, increase energy consumption, and create serious fire hazards. Our technicians use industrial-grade degreasing agents and high-pressure cleaning methods to strip every surface back to bare metal. We clean the interior and exterior of your canopy, including plenums and grease channels, ensuring your extraction system operates at full capacity. Every job is completed after hours with zero disruption to your kitchen operations.",
    includes: [
      "Full canopy interior & exterior clean",
      "Grease channel flush",
      "Plenum degreasing",
      "Before & after photo report",
    ],
  },
  {
    slug: "filter-baffle-cleaning",
    icon: "Filter",
    title: "Filter & Baffle Cleaning",
    short:
      "Professional removal, deep-cleaning, and reinstallation of your kitchen exhaust filters. Clean filters mean better extraction, lower energy costs, and a kitchen that stays cooler during service.",
    long: "Clogged or greasy filters don't just reduce extraction performance — they force your kitchen to work harder, running hotter and consuming more energy. We remove every filter and baffle, soak and degrease them using commercial-grade solutions, and reinstall them to factory-clean condition. For filters beyond saving, we can source and install replacements. Regular filter cleaning extends equipment life and keeps your kitchen running efficiently.",
    includes: [
      "Filter removal & soak cleaning",
      "Baffle degreasing",
      "Condition assessment",
      "Replacement sourcing if needed",
    ],
  },
  {
    slug: "exhaust-fan-ductwork-cleaning",
    icon: "Fan",
    title: "Exhaust Fan & Ductwork Cleaning",
    short:
      "Complete cleaning from canopy to rooftop — fans, motors, and every centimeter of ductwork in between. We eliminate the hidden grease deposits that are the leading cause of commercial kitchen fires.",
    long: "The ductwork connecting your canopy to the rooftop exhaust fan is where grease silently accumulates — out of sight and out of mind until it becomes a fire risk. Our team cleans every section of the duct system, including access panels, risers, and the rooftop fan unit itself. We inspect fan belts, bearings, and motors during every clean and flag any maintenance concerns before they become expensive breakdowns.",
    includes: [
      "Full duct system clean",
      "Rooftop fan unit cleaning",
      "Fan motor & belt inspection",
      "Access panel cleaning",
    ],
  },
  {
    slug: "deep-kitchen-cleaning",
    icon: "Droplets",
    title: "Deep Kitchen Cleaning",
    short:
      "Floor-to-ceiling commercial kitchen cleaning — walls, floors, ceilings, benchtops, and equipment exteriors. When we're done, your kitchen is spotless and inspection-ready.",
    long: "Sometimes your kitchen needs more than a surface wipe-down. Our deep cleaning service covers every square centimeter — ceilings, walls, behind equipment, under benches, drainage channels, and tile grout. We use food-safe, non-toxic cleaning agents that leave no residue. This service is ideal for end-of-lease, post-renovation, pre-inspection, or whenever your kitchen needs a complete reset to the highest hygiene standards.",
    includes: [
      "Floor-to-ceiling cleaning",
      "Behind & under equipment access",
      "Grout & drainage cleaning",
      "Non-toxic, food-safe products",
    ],
  },
  {
    slug: "sanitisation-disinfection",
    icon: "ShieldCheck",
    title: "Sanitisation & Disinfection",
    short:
      "Hospital-grade antimicrobial treatment using TGA-approved solutions. We eliminate bacteria, mold, and viral contaminants across all surfaces and ventilation systems to keep your kitchen hygienically safe.",
    long: "Keeping your kitchen microbiologically safe isn't just good practice — it's a legal requirement. We apply hospital-grade antimicrobial treatments across all surfaces, including your ventilation system, to eliminate bacteria, mold spores, and viral contaminants. Our sanitisation process uses TGA-approved solutions that are effective against a broad spectrum of pathogens while remaining safe for food-contact surfaces.",
    includes: [
      "Surface & ventilation sanitisation",
      "TGA-approved antimicrobial agents",
      "Mold & bacteria elimination",
      "Food-safe for immediate use after treatment",
    ],
  },
  {
    slug: "compliance-certification",
    icon: "FileCheck",
    title: "Compliance & Certification",
    short:
      "Cleaning services designed to meet AS 1851 fire safety standards and local council health regulations. Every job includes before-and-after photo documentation for your compliance records.",
    long: "Australian standards require commercial kitchens to maintain clean extraction systems to reduce fire risk and meet health regulations. Our cleaning processes are aligned with AS 1851 fire safety standards and local council requirements. After every job, we provide detailed documentation including timestamped before-and-after photographs, a cleaning scope summary, and a certificate of completion for your compliance files.",
    includes: [
      "AS 1851 aligned cleaning",
      "Before & after photo documentation",
      "Cleaning scope report",
      "Completion certificate for records",
    ],
  },
];
