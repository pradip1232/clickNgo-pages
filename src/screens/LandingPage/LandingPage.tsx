import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterLinksSection } from "./sections/FooterLinksSection/FooterLinksSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HowItWorksSection } from "./sections/HowItWorksSection/HowItWorksSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { PricingPlansSection } from "./sections/PricingPlansSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

export const LandingPage = (): JSX.Element => {
  return (
    <main className="flex flex-col items-center relative overflow-hidden bg-[url(..//landing-page.png)] bg-cover bg-center bg-no-repeat bg-black dark">
      <MainContentSection />
      <HowItWorksSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <PricingPlansSection />

      {/* Decorative elements */}
      {/* <div className="fixed w-24 h-24 bottom-96 right-1/3 rounded-[48px] blur-[10px] bg-[radial-gradient(50%_50%_at_43%_-7%,rgba(73,73,85,1)_0%,rgba(20,20,20,1)_100%)]" />
      <div className="fixed w-16 h-16 bottom-80 left-1/4 rounded-[32px] blur-[10px] bg-[radial-gradient(50%_50%_at_43%_-7%,rgba(73,73,85,1)_0%,rgba(20,20,20,1)_100%)]" /> */}

      <FooterSection />
      <FooterLinksSection />
    </main>
  );
};
