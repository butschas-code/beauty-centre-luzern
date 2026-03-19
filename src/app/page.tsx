import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { AboutSection } from "@/components/AboutSection";
import { ModeAperoSection } from "@/components/ModeAperoSection";
import { Testimonials } from "@/components/Testimonials";
import { InstagramSection } from "@/components/InstagramSection";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <AboutSection />
      <ModeAperoSection />
      <Testimonials />
      <InstagramSection />
      <FAQ />
      <CTASection />
      <ContactSection />
    </>
  );
}
