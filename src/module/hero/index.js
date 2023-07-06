import Layout from "../../components/layout";
import HeroSection from "./sections/HeroSection";
import GirlSection from "./sections/GirlSection";
import Testimonial from "./sections/Testimonial";
import SewaMobil from "./sections/SewaMobil";
import WhyUs from "./sections/WhyUs"
import AccordionSection from "./sections/AccordionSection";

export default function Hero(){
  return (
    <Layout>
      <HeroSection />
      <GirlSection />
      <WhyUs />
      <Testimonial />
      <SewaMobil />
      <AccordionSection />
    </Layout>
  )
}