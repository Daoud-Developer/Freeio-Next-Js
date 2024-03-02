
import Hero3 from "@/components/hero/Hero3";
import About4 from "@/components/section/About4";
import BrowserCategory3 from "@/components/section/BrowserCategory3";
import CtaBanner1 from "@/components/section/CtaBanner1";
import CtaBanner4 from "@/components/section/CtaBanner4";
import OurCta1 from "@/components/section/OurCta1";
import OurFaq1 from "@/components/section/OurFaq1";
import OurPartner1 from "@/components/section/OurPartner1";
import PopularService2 from "@/components/section/PopularService2";
import TabSection1 from "@/components/section/TabSection1";
import Testimonial3 from "@/components/section/Testimonial3";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Home 3",
};

export default function page() {
  return (
    <>
    
      <TabSection1 />
      <Hero3 />
      <PopularService2 />
      <BrowserCategory3 />
      <About4 />
      <OurPartner1 />
      <CtaBanner1 />
      <Testimonial3 />
      <CtaBanner4 />
      <OurFaq1 />
      <OurCta1 />
    </>
  );
}
