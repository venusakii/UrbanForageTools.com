"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Product } from "@/lib/products"
import { ArrowLeft, ExternalLink, Leaf, Star, Check } from "lucide-react"
import Link from "next/link"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const averageRating = product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length

  return (
    <div className="container mx-auto px-4">
      {/* Back Button */}
      <Link
        href="/gear"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Gear
      </Link>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Macro close-up effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                  selectedImage === index ? "border-primary" : "border-transparent hover:border-primary/50"
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(averageRating) ? "fill-primary text-primary" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews.length} reviews)</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl tracking-wider mb-4">{product.name.toUpperCase()}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          {/* Price & CTA */}
          <div className="mt-auto space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">${product.price}</span>
              <span className="text-muted-foreground">USD</span>
            </div>

            {/* Amazon Button with breathing glow */}
            <Button
              asChild
              size="lg"
              className="w-full relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-2">
                  View on Amazon
                  <ExternalLink className="w-4 h-4" />
                </span>
                {/* Breathing glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-primary via-cyan-accent to-primary transition-opacity duration-1000 ${
                    isButtonHovered ? "opacity-100 animate-pulse" : "opacity-0"
                  }`}
                />
              </a>
            </Button>

            {/* Eco Rating Badge */}
            <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Eco Rating:</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Leaf
                        key={i}
                        className={`w-4 h-4 ${i < product.ecoRating ? "text-primary fill-primary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {product.sustainabilityScore.rating}% sustainability score
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Tabs */}
      <Tabs defaultValue="specs" className="mb-16">
        <TabsList className="w-full justify-start bg-card/50 border border-border/50 rounded-xl p-1 h-auto flex-wrap">
          <TabsTrigger
            value="specs"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Tech Specs
          </TabsTrigger>
          <TabsTrigger
            value="field"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Field Application
          </TabsTrigger>
          <TabsTrigger
            value="sustainability"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Sustainability
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent value="specs" className="mt-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="font-serif tracking-wider">TECHNICAL SPECIFICATIONS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {product.techSpecs.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-border/50 last:border-0"
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="field" className="mt-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="font-serif tracking-wider">FIELD APPLICATION</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {product.fieldApplication.map((application, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sustainability" className="mt-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="font-serif tracking-wider">SUSTAINABILITY SCORE</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      className="text-muted"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeDasharray={`${product.sustainabilityScore.rating * 2.83} 283`}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">{product.sustainabilityScore.rating}%</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Environmental Impact</h4>
                  <p className="text-muted-foreground">{product.sustainabilityScore.details}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="font-serif tracking-wider">USER REVIEWS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {product.reviews.map((review, index) => (
                  <div key={index} className="pb-6 border-b border-border/50 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{review.author}</span>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
