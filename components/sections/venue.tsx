import Image from "next/image"
import Link from "next/link"
import { SectionLabel } from "@/components/section-label"
import { Reveal } from "@/components/reveal"
import { MapPin, ParkingSquare, ExternalLink } from "lucide-react"

const parking = [
  "Bonifacio One Tech Tower (31st St & Rizal Dr)",
  "Three Parkade (near 32nd St)",
  "Carplaza (32nd St)",
  "UPark (34th St)",
]

export function Venue() {
  return (
    <section
      id="venue"
      className="relative border-b border-border"
      aria-labelledby="venue-heading"
    >
      <div className="mx-auto max-w-[900px] px-6 py-16 md:py-20">
        <Reveal>
          <SectionLabel number="05" label="Venue" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="venue-heading"
            className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-[44px]"
          >
            LgoConnects, BGC.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {/* Address */}
          <Reveal delay={0.08} className="bg-surface-elevated p-6 md:p-8">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              Address
            </div>
            <address className="mt-4 not-italic text-[15px] leading-relaxed text-foreground">
              LgoConnects
              <br />
              <span className="text-muted-foreground">
                Bonifacio Global City, Taguig
                <br />
                Metro Manila, Philippines
              </span>
            </address>

            <p className="mt-6 max-w-[420px] text-[14px] leading-relaxed text-muted-foreground">
              A modern co-working and event space in the heart of BGC.
              Accessible by MRT (Bonifacio High Street), Grab, and walking
              distance from major landmarks.
            </p>

            <Link
              href="https://maps.app.goo.gl/qVD5kiqygX1n3b8m7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
              View on maps
              <ExternalLink className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
            </Link>

            <div className="mt-6">
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                <ParkingSquare className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                Nearby parking
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {parking.map((spot) => (
                  <li
                    key={spot}
                    className="inline-flex items-center gap-1.5 rounded-md border border-border bg-transparent px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                  >
                    {spot}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Venue photo */}
          <Reveal
            delay={0.14}
            className="relative min-h-[260px] bg-surface-elevated md:min-h-0"
          >
            <Image
              src="/venue-3.jpg"
              alt="LgoConnects event space"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={false}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
