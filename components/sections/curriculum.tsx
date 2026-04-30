import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"

const topics = [
  {
    n: "01",
    title: "AI-Assisted Prototyping",
    body: "Build functional mockups with v0, Cursor, and Claude. Go from brief to interactive prototype in under an hour.",
  },
  {
    n: "02",
    title: "Design Systems in the Age of LLMs",
    body: "How to structure your tokens, components, and documentation so AI tools can actually use them.",
  },
  {
    n: "03",
    title: "Evaluating AI Output",
    body: "Train your eye to catch what AI gets wrong. Quality control as a design skill.",
  },
  {
    n: "04",
    title: "Workflow Integration",
    body: "Map AI into your existing process — research, ideation, handoff. Build a personal AI stack that fits how you work.",
  },
]

export function Curriculum() {
  return (
    <section
      id="curriculum"
      className="relative border-b border-border"
      aria-labelledby="curriculum-heading"
    >
      <div className="mx-auto max-w-[900px] px-6 py-16 md:py-20">
        <Reveal>
          <SectionLabel number="02" label="Curriculum" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="curriculum-heading"
            className="mt-5 max-w-[720px] font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground text-balance sm:text-4xl md:text-[44px]"
          >
            What you&apos;ll actually learn.
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {topics.map((topic, i) => {
            const isLastOdd = topics.length % 2 !== 0 && i === topics.length - 1
            return (
              <Reveal
                key={topic.n}
                as="li"
                delay={0.05 * i}
                className={`group relative bg-surface-elevated p-6 transition-colors hover:bg-card md:p-8 ${
                  isLastOdd ? "sm:col-span-2" : ""
                }`}
              >
                {/* Left accent on hover */}
                <span
                  className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-y-100"
                  aria-hidden="true"
                />

                <div
                  className={
                    isLastOdd
                      ? "grid gap-x-10 gap-y-3 md:grid-cols-[1fr_1.4fr] md:items-start"
                      : "flex flex-col gap-3"
                  }
                >
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {topic.n}
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {topic.title}
                    </h3>
                  </div>

                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {topic.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
