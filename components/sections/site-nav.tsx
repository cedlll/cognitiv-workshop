"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#schedule", label: "Schedule" },
  { href: "#facilitator", label: "Facilitator" },
  { href: "#tickets", label: "Tickets" },
  { href: "#faq", label: "FAQ" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight text-foreground"
          aria-label="Design × AI — back to top"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
          Design <span className="text-muted-foreground">×</span> AI
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/reserve"
          className="rounded-md border border-border bg-surface-elevated px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-foreground transition-colors hover:border-primary/60"
        >
          Reserve seat
        </Link>
      </div>
    </header>
  )
}
