import Layout from "../../components/layout";
import HeroSection from "./sections/HeroSection";
import GirlSection from "./sections/GirlSection";
import Testimonial from "./sections/Testimonial";
import WhyUs from "./sections/WhyUs"

export default function Hero(){
  return (
    <Layout>
      <HeroSection />
      <GirlSection />
      <WhyUs />
      <Testimonial />
    </Layout>
  )
}