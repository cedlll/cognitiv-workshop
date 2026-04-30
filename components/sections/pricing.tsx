import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"

const ticket = {
  name: "Workshop Pass",
  price: "₱2,000",
  primary: true,
} as const

const inclusions = [
  "Half-day workshop access",
  "Lightning talk",
  "Networking and Q&A",
] as const

export function Pricing() {
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
          <div className="mt-12 relative overflow-hidden rounded-lg border border-border bg-surface-elevated">
            <div className="grid md:grid-cols-[1fr_auto] md:items-center">
              {/* Left: Price and Inclusions */}
              <div className="flex flex-col gap-6 p-6 md:p-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl font-semibold tracking-tight text-foreground">
                    {ticket.price}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    / person
                  </span>
                </div>

                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted-foreground md:flex-col md:gap-3">
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

              {/* Right: CTA Button */}
              <div className="border-t border-border p-6 md:border-l md:border-t-0 md:p-8 md:flex md:items-center md:justify-center">
                <Link
                  href="/reserve"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-md cta-gradient px-6 py-3 text-sm font-medium text-white animate-pulse-glow transition-transform hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Reserve your seat
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
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
