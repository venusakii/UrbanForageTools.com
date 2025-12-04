import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivingVeinBackground } from "@/components/living-vein-background"

export const metadata = {
  title: "Privacy Policy - UrbanForageTools",
  description: "Privacy Policy for UrbanForageTools products and services.",
}

export default function PrivacyPage() {
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
                <path d="M50,30 L10,60" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                <path d="M50,30 L90,60" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                <path d="M50,80 L20,120" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                <path d="M50,80 L80,120" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                <path d="M50,140 L30,170" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
                <path d="M50,140 L70,170" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
              </svg>
            </div>

            <div className="relative">
              <h1 className="font-serif text-4xl md:text-5xl tracking-wider mb-2">PRIVACY POLICY</h1>
              <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">1. Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide directly, such as your name and email when subscribing to our
                    newsletter or making a purchase. Our devices may also collect usage data to improve our AI
                    identification algorithms.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use your information to process orders, send product updates, improve our services, and
                    communicate about new products. We never sell your personal information to third parties.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">3. Data from Devices</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our AI-powered devices may collect anonymized plant identification data to improve accuracy.
                    Location data is only collected if you opt in to community mapping features. You can disable data
                    sharing at any time.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">4. Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your personal information. All data
                    transmissions are encrypted, and we regularly audit our security practices.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">5. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website uses cookies to improve your browsing experience and analyze site traffic. You can
                    control cookie settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">6. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to access, correct, or delete your personal information. You may also opt out of
                    marketing communications at any time. To exercise these rights, contact
                    privacy@urbanforagetools.com.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl tracking-wider text-foreground mb-4">7. Contact</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about this Privacy Policy, please contact our privacy team at
                    privacy@urbanforagetools.com.
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
