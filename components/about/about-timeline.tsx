"use client"

import { useRef, useEffect, useState } from "react"

const timelineEvents = [
  {
    year: "1900s",
    title: "Traditional Forager Kits",
    description: "Canvas bags, hand-drawn guides, and generational knowledge passed down through communities.",
  },
  {
    year: "1960s",
    title: "Field Guide Revolution",
    description: "Peterson and Audubon guides made plant identification accessible to the general public.",
  },
  {
    year: "1990s",
    title: "Digital Databases",
    description: "CD-ROM encyclopedias brought thousands of species to desktop computers.",
  },
  {
    year: "2010s",
    title: "Mobile Apps Emerge",
    description: "Smartphone apps put plant identification in everyone's pocket for the first time.",
  },
  {
    year: "2020",
    title: "UrbanForageTools Founded",
    description: "We launched with a mission to create the most advanced foraging tools on the planet.",
  },
  {
    year: "2022",
    title: "AI Lens Launch",
    description: "Our flagship AI-powered identification system achieves 99% accuracy in real-world testing.",
  },
  {
    year: "Today",
    title: "Growing Community",
    description: "Over 50,000 urban foragers use our tools to discover the edible wilderness in their cities.",
  },
]

export function AboutTimeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    const items = timelineRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24" ref={timelineRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl tracking-wider mb-4">THE EVOLUTION OF FORAGING</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From traditional knowledge to AI-powered identification.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  data-index={index}
                  className={`relative flex items-start gap-8 transition-all duration-700 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                    <span className="text-primary text-sm tracking-wider font-medium">{event.year}</span>
                    <h3 className="font-serif text-xl md:text-2xl tracking-wider mt-1 mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
