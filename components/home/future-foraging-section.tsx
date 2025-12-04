"use client"

import { useRef, useEffect, useState } from "react"

const timelineItems = [
  {
    year: "1900s",
    title: "Instinct",
    icon: "🧭",
    description: "Traditional foraging relied on passed-down knowledge and intuition.",
  },
  {
    year: "2010s",
    title: "Digital",
    icon: "📱",
    description: "Mobile apps brought plant databases to your pocket.",
  },
  {
    year: "2020s",
    title: "Intelligence",
    icon: "🔬",
    description: "AI-powered sensors identify species in real-time.",
  },
]

export function FutureForagingSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate progress through the section
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))
      const index = Math.min(2, Math.floor(progress * 3))
      setActiveIndex(index)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wider mb-4">THE FUTURE OF FORAGING</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            From instinct to intelligence — bridging tradition with technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border">
              <div
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary to-cyan-accent transition-all duration-500"
                style={{ height: `${(activeIndex + 1) * 33.33}%` }}
              />
            </div>

            <div className="space-y-16 md:space-y-24">
              {timelineItems.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center gap-8 transition-all duration-500 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } ${index <= activeIndex ? "opacity-100" : "opacity-30"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className="text-primary text-sm tracking-wider">{item.year}</span>
                    <h3 className="font-serif text-2xl md:text-3xl tracking-wider mt-1 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>

                  {/* Center icon */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full bg-card border-2 flex items-center justify-center text-2xl transition-all duration-500 ${
                      index <= activeIndex ? "border-primary scale-110" : "border-border"
                    }`}
                  >
                    <span role="img" aria-label={item.title}>
                      {item.icon}
                    </span>
                    {index <= activeIndex && (
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    )}
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
