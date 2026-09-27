import { Hero } from "@/components/home/hero/hero";
import { AboutSection } from "@/components/home/about-section";
import { CommunityActivities } from "@/components/home/community-activities";
import { Supporters } from "@/components/home/supporters";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <CommunityActivities />
      <Supporters />
      <UpcomingEvents />
      <CTA />
    </>
  );
}
