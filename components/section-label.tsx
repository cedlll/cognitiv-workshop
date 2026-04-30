interface SectionLabelProps {
  number: string
  label: string
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      <span aria-hidden="true">— </span>
      <span className="text-foreground/70">{number}</span>
      <span className="mx-2 text-border" aria-hidden="true">
        /
      </span>
      <span>{label}</span>
    </div>
  )
}
