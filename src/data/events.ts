export interface EventItem {
  id: string;
  month: string;
  day: string;
  year: string;
  time: string;
  category: "WORKSHOP" | "MEETUP" | "DEMO DAY" | "PRODUCT NIGHT" | "HACKATHON";
  title: string;
  description: string;
  location: string;
  format: "IN-PERSON" | "HYBRID" | "VIRTUAL";
  speaker?: string;
  speakerRole?: string;
  featured?: boolean;
  bannerTheme: "navy" | "orange" | "dark" | "cream";
}

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "evt-1",
    month: "JUNE",
    day: "26",
    year: "2026",
    time: "3:00 PM - 7:00 PM",
    category: "MEETUP",
    title: "INSIDE THE NETRA A2000 SDK",
    description: "A technical walkthrough of the SDK architecture, model optimization, and Edge AI deployment.",
    location: "Trivandrum",
    format: "IN-PERSON",
    speaker: "Jyothis Indirabhai",
    speakerRole: "CEO, Netrasemi",
    featured: true,
    bannerTheme: "navy",
  },
  {
    id: "evt-2",
    month: "JULY",
    day: "05",
    year: "2026",
    time: "06:00 PM - 09:00 PM",
    category: "DEMO DAY",
    title: "AI Builders Demo Night",
    description: "10-minute live working demos from local developers shipping custom fine-tunes and web runtime agents.",
    location: "Kochi",
    format: "HYBRID",
    speaker: "Community Showcase",
    speakerRole: "10 Live Demonstrations",
    featured: true,
    bannerTheme: "orange",
  },
  {
    id: "evt-3",
    month: "AUG",
    day: "12",
    year: "2026",
    time: "05:30 PM - 08:30 PM",
    category: "PRODUCT NIGHT",
    title: "From Prototype to Production",
    description: "Deep dive into production LLM observability, evals, latency optimization, and cost scaling.",
    location: "Bangalore",
    format: "IN-PERSON",
    speaker: "Rahul Menon",
    speakerRole: "Founding Engineer",
    featured: true,
    bannerTheme: "dark",
  },
  {
    id: "evt-4",
    month: "SEP",
    day: "24",
    year: "2026",
    time: "10:00 AM - 05:00 PM",
    category: "HACKATHON",
    title: "Autonomous Agents Build Sprint",
    description: "A 1-day sprint focused on solving open problems in workflow automation with local open models.",
    location: "Chennai",
    format: "IN-PERSON",
    speaker: "AI Evolve Team",
    speakerRole: "Community Mentors",
    featured: true,
    bannerTheme: "cream",
  },
  
];
