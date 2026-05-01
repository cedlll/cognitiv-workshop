"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"

export function Hero() {
  const reduce = useReducedMotion()

  const initial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
  const animate = { opacity: 1, y: 0 }
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
      aria-label="Workshop introduction"
    >
      {/* Decorative grid background */}
      <div
        className="pointer-events-none absolute inset-0 grid-pattern opacity-60"
        aria-hidden="true"
      />
      {/* Radial fade overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,92,252,0.10), transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[900px] px-6 py-16 md:py-20">
        <motion.p
          initial={initial}
          animate={animate}
          transition={{ duration: 0.6, ease }}
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
        >
          — BGC
          <span className="mx-2 text-border" aria-hidden="true">
            /
          </span>
          May 30
        </motion.p>

        <motion.h1
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="mt-6 font-display text-[56px] font-semibold leading-[0.95] tracking-tight text-foreground sm:text-[72px] md:text-[88px]"
        >
          Design <span className="text-muted-foreground">×</span> AI
        </motion.h1>

        <motion.p
          initial={initial}
          animate={animate}
          transition={{ duration: 0.6, ease, delay: 0.16 }}
          className="mt-6 max-w-[640px] text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          A hands-on workshop for designers ready to work with AI —{" "}
          <span className="text-foreground">not around it.</span>
        </motion.p>

        <motion.p
          initial={initial}
          animate={animate}
          transition={{ duration: 0.6, ease, delay: 0.22 }}
          className="mt-3 text-sm text-muted-foreground"
        >
          Hands-on. In-person. Limited to 20 participants.
        </motion.p>

        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="/reserve"
            className="group inline-flex items-center gap-2 rounded-md cta-gradient px-5 py-3 text-sm font-medium text-white animate-pulse-glow transition-transform hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Reserve your seat
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </a>

          <a
            href="#schedule"
            className="group inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/40 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View the agenda
            <ArrowDown
              className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </a>
        </motion.div>

        {/* Meta row */}
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4"
        >
          {[
            { label: "Date", value: "Sat · May 30" },
            { label: "Time", value: "1:00-5:00 PM" },
            { label: "Venue", value: "LgoConnects" },
            {
              label: "Status",
              value: "Open",
              live: true,
            },
          ].map((meta) => (
            <div
              key={meta.label}
              className="flex flex-col gap-1 bg-background px-4 py-3"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {meta.label}
              </span>
              <span className="flex items-center gap-2 font-mono text-[13px] text-foreground">
                {meta.live && (
                  <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-2)] opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]" />
                  </span>
                )}
                {meta.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
