import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivingVeinBackground } from "@/components/living-vein-background"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface PageProps {
  params: Promise<{ slug: string }>
}

const guidesContent: Record<
  string,
  {
    title: string
    description: string
    image: string
    content: string
  }
> = {
  "edible-plants-city-parks": {
    title: "10 Edible Plants Hiding in City Parks",
    description: "Discover the hidden bounty in your local green spaces.",
    image: "/illustrated-guide-cover-urban-park-plants-watercol.jpg",
    content: `
City parks are treasure troves of edible plants, often growing unnoticed right beneath our feet. This guide will introduce you to ten common plants you can find in most urban parks.

## 1. Dandelion (Taraxacum officinale)
Perhaps the most ubiquitous edible plant, every part of the dandelion is edible. Young leaves make excellent salad greens, while the flowers can be made into wine or fried as fritters.

## 2. Plantain (Plantago major)
Not the banana relative, but the common lawn weed with ribbed leaves. Young leaves are tender in salads, while older leaves can be cooked like spinach.

## 3. Wood Sorrel (Oxalis)
These clover-like plants with heart-shaped leaves have a delightful lemony flavor. Use sparingly as a garnish or in salads.

## 4. Clover (Trifolium)
Both red and white clover flowers and leaves are edible. The flowers make a mild tea, and young leaves can be added to salads.

## 5. Chickweed (Stellaria media)
A mild-flavored green perfect for salads. Look for its distinctive line of hairs running up the stem.

## 6. Wild Garlic (Allium ursinum)
When in season, the garlicky aroma is unmistakable. Both leaves and flowers are excellent in pestos and salads.

## 7. Lamb's Quarters (Chenopodium album)
Also called wild spinach, this plant is more nutritious than its cultivated cousin. Cook it like you would spinach.

## 8. Purslane (Portulaca oleracea)
A succulent with a slightly sour taste, purslane is packed with omega-3 fatty acids. Great raw in salads.

## 9. Nettle (Urtica dioica)
Despite the sting, cooked nettles are delicious and highly nutritious. Always wear gloves when harvesting.

## 10. Violet (Viola)
Both leaves and flowers are edible. The flowers make beautiful garnishes, while leaves are mild enough for salads.

## Safety First
Always positively identify any plant before eating. When in doubt, don't eat it. Start with small quantities to check for individual sensitivities.
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(guidesContent).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const guide = guidesContent[slug]

  if (!guide) {
    return { title: "Guide Not Found - UrbanForageTools" }
  }

  return {
    title: `${guide.title} - UrbanForageTools`,
    description: guide.description,
  }
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params
  const guide = guidesContent[slug]

  if (!guide) {
    notFound()
  }

  return (
    <div className="relative min-h-screen">
      <LivingVeinBackground />
      <Header />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Guides
          </Link>

          {/* Hero Image */}
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden mb-8">
            <img src={guide.image || "/placeholder.svg"} alt={guide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl tracking-wider mb-4">{guide.title.toUpperCase()}</h1>
          <p className="text-xl text-muted-foreground mb-8">{guide.description}</p>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {guide.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="font-serif text-2xl tracking-wider text-foreground mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
