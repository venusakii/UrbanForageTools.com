"use client"

import { useEffect, useState } from "react"
import { MapPin, Smartphone, Thermometer } from "lucide-react"

const ecosystemItems = [
  {
    icon: MapPin,
    title: "GPS Plant Mapper",
    description: "Track and share plant locations across the city",
  },
  {
    icon: Smartphone,
    title: "AI-assisted Scanner",
    description: "Instant species identification in your hand",
  },
  {
    icon: Thermometer,
    title: "Microclimate Sensor",
    description: "Monitor conditions for optimal foraging",
  },
]

export function EcosystemSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 md:py-32 bg-card/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wider mb-4">SMART GEAR ECOSYSTEM</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our devices work together to create a complete foraging experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {/* Connection lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <line
              x1="16.67%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
              className={`text-primary/30 transition-all duration-500 ${activeIndex === 0 ? "text-primary" : ""}`}
            />
            <line
              x1="50%"
              y1="50%"
              x2="83.33%"
              y2="50%"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4 4"
              className={`text-primary/30 transition-all duration-500 ${activeIndex === 1 ? "text-primary" : ""}`}
            />
          </svg>

          {ecosystemItems.map((item, index) => {
            const Icon = item.icon
            const isActive = index === activeIndex

            return (
              <div
                key={item.title}
                className={`text-center p-6 rounded-2xl transition-all duration-500 ${
                  isActive ? "bg-primary/10 scale-105" : "bg-card/50"
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>

                {/* Pulse indicator */}
                {isActive && (
                  <div className="mt-4 flex justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
