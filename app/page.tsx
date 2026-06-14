import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Calculator from "@/components/Calculator";
import Trust from "@/components/Trust";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import VideoSection from "@/components/VideoSection";
import Team from "@/components/Team";
import Process from "@/components/Process";
import CTABanner from "@/components/CTABanner";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Calculator />
        <Trust />
        <WhyUs />
        <Testimonials />
        <BeforeAfter />
        <Gallery />
        <VideoSection />
        <Team />
        <Process />
        <CTABanner />
        <Coverage />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
