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
    id: "evt-4",
    month: "SEP",
    day: "12",
    year: "2026",
    time: "06:00 PM - 09:00 PM",
    category: "MEETUP",
    title: "Industry talk and build your rag",
    description: "get to know about AI superpowers and build your own RAG",
    location: "Trivandrum",
    format: "IN-PERSON",
    speaker: "Satheesh p k and Abhilash Gopakumar",
    speakerRole: "Founding Engineer",
    featured: true,
    bannerTheme: "orange",
  },
  {
    id: "evt-3",
    month: "AUG",
    day: "22",
    year: "2026",
    time: "03:00 PM - 05:30 PM",
    category: "MEETUP",
    title: "Architectural foubdations and multi-domain applications of artificial intelligence",
    description: "Deep dive into production LLM observability, evals, latency optimization, and cost scaling.",
    location: "Trivandrum",
    format: "IN-PERSON",
    speaker: "Satheesh p k and Aron Chacko",
    speakerRole: "Founding Engineer",
    featured: true,
    bannerTheme: "dark",
  },
  {
    id: "evt-2",
    month: "JULY",
    day: "11",
    year: "2026",
    time: "03:00 AM - 07:00 PM",
    category: "MEETUP",
    title: "Inside The Netra A2000 SDK",
    description: "A technical walkthrough of the SDK architecture, model optimization, and Edge AI deployment.",
    location: "Trivandrum",
    format: "IN-PERSON",
    speaker: "Jyothis Indirabhai",
    speakerRole: "CEO, Netrasemi",
    featured: true,
    bannerTheme: "cream",
  },

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
  
];
