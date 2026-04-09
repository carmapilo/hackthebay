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
  position?: {
    x: number;
    y: number;
  };
};

export type Sponsor = {
  name: string;
  logo?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export type ScheduleDay = {
  label: string;
  date: string;
  items: ScheduleItem[];
};

export const siteContent = {
  assets: {
    sun: "/assets/sun.avif",
    mercury: "/assets/mercury.webp",
    venus: "/assets/venus.webp",
    earth: "/assets/earth.webp",
    mars: "/assets/mars.webp",
    jupiter: "/assets/jupiter.webp",
    jupiterMoons: {
      io: "/assets/jupitermoon1.webp",
      europa: "/assets/jupitermoon2-europa.webp",
      ganymede: "/assets/jupitermoon3-ganymede.webp",
      callisto: "/assets/jupitermoon4-callisto.webp",
      moon5: "/assets/jupitermoon5.webp",
    },
    asteroidField: "/assets/asteroid.webp",
    asteroidCluster1: "/assets/smallasteroids1.webp",
    asteroidCluster2: "/assets/smallasteroids2.webp",
    saturn: "/assets/saturn.webp",
    uranus: "/assets/uranus.webp",
    neptune: "/assets/neptune.webp",
    neptuneMoons: {
      moon1: "/assets/neptunemoon1.webp",
      moon2: "/assets/neptunemoon2.webp",
      moon3: "/assets/neptunemoon3.webp",
    },
  },
  hero: {
    title: "Hack The Bay",
    subtitle: "Launch",
    // tagline: "Tampa's largest student hackathon",
    cta: "Register Now",
    ctaHref: "#apply",
    volunteerCta: "Volunteer",
    volunteerCtaHref:
      "https://docs.google.com/forms/d/e/1FAIpQLScLQRMIClOFM4y3AHOqTjeOpzoKt-l8aDc6XkXzmcLeWZqqnw/viewform",
  },
  about: {
    title: "About",
    body: "We want you to have an opportunity to make a difference. Hack the Bay is Tampa’s largest upcoming hackathon, bringing together 600 of the most talented and diverse tech students from Tampa! This year’s event will take place on Saturday, April 11 at University of South Florida in Tampa, FL. Join us for the inaugural year of the hottest new tech event in Tampa!",
  },
  location: {
    heading: "Where?",
    body: "Join us at the University of South Florida's Nault Center for 12 hours of building, mentoring, and cosmic inspiration.",
  },
  speakers: {
    heading: "Meet Our Speakers",
    speakers: [
      {
        id: "speaker1",
        name: "To be announced",
        role: "AI Research Lead",
        company: "TechBay Labs",
        bio: "Leading AI researcher with 10+ years of experience in machine learning and neural networks. Passionate about mentoring the next generation of tech innovators.",
        position: { x: -130, y: -45 },
      },
      {
        id: "speaker2",
        name: "Marcus Johnson",
        role: "CTO",
        company: "StartupBay",
        bio: "Serial entrepreneur who has founded 3 successful startups. Expert in scaling tech products and building engineering teams.",
        position: { x: -100, y: 70 },
      },
      {
        id: "speaker3",
        name: "Elena Rodriguez",
        role: "Security Engineer",
        company: "CyberShield Inc",
        bio: "Cybersecurity expert specializing in ethical hacking and threat detection. Speaker at DEF CON and Black Hat conferences.",
        position: { x: -15, y: 110 },
      },
      {
        id: "speaker4",
        name: "James Wu",
        role: "Product Manager",
        company: "BigTech Corp",
        bio: "Product leader with experience shipping products used by millions. Advocate for user-centered design and agile methodologies.",
        position: { x: 60, y: 30 },
      },
    ] satisfies Speaker[],
  },
  tracks: {
    heading: "Hackathon Tracks",
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
  schedule: {
    heading: "Schedule",
    subheading: "Mission Timeline",
    planetName: "Saturn",
    days: [
      {
        label: "April 11 @ USF Nault Center",
        date: "",
        items: [
          {
            time: "9:00 AM - 10:30 AM",
            title: "Check-in",
            description: "",
          },
          {
            time: "9:30 AM - 10:00 AM",
            title: "Team-Building Activity",
            description: "",
          },
          {
            time: "11:00 AM - 5:00 PM",
            title: "Build Phase",
            description: "Hacking + CTF Tournament",
          },
          {
            time: "12:00 PM - 1:00 PM",
            title: "Fuel Up!",
            description: "Lunch",
          },
          {
            time: "1:00 PM - 2:00 PM",
            title: "Workshop #1",
            description: "",
          },

          {
            time: "3:00 PM - 4:00 PM",
            title: "Workshops #2",
            description: "",
          },
          {
            time: "5:00 PM - 6:00 PM",
            title: "Refuel",
            description: "Dinner",
          },
          {
            time: "6:00 PM - 7:45 PM",
            title: "Judging & Networking",
            description: "",
          },
          {
            time: "8:00 PM",
            title: "Closing Ceremony & Awards",
            description: "",
          },
        ],
      },
    ] satisfies ScheduleDay[],
  },
  faq: {
    heading: "Frequently Asked Questions",
    neptune: "Neptune",
    uranus: "Uranus",
    items: [
      {
        question: "When does the hackathon start?",
        answer:
          "Hack The Bay Launch starts on April 11th at 8:00 AM at the University of South Florida.",
      },
      {
        question: "How long is the hackathon?",
        answer: "The event runs for 12 hours, ending at 9pm on April 11.",
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
    body: "Secure your spot at Hack The Bay: Launch",
    button: "Register Now",
    buttonHref: "https://events.mlh.io/events/13936-hack-the-bay-launch",
    volunteerButton: "Volunteer",
  },
  sponsors: {
    heading: "Sponsors",
    sponsors: [
      { name: "Google", logo: "/sponsors/google.webp" },
      { name: "9Yaps", logo: "/sponsors/9yaps.webp" },
      { name: "Amgen", logo: "/sponsors/amgen.webp" },
      { name: "Cyber Florida", logo: "/sponsors/cyber_florida.webp" },
      { name: "Cyber Herd", logo: "/sponsors/cyberherd.webp" },
      { name: "Google Cloud", logo: "/sponsors/google_cloud.webp" },
      { name: "HTB", logo: "/sponsors/hackthebox.webp" },
      { name: "Init", logo: "/sponsors/init.webp" },
      { name: "Lake Michigan CU", logo: "/sponsors/lake_michigan.webp" },
      { name: "MLH", logo: "/sponsors/mlh.webp" },
      { name: "Monster", logo: "/sponsors/monster.webp" },
      { name: "Primo", logo: "/sponsors/primo.webp" },
      { name: "Skillbit", logo: "/sponsors/skillbit.webp" },
      { name: "Whitehatters", logo: "/sponsors/whitehatters.webp" },
      { name: "Woolpert", logo: "/sponsors/woolpert.jpg" },
      { name: "Zenardy", logo: "/sponsors/zenardy.webp" },
      { name: "Zephyrhills", logo: "/sponsors/zephyrhills.webp" },
    ] satisfies Sponsor[],
  },
};

export type SiteContent = typeof siteContent;
