export interface TalkItem {
  id: string;
  speaker: string;
  role: string;
  talkTitle: string;
  date: string;
  category: string;
  slidesOrDemo?: string;
}

export const RECENT_TALKS: TalkItem[] = [
  {
    id: "talk-1",
    speaker: "Arya Nair",
    role: "AI Engineer at DevLab",
    talkTitle: "Building AI Apps with Modern Agent Frameworks",
    date: "Sep 20, 2026",
    category: "Architecture",
    slidesOrDemo: "Demo & Code",
  },
  {
    id: "talk-2",
    speaker: "Rahul Menon",
    role: "Founding Engineer",
    talkTitle: "AI Agents in Practice: Lessons from 100k Daily Invocations",
    date: "Sep 15, 2026",
    category: "Production",
    slidesOrDemo: "Live Demo",
  },
  {
    id: "talk-3",
    speaker: "Ananya Sharma",
    role: "ML Researcher",
    talkTitle: "From Prototype to Product: Zero-Latency Function Calling",
    date: "Sep 08, 2026",
    category: "Optimization",
    slidesOrDemo: "Slides & Repos",
  },
  {
    id: "talk-4",
    speaker: "Kiran Dev",
    role: "Open Source Contributor",
    talkTitle: "Local Small Models on WebGPU: Real-time UI Synthesis",
    date: "Aug 29, 2026",
    category: "Edge AI",
    slidesOrDemo: "Live Demo",
  },
  {
    id: "talk-5",
    speaker: "Meera Rajesh",
    role: "Systems Architect",
    talkTitle: "Deterministic Evals for Non-Deterministic AI Output",
    date: "Aug 18, 2026",
    category: "Testing & Evals",
    slidesOrDemo: "Slides",
  },
];
