import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivingVeinBackground } from "@/components/living-vein-background"
import { AboutTimeline } from "@/components/about/about-timeline"
import { Leaf, Target, Users, Zap } from "lucide-react"

export const metadata = {
  title: "About - UrbanForageTools",
  description: "Learn about our mission to bridge tradition with technology for the modern urban forager.",
}

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every product we create considers its environmental impact from design to disposal.",
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description: "Our tools are built to provide reliable identification, because safety matters.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "We learn from our community and build what foragers actually need.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible with foraging technology.",
  },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <LivingVeinBackground />
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl tracking-wider mb-6">OUR STORY</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              UrbanForageTools was born from a simple observation: the cities we call home are teeming with edible
              plants, yet most of us walk past them every day without noticing. We set out to change that.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm tracking-wider font-medium">OUR MISSION</span>
              <h2 className="font-serif text-4xl md:text-5xl tracking-wider mt-2 mb-6">
                BRIDGING TRADITION WITH TECHNOLOGY
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For thousands of years, humans foraged for their food. This knowledge was passed down through
                generations, creating an intimate connection between people and their local ecosystems. Urban life has
                disconnected many of us from this heritage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe technology can help restore this connection. Our tools don&apos;t replace traditional
                knowledge—they amplify it. They make foraging safer, more accessible, and more rewarding for everyone
                from curious beginners to experienced gatherers.
              </p>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Urban foraging in action"
                className="rounded-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl tracking-wider mb-4">OUR VALUES</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we create.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <AboutTimeline />

        {/* Team Quote */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-serif text-3xl md:text-4xl tracking-wider mb-6 text-balance">
              &ldquo;Every city is an ecosystem waiting to be discovered.&rdquo;
            </blockquote>
            <p className="text-muted-foreground">— The UrbanForageTools Team</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
