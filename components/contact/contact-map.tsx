"use client"

import { useState, useEffect } from "react"

const plantPins = [
  { x: 25, y: 30, name: "Wild Garlic Patch", species: 12 },
  { x: 45, y: 20, name: "Dandelion Field", species: 8 },
  { x: 70, y: 35, name: "Urban Herb Garden", species: 24 },
  { x: 30, y: 60, name: "Park Foraging Zone", species: 18 },
  { x: 60, y: 55, name: "River Trail Edibles", species: 31 },
  { x: 80, y: 70, name: "Community Garden", species: 15 },
  { x: 15, y: 75, name: "Forest Edge", species: 42 },
  { x: 55, y: 80, name: "Meadow Area", species: 27 },
]

export function ContactMap() {
  const [hoveredPin, setHoveredPin] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden aspect-square">
      {/* 3D City Grid Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          {[...Array(10)].map((_, i) => (
            <g key={i}>
              <line
                x1={i * 10}
                y1="0"
                x2={i * 10}
                y2="100"
                stroke="currentColor"
                strokeWidth="0.2"
                className="text-border"
              />
              <line
                x1="0"
                y1={i * 10}
                x2="100"
                y2={i * 10}
                stroke="currentColor"
                strokeWidth="0.2"
                className="text-border"
              />
            </g>
          ))}

          {/* Green vein network */}
          <path
            d="M10,20 Q30,30 50,25 T90,40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary/30"
          />
          <path
            d="M5,60 Q25,50 45,55 T85,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary/30"
          />
          <path
            d="M15,80 Q35,70 55,75 T95,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary/30"
          />
        </svg>
      </div>

      {/* Plant Pins */}
      {mounted &&
        plantPins.map((pin, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
            onMouseEnter={() => setHoveredPin(index)}
            onMouseLeave={() => setHoveredPin(null)}
          >
            {/* Glow effect */}
            <div
              className={`absolute inset-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-md transition-opacity ${
                hoveredPin === index ? "opacity-100" : "opacity-50"
              }`}
            />

            {/* Pin */}
            <div
              className={`relative w-4 h-4 rounded-full bg-primary border-2 border-background transition-transform ${
                hoveredPin === index ? "scale-150" : ""
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
            </div>

            {/* Tooltip */}
            {hoveredPin === index && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-card border border-border rounded-lg p-3 shadow-lg whitespace-nowrap z-10">
                <p className="font-medium text-sm">{pin.name}</p>
                <p className="text-xs text-muted-foreground">{pin.species} species documented</p>
              </div>
            )}
          </div>
        ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3">
        <p className="text-xs text-muted-foreground mb-2">Foraging Hotspots</p>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-xs">Documented Locations</span>
        </div>
      </div>
    </div>
  )
}
