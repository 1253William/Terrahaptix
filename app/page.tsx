import { AboutUs } from "./_components/sections/about-us";
import CoreIndusty from "./_components/sections/core-industires";
import Header from "./_components/sections/header";
import HeroSection from "./_components/sections/hero-section";
import { WhatWeAreBuilding } from "./_components/sections/what-we-are-building";

export default function Home() {
  return (
    <>
      <Header />
      <main className='mr-4 2xl:mr-40'>
        <HeroSection />
        <CoreIndusty />
        <AboutUs />
        <WhatWeAreBuilding />
      </main>
    </>
  );
}
