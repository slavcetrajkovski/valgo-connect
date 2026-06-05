import { SiteHeader } from "@/app/components/sections/site-header";
import { Hero } from "@/app/components/sections/hero";
import { LogoMarquee } from "@/app/components/sections/logo-marquee";
import { HowItWorks } from "@/app/components/sections/how-it-works";
import { FeatureGrid } from "@/app/components/sections/feature-grid";
import { RoiStats } from "@/app/components/sections/roi-stats";
import { WorkGallery } from "@/app/components/sections/work-gallery";
import { ComparisonTable } from "@/app/components/sections/comparison-table";
import { Testimonials } from "@/app/components/sections/testimonials";
import { CtaBand } from "@/app/components/sections/cta-band";
import { SiteFooter } from "@/app/components/sections/site-footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <LogoMarquee />
        <HowItWorks />
        <FeatureGrid />
        <RoiStats />
        <WorkGallery />
        <ComparisonTable />
        <Testimonials />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  );
}
