import type { Metadata } from "next";

import { ContactBody } from "@/components/contact/contact-body";

export const metadata: Metadata = {
  title: "Contact — AI Evolve",
  description:
    "Get in touch with the AI Evolve community. Ask a question, propose a talk, sponsor an event, or collaborate on an open-source project.",
};

/* Deliberately a server component: only a server component can export
   `metadata`. The animated markup lives in <ContactBody />, which carries
   the "use client" boundary — putting the Framer hooks in here would 500 the
   route, and putting "use client" here would drop the metadata. */
export default function ContactPage() {
  return <ContactBody />;
}
