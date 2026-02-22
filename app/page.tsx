import Hero from "@/components/Hero";
import DomainGrid from "@/components/DomainGrid";
import PageTransition from "@/components/PageTransition";
import { domains } from "@/lib/data";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <DomainGrid domains={domains} />
    </PageTransition>
  );
}
