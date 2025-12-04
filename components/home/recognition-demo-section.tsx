"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scan } from "lucide-react"
import Link from "next/link"

const plants = [
  {
    id: 1,
    name: "Oxalis",
    scientificName: "Oxalis acetosella",
    edible: true,
    image: "/oxalis-wood-sorrel-plant-with-clover-like-leaves-c.jpg",
  },
  {
    id: 2,
    name: "Wild Garlic",
    scientificName: "Allium ursinum",
    edible: true,
    image: "/wild-garlic-ramsons-plant-with-white-flowers-green.jpg",
  },
  {
    id: 3,
    name: "Dandelion",
    scientificName: "Taraxacum officinale",
    edible: true,
    image: "/dandelion-plant-with-yellow-flower-and-leaves-macr.jpg",
  },
  {
    id: 4,
    name: "Plantain",
    scientificName: "Plantago major",
    edible: true,
    image: "/broadleaf-plantain-weed-plant-ribbed-leaves-urban-.jpg",
  },
]

export function RecognitionDemoSection() {
  const [hoveredPlant, setHoveredPlant] = useState<(typeof plants)[0] | null>(null)
  const [isScanning, setIsScanning] = useState(false)

  const handleHover = (plant: (typeof plants)[0]) => {
    setIsScanning(true)
    setTimeout(() => {
      setHoveredPlant(plant)
      setIsScanning(false)
    }, 500)
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Demo */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {plants.map((plant) => (
                <div
                  key={plant.id}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                  onMouseEnter={() => handleHover(plant)}
                  onMouseLeave={() => setHoveredPlant(null)}
                >
                  <img
                    src={plant.image || "/placeholder.svg"}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Scanning overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      hoveredPlant?.id === plant.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* Scan lines */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/30" />
                    <div className="absolute inset-0 border-2 border-primary rounded-lg" />

                    {/* Corner markers */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
                    <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-primary" />
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-primary" />
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />

                    {/* Label */}
                    <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs text-primary font-medium tracking-wider">IDENTIFIED</span>
                      </div>
                      <p className="font-medium text-foreground">{plant.name}</p>
                      <p className="text-xs text-muted-foreground italic">{plant.scientificName}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scanning indicator */}
            {isScanning && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-background/80 backdrop-blur-sm rounded-full p-4">
                  <Scan className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>
            )}
          </div>

          {/* Right: Content */}
          <div className="lg:pl-8">
            <h2 className="font-serif text-4xl md:text-5xl tracking-wider mb-6">
              REAL-TIME
              <br />
              RECOGNITION
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Hover over the images to experience our AI identification system. Our Forager Lens uses advanced machine
              learning to recognize plant species in real-time.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With 99% accuracy and a database of over 10,000 species, you&apos;ll never wonder &quot;what&apos;s that
              plant?&quot; again.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              <Link href="/gear/1">
                See how our AI Forager Lens works
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
