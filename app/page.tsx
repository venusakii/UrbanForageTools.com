import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivingVeinBackground } from "@/components/living-vein-background"
import { HeroSection } from "@/components/home/hero-section"
import { FutureForagingSection } from "@/components/home/future-foraging-section"
import { FeaturedGadgetsSection } from "@/components/home/featured-gadgets-section"
import { RecognitionDemoSection } from "@/components/home/recognition-demo-section"
import { GuidesSection } from "@/components/home/guides-section"
import { VideoSection } from "@/components/home/video-section"
import { EcosystemSection } from "@/components/home/ecosystem-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { NewsletterSection } from "@/components/home/newsletter-section"

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <LivingVeinBackground />
      <Header />
      <main>
        <HeroSection />
        <FutureForagingSection />
        <FeaturedGadgetsSection />
        <RecognitionDemoSection />
        <GuidesSection />
        <VideoSection />
        <EcosystemSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
