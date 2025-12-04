"use client"

import { useState } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden">
          {/* Video placeholder/thumbnail */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1280&h=720&fit=crop')`,
            }}
          >
            <div className="absolute inset-0 bg-background/40" />
          </div>

          {/* Play button */}
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Play video"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform" />
              </div>
            </button>
          )}

          {/* Video element (would be actual video in production) */}
          {isPlaying && (
            <div className="absolute inset-0 bg-background flex items-center justify-center">
              <p className="text-muted-foreground">Video would play here</p>
            </div>
          )}

          {/* Overlay text */}
          <div className="absolute bottom-8 left-8 right-8 text-center pointer-events-none">
            <p className="font-serif text-2xl md:text-4xl tracking-wider text-foreground drop-shadow-lg">
              FIELDWORK IN MOTION
            </p>
            <p className="text-muted-foreground mt-2 text-lg">Observation is evolution.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
