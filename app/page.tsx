import { SiteNav } from "@/components/sections/site-nav"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Curriculum } from "@/components/sections/curriculum"
import { Agenda } from "@/components/sections/agenda"
import { Facilitator } from "@/components/sections/facilitator"
import { Venue } from "@/components/sections/venue"
import { Pricing } from "@/components/sections/pricing"
import { Faq } from "@/components/sections/faq"
import { SiteFooter } from "@/components/sections/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Agenda />
        <Facilitator />
        <Venue />
        <Pricing />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
