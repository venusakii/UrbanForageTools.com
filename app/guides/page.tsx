import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivingVeinBackground } from "@/components/living-vein-background"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "Guides - UrbanForageTools",
  description: "Learn to identify, harvest, and prepare urban plants safely with our comprehensive guides.",
}

const guides = [
  {
    slug: "edible-plants-city-parks",
    title: "10 Edible Plants Hiding in City Parks",
    description: "Discover the hidden bounty in your local green spaces.",
    image: "/illustrated-guide-cover-urban-park-plants-watercol.jpg",
    readTime: "8 min read",
  },
  {
    slug: "street-herbs-safety",
    title: "Street Herbs & Safety Basics",
    description: "Essential knowledge for foraging safely in urban environments.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "12 min read",
  },
  {
    slug: "sustainable-urban-harvesting",
    title: "Sustainable Urban Harvesting",
    description: "How to forage responsibly without depleting local ecosystems.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "10 min read",
  },
  {
    slug: "toxic-look-alikes",
    title: "Toxic Look-Alikes to Avoid",
    description: "Critical identification tips for avoiding dangerous plants.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "15 min read",
  },
  {
    slug: "seasonal-foraging-calendar",
    title: "Seasonal Foraging Calendar",
    description: "What to look for throughout the year in urban environments.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 min read",
  },
  {
    slug: "preparing-wild-edibles",
    title: "Preparing Wild Edibles",
    description: "From harvest to plate: cooking with foraged ingredients.",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "14 min read",
  },
]

export default function GuidesPage() {
  return (
    <div className="relative min-h-screen">
      <LivingVeinBackground />
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl tracking-wider mb-4">FORAGING GUIDES</h1>
            <p className="text-lg text-muted-foreground">
              Expert knowledge for safe and sustainable urban foraging. From beginner basics to advanced identification
              techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                <Card className="group cursor-pointer h-full overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src={guide.image || "/placeholder.svg"}
                      alt={guide.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Fingerprint scan effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                  <CardContent className="p-6">
                    <span className="text-xs text-primary font-medium tracking-wider">{guide.readTime}</span>
                    <h3 className="font-serif text-xl tracking-wider mt-2 mb-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
