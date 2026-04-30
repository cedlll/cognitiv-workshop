"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "Who is this workshop for?",
    a: "For product designers, UX designers, and design leads who want hands-on fluency with AI tools. No coding experience needed — just bring your curiosity.",
  },
  {
    q: "What should I bring?",
    a: "Just your laptop. Wi-Fi is provided at the venue.",
  },
  {
    q: "What tools will we use?",
    a: "We'll send you the full tool list one week before the event so you have time to get set up.",
  },
  {
    q: "Will sessions be recorded?",
    a: "No — this workshop is intentionally in-person only. The real value happens in the room, and we want to keep it that way.",
  },
  {
    q: "Can I transfer my ticket?",
    a: "Yes! If your plans change, you can transfer your ticket to someone else. Just reach out at least 5 days before the event date.",
  },
  {
    q: "What's the refund policy?",
    a: "Full refunds are available up to May 18, 2026. After that, you're eligible for a 50% refund. No refunds beyond the cutoff — but transfers are always an option.",
  },
]

export function Faq() {
  return (
    <section
      id="faq"
      className="relative border-b border-border"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[900px] px-6 py-16 md:py-20">
        <Reveal>
          <SectionLabel number="07" label="FAQ" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="faq-heading"
            className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-[44px]"
          >
            Good questions.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion.Root
            type="single"
            collapsible
            className="mt-12 overflow-hidden rounded-lg border border-border"
          >
            {faqs.map((item, i) => (
              <Accordion.Item
                key={item.q}
                value={`item-${i}`}
                className="border-b border-border last:border-b-0"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 bg-surface-elevated px-5 py-5 text-left transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:px-6 sm:py-6">
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-medium text-foreground sm:text-base">
                        {item.q}
                      </span>
                    </span>
                    <Plus
                      className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 ease-out group-data-[state=open]:rotate-45"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden bg-surface-base text-[15px] leading-relaxed text-muted-foreground data-[state=closed]:animate-[accordion-up_220ms_ease-out] data-[state=open]:animate-[accordion-down_260ms_ease-out]">
                  <div className="px-5 pt-6 pb-6 sm:px-6 sm:pl-[3.75rem]">
                    {item.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  )
}
