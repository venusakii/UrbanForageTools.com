import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const guides = [
  {
    slug: "edible-plants-city-parks",
    title: "10 Edible Plants Hiding in City Parks",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  },
  {
    slug: "street-herbs-safety",
    title: "Street Herbs & Safety Basics",
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=600&q=80",
  },
  {
    slug: "sustainable-urban-harvesting",
    title: "Sustainable Urban Harvesting",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
  },
  {
    slug: "toxic-look-alikes",
    title: "Toxic Look-Alikes to Avoid",
    image: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=600&q=80",
  },
]

export function GuidesSection() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wider mb-4">GUIDES FOR MODERN GATHERERS</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn to identify, harvest, and prepare urban plants safely.
          </p>
        </div>

        {/* CSS Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`}>
              <Card className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Fingerprint scan effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-sm leading-snug group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
