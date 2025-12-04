"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setVisibleLines(1), 500)
    const timer2 = setTimeout(() => setVisibleLines(2), 1200)
    const timer3 = setTimeout(() => setVisibleLines(3), 1900)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/urban-plants-growing-through-metal-railings-with-d.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wider mb-8 text-balance">
            <span
              className={`block transition-all duration-700 ${
                visibleLines >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              DISCOVER THE
            </span>
            <span
              className={`block text-primary transition-all duration-700 ${
                visibleLines >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              EDIBLE WILDERNESS
            </span>
            <span
              className={`block transition-all duration-700 ${
                visibleLines >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              OF THE CITY
            </span>
          </h1>

          {/* Subheadline */}
          <div
            className={`space-y-2 mb-12 transition-all duration-700 delay-500 ${
              visibleLines >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground">Specialized gadgets for urban foragers.</p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Identify, collect, and connect with your city&apos;s living world.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${
              visibleLines >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              <Link href="/gear">
                Explore Gear
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 group bg-transparent"
            >
              <Link href="/guides">
                <Leaf className="mr-2 w-4 h-4" />
                Start Learning
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-muted-foreground tracking-wider">SCROLL</span>
            <svg
              viewBox="0 0 24 48"
              className="w-6 h-12 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M12 0 L12 40 M4 32 L12 40 L20 32" className="vein-flow" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
