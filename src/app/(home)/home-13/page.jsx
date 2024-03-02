import CtaBanner13 from "@/components/section/CtaBanner13";
import Header14 from "@/components/header/Header14";
import MobileNavigation6 from "@/components/header/MobileNavigation6";
import Hero13 from "@/components/hero/Hero13";
import BrowserCategory13 from "@/components/section/BrowserCategory13";
import NeedSomething2 from "@/components/section/NeedSomething2";
import TrendingService13 from "@/components/section/TrendingService13";
import React from "react";
import FunFact13 from "@/components/section/FunFact13";
import Testimonials13 from "@/components/section/Testimonials13";
import HighestRated13 from "@/components/section/HighestRated13";
import OurBlog1 from "@/components/section/OurBlog1";
import OurPartner1 from "@/components/section/OurPartner1";
import CTa13 from "@/components/section/CTa13";


export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Home 13",
};

export default function page() {
  return (
    <>
    
      <Header14 />
      <MobileNavigation6 />
      <div className="body_content">
        <Hero13 />
        <BrowserCategory13 />
        <TrendingService13 />
        <NeedSomething2 />
        <CtaBanner13 />
        <FunFact13 />
        <Testimonials13 />
        <HighestRated13 />
        <OurBlog1 />
        <OurPartner1 />
        <CTa13 />
      </div>
    </>
  );
}
