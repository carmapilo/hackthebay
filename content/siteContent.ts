export type Track = {
  id: "fintech" | "cybersecurity" | "automation" | "health" | "sustainability";
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const siteContent = {
  hero: {
    title: "Hack The Bay",
    subtitle: "Tampa's space-themed hackathon for builders and dreamers.",
    cta: "Apply Now",
    ctaHref: "#apply",
  },
  about: {
    title: "About",
    body: "We want you to have an opportunity to make a difference. Hack the Bay is Tampa’s largest upcoming hackathon, bringing together 600 of the most talented and diverse tech students from Tampa! This year’s event will take place from Saturday, Feb 28 to Sunday Mar 1 at University of South Florida in Tampa, FL. Join us for the inaugural year of the hottest new tech event in Tampa!",
  },
  earth: {
    heading: "Where?",
    body: "Join us at the University of South Florida in Tampa, Florida for 24 hours of building, mentoring, and cosmic inspiration.",
  },
  mars: {
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
};

export type SiteContent = typeof siteContent;
