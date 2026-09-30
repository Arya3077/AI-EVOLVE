

export const CONTACT_EMAIL = "hello@aievolve.community"; // TODO: real inbox

export interface ContactChannel {
  id: string;
  label: string;
  handle: string;
  href: string;
  /** `mailto` channels render as an address, the rest as an outbound link. */
  kind: "mailto" | "external";
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    handle: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    kind: "mailto",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "github.com/The-Purple-Movement/Beyond-Borders",
    href: "https://github.com/The-Purple-Movement/Beyond-Borders",
    kind: "external",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "/company/aievolve", // TODO: real page
    href: "https://linkedin.com", // TODO: real page URL
    kind: "external",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "Join the community group",
    href: "https://chat.whatsapp.com/LewBKchX7amCBBWIKqHDGv",
    kind: "external",
  },
];

/** Drives the form's topic select. Keep the values short — they land in the
 *  email subject line. */
export const CONTACT_TOPICS = [
  "General enquiry",
  "Join the community",
  "Speak at an event",
  "Sponsor or partner",
  "Open-source collaboration",
  "Something else",
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];
