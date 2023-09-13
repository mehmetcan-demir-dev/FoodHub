import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import ImproveSkills from "../components/ImproveSkills/ImproveSkills";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import ChiefsSection from "../components/ChiefsSection/ChiefSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImproveSkills />
      <QuoteSection />
      <ChiefsSection />
    </>
  );
}
