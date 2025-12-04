"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Search, Sun, Moon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gear", href: "/gear" },
  { label: "Guides", href: "/guides" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [logoPulse, setLogoPulse] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    // Logo pulse every 5 seconds
    const pulseInterval = setInterval(() => {
      setLogoPulse(true)
      setTimeout(() => setLogoPulse(false), 500)
    }, 5000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(pulseInterval)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-primary/20" : "bg-transparent",
      )}
    >
      {/* Holographic edge glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={cn("relative transition-all duration-300", logoPulse && "scale-110")}>
              <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
                <path d="M16 2C10 2 6 8 6 14c0 6 4 12 10 16 6-4 10-10 10-16 0-6-4-12-10-12z" className="fill-primary" />
                <path
                  d="M16 6v20M10 12h12M12 18h8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-primary-foreground"
                />
                <circle cx="16" cy="10" r="2" className="fill-cyan-accent" />
              </svg>
              <div
                className={cn(
                  "absolute inset-0 bg-primary/30 rounded-full blur-lg transition-opacity",
                  logoPulse ? "opacity-100" : "opacity-0",
                )}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl tracking-wider text-foreground">URBAN</span>
              <span className="text-primary text-sm tracking-wide glow-animate">ForageTools</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Search className="w-5 h-5" />
                <span className="sr-only">Search</span>
              </Button>

              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 md:w-80">
                  <div className="relative">
                    <Input
                      placeholder="Search gear, guides..."
                      className="w-full bg-card/90 backdrop-blur border-primary/30 focus:border-primary pr-10"
                      autoFocus
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-cyan-accent/20 blur-xl" />
                  </div>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-muted-foreground hover:text-foreground"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="sr-only">{theme === "dark" ? "Day Explorer" : "Night Forager"}</span>
              </Button>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
