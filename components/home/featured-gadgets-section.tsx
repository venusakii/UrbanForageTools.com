"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const filters = [
  { id: "all", label: "All", icon: "🌿" },
  { id: "urban", label: "Urban Tools", icon: "🌆" },
  { id: "field", label: "Field Kits", icon: "🌿" },
  { id: "identification", label: "Identification", icon: "🔬" },
  { id: "solar", label: "Solar-Smart", icon: "🔋" },
]

const products = [
  {
    id: 1,
    name: "AI Forager Lens Pro",
    category: "identification",
    price: 299,
    image: "/futuristic-ai-plant-scanner-lens-device-with-green.jpg",
    description: "Real-time plant identification with 99% accuracy",
  },
  {
    id: 2,
    name: "Pocket Microscope X50",
    category: "identification",
    price: 89,
    image: "/compact-digital-microscope-for-plant-identificatio.jpg",
    description: "50x magnification in your pocket",
  },
  {
    id: 3,
    name: "Urban Explorer Kit",
    category: "urban",
    price: 149,
    image: "/urban-foraging-toolkit-with-gloves-scissors-contai.jpg",
    description: "Everything you need for city foraging",
  },
  {
    id: 4,
    name: "Solar Plant Scanner",
    category: "solar",
    price: 199,
    image: "/solar-powered-plant-scanner-device-eco-friendly-gr.jpg",
    description: "Never run out of battery in the field",
  },
  {
    id: 5,
    name: "Collapsible Sample Kit",
    category: "field",
    price: 79,
    image: "/collapsible-field-sample-collection-kit-botanical-.jpg",
    description: "Lightweight specimen collection",
  },
  {
    id: 6,
    name: "GPS Plant Mapper",
    category: "urban",
    price: 249,
    image: "/gps-device-for-mapping-plant-locations-in-urban-ar.jpg",
    description: "Map your discoveries across the city",
  },
  {
    id: 7,
    name: "Microclimate Sensor",
    category: "solar",
    price: 129,
    image: "/environmental-sensor-for-measuring-humidity-temper.jpg",
    description: "Understand your local ecosystem",
  },
  {
    id: 8,
    name: "Night Vision Forager",
    category: "field",
    price: 349,
    image: "/night-vision-monocular-for-nighttime-plant-observa.jpg",
    description: "Explore after dark safely",
  },
  {
    id: 9,
    name: "Portable Lab Station",
    category: "identification",
    price: 449,
    image: "/portable-field-laboratory-for-plant-analysis-compa.jpg",
    description: "Full analysis capabilities anywhere",
  },
]

export function FeaturedGadgetsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProducts = activeFilter === "all" ? products : products.filter((p) => p.category === activeFilter)

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wider mb-4">FEATURED GADGETS</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cutting-edge tools designed for the modern urban forager.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/50"
              }
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/gear/${product.id}`}>
              <Card className="group cursor-pointer overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Data wave effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-primary hover:bg-primary/10 bg-transparent">
            <Link href="/gear">
              View All Gear
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
