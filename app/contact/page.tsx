import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivingVeinBackground } from "@/components/living-vein-background"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactMap } from "@/components/contact/contact-map"
import { Mail, MapPin, Clock } from "lucide-react"

export const metadata = {
  title: "Contact - UrbanForageTools",
  description: "Get in touch with the UrbanForageTools team.",
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <LivingVeinBackground />
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl tracking-wider mb-4">GET IN TOUCH</h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our products or urban foraging? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">hello@urbanforagetools.com</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Portland, Oregon, USA</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Response Time</h3>
              <p className="text-sm text-muted-foreground">Within 24 hours</p>
            </div>
          </div>
        </section>

        {/* Form & Map */}
        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <ContactMap />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
