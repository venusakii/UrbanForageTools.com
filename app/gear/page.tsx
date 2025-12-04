import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivingVeinBackground } from "@/components/living-vein-background"
import { GearGrid } from "@/components/gear/gear-grid"

export const metadata = {
  title: "Gear - UrbanForageTools",
  description: "Explore our collection of cutting-edge urban foraging tools and gadgets.",
}

export default function GearPage() {
  return (
    <div className="relative min-h-screen">
      <LivingVeinBackground />
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl tracking-wider mb-4">FORAGING GEAR</h1>
            <p className="text-lg text-muted-foreground">
              Cutting-edge tools designed for the modern urban forager. From AI-powered identification to sustainable
              collection kits.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <GearGrid />
      </main>
      <Footer />
    </div>
  )
}
