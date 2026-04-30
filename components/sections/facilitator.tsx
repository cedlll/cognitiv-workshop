import Image from "next/image"
import Link from "next/link"
import { Globe, Linkedin } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"

const tags = ["UI Design", "Design Systems", "Fintech", "Startups"]

export function Facilitator() {
  return (
    <section
      id="facilitator"
      className="relative border-b border-border"
      aria-labelledby="facilitator-heading"
    >
      <div className="mx-auto max-w-[900px] px-6 py-16 md:py-20">
        <Reveal>
          <SectionLabel number="04" label="Facilitator" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="facilitator-heading"
            className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-[44px]"
          >
            Who&apos;s running this.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[260px_1fr] md:gap-12">
          <Reveal delay={0.1}>
            <div className="relative aspect-square w-full max-w-[260px] overflow-hidden border border-border bg-surface-elevated">
              <Image
                src="/facilitator.jpg"
                alt="Portrait of Eric Luciano, Principal UI Designer at PayMongo."
                fill
                sizes="(max-width: 768px) 260px, 260px"
                className="object-cover"
                priority={false}
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                  Eric Luciano
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Facilitator
                </span>
              </div>
              <p className="mt-1 font-mono text-[13px] text-muted-foreground">
                Principal UI Designer, PayMongo (YC 19)
              </p>

              <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground max-w-[560px]">
                Eric is a UI designer based in the Philippines with over a decade of experience crafting clean interfaces and design systems for startups and growing product teams. At PayMongo, he leads design on Payment Checkout, Merchant Dashboard, and PayMongo Pages — and previously built the design system that keeps their products consistent and scalable. He lives at the intersection of design and code, and this workshop is a distillation of how he actually works.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center rounded-md border border-border bg-transparent px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="https://ericsonl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  <Globe className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                  Website
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ericsonl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  <Linkedin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                  LinkedIn
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
