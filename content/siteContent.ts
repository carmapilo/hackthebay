export type Track = {
  id: "fintech" | "cybersecurity" | "automation" | "health" | "sustainability";
  title: string;
  description: string;
};

export type Speaker = {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  image?: string;
};

export type SponsorTier = "platinum" | "gold" | "silver" | "bronze";

export type Sponsor = {
  name: string;
  tier: SponsorTier;
  logo?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const siteContent = {
  assets: {
    sun: "/assets/sun.webp",
    venus: "/assets/venus.webp",
    mars: "/assets/mars.webp",
  },
  hero: {
    title: "Hack The Bay",
    subtitle: "Tampa's largest student hackathon",
    cta: "Apply Now",
    ctaHref: "#apply",
  },
  about: {
    title: "About",
    body: "We want you to have an opportunity to make a difference. Hack the Bay is Tampa’s largest upcoming hackathon, bringing together 600 of the most talented and diverse tech students from Tampa! This year’s event will take place from Saturday, Feb 28 to Sunday Mar 1 at University of South Florida in Tampa, FL. Join us for the inaugural year of the hottest new tech event in Tampa!",
  },
  location: {
    heading: "Where?",
    body: "Join us at the University of South Florida in Tampa, Florida for 24 hours of building, mentoring, and cosmic inspiration.",
  },
  speakers: {
    heading: "Meet Our Speakers",
    speakers: [
      {
        id: "speaker1",
        name: "Dr. Sarah Chen",
        role: "AI Research Lead",
        company: "TechBay Labs",
        bio: "Leading AI researcher with 10+ years of experience in machine learning and neural networks. Passionate about mentoring the next generation of tech innovators.",
      },
      {
        id: "speaker2",
        name: "Marcus Johnson",
        role: "CTO",
        company: "StartupBay",
        bio: "Serial entrepreneur who has founded 3 successful startups. Expert in scaling tech products and building engineering teams.",
      },
      {
        id: "speaker3",
        name: "Elena Rodriguez",
        role: "Security Engineer",
        company: "CyberShield Inc",
        bio: "Cybersecurity expert specializing in ethical hacking and threat detection. Speaker at DEF CON and Black Hat conferences.",
      },
      {
        id: "speaker4",
        name: "James Wu",
        role: "Product Manager",
        company: "BigTech Corp",
        bio: "Product leader with experience shipping products used by millions. Advocate for user-centered design and agile methodologies.",
      },
    ] satisfies Speaker[],
  },
  tracks: {
    heading: "Pick Your Track",
    tracks: [
      {
        id: "fintech",
        title: "Fintech",
        description:
          "Build the next wave of finance experiences, from payments to fraud detection for the bay economy.",
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity",
        description:
          "Secure Tampa’s digital future with threat detection, zero-trust tooling, and resilient infrastructure.",
      },
      {
        id: "automation",
        title: "Automation",
        description:
          "Automate the boring and the critical—workflow bots, RPA, and intelligent ops for civic impact.",
      },
      {
        id: "health",
        title: "Health",
        description:
          "Build health-tech solutions that improve wellness, access, and community care around the bay.",
      },
      {
        id: "sustainability",
        title: "Sustainability",
        description:
          "Protect the bay with climate, energy, and environmental tech—data, sensors, and smart insights.",
      },
    ] satisfies Track[],
  },
  // Jupiter placeholder - add jupiter.webp to assets when available
  jupiter: {
    placeholder: true,
  },
  faq: {
    heading: "Frequently Asked Questions",
    neptune: "Neptune",
    uranus: "Uranus",
    items: [
      {
        question: "When does the hackathon start?",
        answer:
          "Hack The Bay 2025 starts on March 15th at 9:00 AM in Tampa, FL.",
      },
      {
        question: "How long is the hackathon?",
        answer: "The event runs for 24 hours, ending on March 16th at 9:00 AM.",
      },
      {
        question: "Do I need experience?",
        answer:
          "Beginners and experts are welcome. You’ll have mentors, workshops, and teammates to help you build.",
      },
    ] satisfies FAQ[],
  },
  cta: {
    id: "apply",
    heading: "Launch Your Project",
    body: "Secure your spot at Hack The Bay. Limited seats for in-person teams in Tampa.",
    button: "Apply Now",
    buttonHref: "https://example.com/apply",
  },
  sponsors: {
    heading: "Sponsors",
    tiers: [
      {
        tier: "platinum",
        sponsors: [
          { name: "Starlight Labs", tier: "platinum", logo: "/icons/logo.jpg" },
        ],
      },
      {
        tier: "gold",
        sponsors: [
          { name: "BayWave AI", tier: "gold" },
          { name: "Sunrise Systems", tier: "gold" },
        ],
      },
      {
        tier: "silver",
        sponsors: [
          { name: "Harbor Cloud", tier: "silver" },
          { name: "Pelican Pay", tier: "silver" },
          { name: "Coastline Robotics", tier: "silver" },
        ],
      },
      {
        tier: "bronze",
        sponsors: [
          { name: "GulfTech", tier: "bronze" },
          { name: "Tide Analytics", tier: "bronze" },
          { name: "Mangrove Data", tier: "bronze" },
          { name: "Seabreeze Apps", tier: "bronze" },
        ],
      },
    ] as { tier: SponsorTier; sponsors: Sponsor[] }[],
  },
};

export type SiteContent = typeof siteContent;
