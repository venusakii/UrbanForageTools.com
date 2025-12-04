import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivingVeinBackground } from "@/components/living-vein-background"

export const metadata = {
  title: "Terms of Service - UrbanForageTools",
  description: "Terms of Service for UrbanForageTools products and services.",
}

export default function TermsPage() {
  return (
    <div className="relative min-h-screen">
      <LivingVeinBackground />
      <Header />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Metallic background pattern with leaf veins */}
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12">
            {/* Subtle vein pattern */}
            <div className="absolute inset-0 opacity-5 rounded-2xl overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 100 200" preserveAspectRatio="none">
                <path d="M50,0 L50,200" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                <path d="M50,20 L20,40" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                <path d="M50,20 L80,40" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                <path d="M50,60 L15,90" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                <path d="M50,60 L85,90" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                <path d="M50,100 L25,130" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                <path d="M50,100 L75,130" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
              </svg>
            </div>

            <div className="relative">
              <h1 className="font-serif text-4xl md:text-5xl tracking-wider mb-2">TERMS OF SERVICE</h1>
              <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using UrbanForageTools products and services, you accept and agree to be bound by
                    these Terms of Service. If you do not agree to these terms, please do not use our products or
                    services.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">2. Use of Products</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our foraging identification tools are designed to assist in plant identification but should not be
                    used as the sole means of determining plant edibility. Always verify identifications with multiple
                    sources and consult with local experts before consuming any wild plants.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">3. Disclaimer of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    UrbanForageTools is not responsible for any harm that may result from the use of our products.
                    Foraging inherently carries risks, including exposure to toxic plants. Users assume all
                    responsibility for their foraging activities.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">4. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content, designs, and technology associated with UrbanForageTools products are protected by
                    intellectual property laws. You may not reproduce, distribute, or create derivative works without
                    our express written permission.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">5. Product Returns</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We offer a 30-day return policy for unused products in original packaging. Please contact our
                    support team to initiate a return. Shipping costs for returns are the responsibility of the customer
                    unless the product is defective.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">6. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                    posting to our website. Your continued use of our products constitutes acceptance of any modified
                    terms.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">7. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms of Service, please contact us at legal@urbanforagetools.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
