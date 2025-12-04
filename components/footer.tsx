import Link from "next/link"
import { Leaf } from "lucide-react"

const footerLinks = {
  explore: [
    { label: "Gear", href: "/gear" },
    { label: "Guides", href: "/guides" },
    { label: "Reviews", href: "/reviews" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/50 backdrop-blur-sm">
      {/* Leaf vein pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q25,30 50,50 T100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary"
          />
          <path
            d="M0,70 Q25,50 50,70 T100,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg tracking-wider">URBAN</span>
                <span className="text-primary text-xs">ForageTools</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bridging tradition with technology for the modern urban forager.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4">EXPLORE</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-sm tracking-wider mb-4">LEGAL</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} UrbanForageTools. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Made with care for the urban wilderness</p>
        </div>
      </div>
    </footer>
  )
}
