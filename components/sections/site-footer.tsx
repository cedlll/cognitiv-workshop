export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-[1100px] px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} · All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Built for designers who ship.
          </p>
        </div>
      </div>
    </footer>
  )
}
