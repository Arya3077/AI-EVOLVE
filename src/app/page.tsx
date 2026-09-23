import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { CommunityActivities } from "@/components/community-activities";
import { Supporters } from "@/components/supporters";
import { Gallery } from "@/components/gallery";
import { UpcomingEvents } from "@/components/upcoming-events";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CommunityActivities />
      <Supporters />
      <Gallery />
      <UpcomingEvents />
      <CTA />
    </>
  );
}
