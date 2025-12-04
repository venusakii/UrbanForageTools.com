"use client"

import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Lena Brooks",
    location: "Brooklyn, NY",
    quote: "I never noticed how alive my neighborhood was until I used UrbanForageTools.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Jared Kim",
    location: "Portland, OR",
    quote: "The AI lens changed everything. I've discovered 50+ edible species on my block alone.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Sofia Torres",
    location: "Austin, TX",
    quote: "Finally, technology that helps me connect with nature instead of disconnect from it.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emil Hart",
    location: "Seattle, WA",
    quote: "The guides are incredibly detailed. I went from curious beginner to confident forager.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    // Generate random positions for floating bubbles
    const newPositions = testimonials.map((_, i) => ({
      x: 15 + (i % 2) * 50 + Math.random() * 20,
      y: 20 + Math.floor(i / 2) * 40 + Math.random() * 15,
    }))
    setPositions(newPositions)
  }, [])

  return (
    null
  )
}
