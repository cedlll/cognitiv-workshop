import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"

const stats = [
  { value: "½", unit: "Day", label: "Half-day intensive" },
  { value: "20", unit: "Seats", label: "Strict cap, no overbook" },
  { value: "100", unit: "% Hands-on", label: "Build, don't watch" },
]

export function About() {
  return (
    <section
      id="about"
      className="relative border-b border-border"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[900px] px-6 py-16 md:py-20">
        <Reveal>
          <SectionLabel number="01" label="About" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="about-heading"
            className="mt-5 max-w-[720px] font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground text-balance sm:text-4xl md:text-[44px]"
          >
            Built for designers who want to move faster without losing craft.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-6 text-[15px] leading-relaxed text-muted-foreground md:grid-cols-[1fr_auto] md:gap-12">
            <p className="max-w-[640px]">
              This workshop is for product and UX designers who want to build fluency with AI tools that are reshaping how interfaces get made. You&apos;ll work through real problems — prototyping, prompting, and evaluation — and leave with a workflow you can bring back to your team on Monday.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.unit}
                className="flex flex-col gap-2 bg-surface-elevated p-6"
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-medium text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">
                    {stat.unit}
                  </span>
                </div>
                <span className="text-[13px] text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
