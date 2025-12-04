import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LivingVeinBackground } from "@/components/living-vein-background"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { products } from "@/lib/products"
import Link from "next/link"

export const metadata = {
  title: "Reviews - UrbanForageTools",
  description: "Read what our community says about UrbanForageTools products.",
}

export default function ReviewsPage() {
  // Collect all reviews from all products
  const allReviews = products
    .flatMap((product) =>
      product.reviews.map((review) => ({
        ...review,
        productName: product.name,
        productSlug: product.slug,
        productImage: product.image,
      })),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="relative min-h-screen">
      <LivingVeinBackground />
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-6xl tracking-wider mb-4">COMMUNITY REVIEWS</h1>
            <p className="text-lg text-muted-foreground">Hear from urban foragers who use our tools every day.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {allReviews.map((review, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  {/* Product Link */}
                  <Link href={`/gear/${review.productSlug}`} className="flex items-center gap-3 mb-4 group">
                    <img
                      src={review.productImage || "/placeholder.svg"}
                      alt={review.productName}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {review.productName}
                    </span>
                  </Link>

                  {/* Rating */}
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-muted-foreground mb-4 italic">&ldquo;{review.comment}&rdquo;</p>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{review.author}</span>
                    <span className="text-muted-foreground">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
