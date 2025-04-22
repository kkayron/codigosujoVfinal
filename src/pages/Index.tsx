
import { Section } from "@/components/ui/section";
import { SubscriptionPlans } from "@/components/ui/subscription-plans";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ExamplesSection } from "@/components/sections/ExamplesSection";
import { HowToUseSection } from "@/components/sections/HowToUseSection";
import { TechnicalTipsSection } from "@/components/sections/TechnicalTipsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const Index = () => {
  return (
    <div className="bg-codigosujo-dark text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <Section fullScreen className="bg-codigosujo-darker pt-28 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-codigosujo-red/20 rounded-full blur-[120px] opacity-30"></div>
        <HeroSection />
      </Section>

      {/* About Section */}
      <Section className="border-b border-white/5">
        <AboutSection />
      </Section>

      {/* Features Section */}
      <Section id="features" className="border-b border-white/5">
        <FeaturesSection />
      </Section>

      {/* Examples Section */}
      <Section className="border-b border-white/5">
        <ExamplesSection />
      </Section>

      {/* Testimonials Section */}
      <Section className="border-b border-white/5">
        <TestimonialsSection />
      </Section>

      {/* Subscription Plans Section */}
      <Section id="pricing" className="border-b border-white/5">
        <SubscriptionPlans />
      </Section>

      {/* How to use Section */}
      <Section id="start" className="border-b border-white/5">
        <HowToUseSection />
      </Section>

      {/* Technical Tips Section */}
      <Section className="border-b border-white/5">
        <TechnicalTipsSection />
      </Section>

      <Footer />
    </div>
  );
}

export default Index;
