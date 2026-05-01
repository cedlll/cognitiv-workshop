"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import { motion, useReducedMotion } from "framer-motion"

const inclusions = [
  "Half-day workshop access",
  "Lightning talk",
  "Networking and Q&A",
]

export function Pricing() {
  const reduce = useReducedMotion()

  return (
    <section
      id="tickets"
      className="relative border-b border-border"
      aria-labelledby="tickets-heading"
    >
      <div className="mx-auto max-w-[900px] px-6 py-16 md:py-20">
        <Reveal>
          <SectionLabel number="06" label="Tickets" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="tickets-heading"
            className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-[44px]"
          >
            20 seats. One price.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 relative" style={{ perspective: "800px" }}>
            {/* Ticket container */}
            <motion.div
              className="flex flex-col md:flex-row"
              whileHover={reduce ? undefined : { rotateX: -1, rotateY: 1.5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Main ticket body */}
              <div className="relative flex-1 rounded-l-xl rounded-r-xl md:rounded-r-none bg-surface-elevated border border-border p-8 md:p-10">
                {/* Top: event info */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Workshop Pass
                    </p>
                    <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      Design × AI
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                      ₱2,000
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-dashed border-border/60" />

                {/* Middle: details grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Date
                    </p>
                    <p className="mt-1 text-[14px] font-medium text-foreground">
                      May 30, 2026
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Time
                    </p>
                    <p className="mt-1 text-[14px] font-medium text-foreground">
                      1:00 PM – 5:00 PM
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Venue
                    </p>
                    <p className="mt-1 text-[14px] font-medium text-foreground">
                      LgoConnects, BGC
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-dashed border-border/60" />

                {/* Bottom: inclusions */}
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted-foreground">
                  {inclusions.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tear line / perforation - desktop only */}
              <div className="relative hidden md:flex flex-col items-center justify-center" aria-hidden="true">
                {/* Top notch */}
                <div className="absolute -top-[1px] h-5 w-10 rounded-b-full bg-background border-b border-x border-border z-10" />
                {/* Dashed line */}
                <div className="h-full w-0 border-l-2 border-dashed border-border/50" />
                {/* Bottom notch */}
                <div className="absolute -bottom-[1px] h-5 w-10 rounded-t-full bg-background border-t border-x border-border z-10" />
              </div>

              {/* Tear line / perforation - mobile only */}
              <div className="relative flex md:hidden items-center justify-center py-0" aria-hidden="true">
                {/* Left notch */}
                <div className="absolute -left-[1px] h-10 w-5 rounded-r-full bg-background border-r border-y border-border z-10" />
                {/* Dashed line */}
                <div className="w-full h-0 border-t-2 border-dashed border-border/50" />
                {/* Right notch */}
                <div className="absolute -right-[1px] h-10 w-5 rounded-l-full bg-background border-l border-y border-border z-10" />
              </div>

              {/* Ticket stub / CTA */}
              <motion.div
                className="relative rounded-b-xl md:rounded-b-none md:rounded-r-xl bg-surface-elevated border border-border md:border-l-0 md:border-t flex flex-col items-center justify-center p-6 md:p-8 md:w-[200px]"
                whileHover={reduce ? undefined : {
                  x: 4,
                  rotate: 1.5,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  Admit one
                </p>
                <Link
                  href="/reserve"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-md cta-gradient px-5 py-3 text-sm font-medium text-white animate-pulse-glow transition-transform hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Reserve
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </Link>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60 text-center">
                  No. 001–020
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-8 max-w-[720px] text-[13px] text-muted-foreground">
            Limited to 20 participants. One straightforward price. Secure your seat today and join us for an intensive half-day deep dive into design and AI.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
