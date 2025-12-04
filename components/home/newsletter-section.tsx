"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Send } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with drone footage of rooftops */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/placeholder.svg?height=800&width=1600')`,
        }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Join the Movement</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl tracking-wider mb-4">JOIN THE URBAN MOVEMENT</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Subscribe and get the Forager&apos;s Starter Guide — free.
          </p>

          {isSubmitted ? (
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
              <Leaf className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-primary font-medium">Welcome to the movement!</p>
              <p className="text-sm text-muted-foreground mt-2">
                Check your email for the Forager&apos;s Starter Guide.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-card border-border focus:border-primary pr-4"
                />
                {/* Leaf sprouting animation */}
                {email.length > 0 && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Leaf className="w-4 h-4 text-primary animate-bounce" />
                  </div>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
