import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Privacy } from "@/components/sections/privacy";
import { Freedom } from "@/components/sections/freedom";
import { Audience } from "@/components/sections/audience";
import { Technical } from "@/components/sections/technical";
import { Philosophy } from "@/components/sections/philosophy";
import { GridLines } from "@/components/grid-lines";
import { SectionDivider } from "@/components/section-divider";

export default function Page() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Architectural grid — scrolls with content */}
      <GridLines />

      <div className="relative z-[2]">
        <Navbar />
        <Hero />
        <SectionDivider label="01" />
        <Features />
        <SectionDivider label="02" />
        <Privacy />
        <SectionDivider label="03" />
        <Freedom />
        <SectionDivider label="04" />
        <Audience />
        <SectionDivider label="05" />
        <Technical />
        <SectionDivider label="06" />
        <Philosophy />
        <SectionDivider />
        <Footer />
      </div>
    </main>
  );
}

