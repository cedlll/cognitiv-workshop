import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"

const schedule = [
  { time: "09:00 AM", session: "Doors Open + Coffee", kind: "break" },
  { time: "09:30 AM", session: "Opening — The State of Design + AI" },
  { time: "10:00 AM", session: "Session 1 — Prompting for Designers" },
  {
    time: "11:00 AM",
    session: "Session 2 — AI-Assisted Prototyping (hands-on)",
  },
  { time: "12:30 PM", session: "Lunch Break", kind: "break" },
  { time: "01:30 PM", session: "Session 3 — Design Systems + LLMs" },
  { time: "02:30 PM", session: "Session 4 — Evaluating AI Output" },
  { time: "03:30 PM", session: "Break", kind: "break" },
  { time: "03:45 PM", session: "Session 5 — Building Your AI Workflow" },
  { time: "05:00 PM", session: "Group Critique + Open Build Time" },
  { time: "05:45 PM", session: "Closing Remarks + Q&A" },
  { time: "06:00 PM", session: "End", kind: "break" },
] as const

export function Agenda() {
  return (
    <section
      id="schedule"
      className="relative border-b border-border"
      aria-labelledby="schedule-heading"
    >
      <div className="mx-auto max-w-[900px] px-6 py-16 md:py-20">
        <Reveal>
          <SectionLabel number="03" label="Schedule" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-5 flex flex-wrap items-baseline justify-between gap-4">
            <h2
              id="schedule-heading"
              className="font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-[44px]"
            >
              May 30, 2026
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              09:00 — 18:00 PHT
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="mt-12 overflow-hidden rounded-lg border border-border">
            {schedule.map((item, i) => {
              const isBreak = item.kind === "break"
              return (
                <li
                  key={item.time}
                  className={`relative grid grid-cols-[100px_1fr] items-center gap-4 border-b border-border px-5 py-4 last:border-b-0 sm:grid-cols-[140px_1fr] sm:px-6 sm:py-5 ${
                    i % 2 === 0 ? "bg-surface-elevated" : "bg-surface-base"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`block h-1.5 w-1.5 rounded-full ${
                        isBreak ? "bg-border" : "bg-primary"
                      }`}
                      aria-hidden="true"
                    />
                    <time className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground sm:text-[13px]">
                      {item.time}
                    </time>
                  </div>
                  <span
                    className={`text-[14px] sm:text-[15px] ${
                      isBreak
                        ? "text-muted-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {item.session}
                  </span>
                </li>
              )
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
