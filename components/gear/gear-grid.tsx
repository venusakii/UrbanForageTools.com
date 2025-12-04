"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { products } from "@/lib/products"
import Link from "next/link"
import { Leaf, Star } from "lucide-react"

const filters = [
  { id: "all", label: "All Gear" },
  { id: "urban", label: "Urban Tools" },
  { id: "field", label: "Field Kits" },
  { id: "identification", label: "Identification" },
  { id: "solar", label: "Solar-Smart" },
]

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "eco", label: "Eco Rating" },
]

export function GearGrid() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 500])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (activeFilter !== "all") {
      result = result.filter((p) => p.category === activeFilter)
    }

    // Price filter
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "eco":
        result.sort((a, b) => b.ecoRating - a.ecoRating)
        break
    }

    return result
  }, [activeFilter, sortBy, priceRange])

  return (
    <section className="container mx-auto px-4">
      {/* Filters Bar */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className={
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/50"
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Sort & Price */}
        <div className="flex flex-col sm:flex-row gap-4 lg:ml-auto">
          {/* Price Range */}
          <div className="flex items-center gap-3 min-w-[200px]">
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
            <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={500} step={10} className="w-32" />
          </div>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground mb-6">
        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/gear/${product.slug}`}>
            <Card className="group cursor-pointer h-full overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 relative">
              {/* Pulsating border effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-300" />

              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Data wave effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Eco badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <Leaf className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium">{product.ecoRating}/5</span>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-medium mb-1 group-hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold text-lg">${product.price}</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm">
                      {(product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length).toFixed(1)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <Leaf className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No products match your filters.</p>
          <Button
            variant="outline"
            className="mt-4 bg-transparent"
            onClick={() => {
              setActiveFilter("all")
              setPriceRange([0, 500])
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </section>
  )
}
