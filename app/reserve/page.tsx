"use client"

import Link from "next/link"
import { ArrowLeft, Copy, Check, Mail } from "lucide-react"
import { useState } from "react"
import { Reveal } from "@/components/reveal"

const BANK_DETAILS = {
  bankName: process.env.NEXT_PUBLIC_BANK_NAME || "BPI",
  accountName: process.env.NEXT_PUBLIC_ACCOUNT_NAME || "Clarence Cedric Lee",
  accountNumber: process.env.NEXT_PUBLIC_ACCOUNT_NUMBER || "3729-3760-26",
  accountNumberClean: (process.env.NEXT_PUBLIC_ACCOUNT_NUMBER || "3729-3760-26").replace(/\s|-/g, ""),
}

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@cognitivworkshop.com"

export default function ReservePage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(field)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      // Fallback: alert user to copy manually
      alert('Failed to copy. Please select and copy manually.')
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-[900px] items-center justify-between px-6 py-5">
          <Link
            href="/#tickets"
            className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back
          </Link>
          <span className="font-display text-sm font-medium text-foreground">
            Design <span className="text-muted-foreground">×</span> AI
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-[900px] px-6 py-16 md:py-24">
        <Reveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            Step 1 of 2
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-[44px]">
            Reserve Your Seat
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-muted-foreground">
            Transfer the workshop fee to the bank account below, then send your
            proof of payment to confirm your reservation.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Bank Details Card */}
          <Reveal delay={0.15}>
            <div className="rounded-lg border border-border bg-surface-elevated p-6 md:p-8">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Bank Transfer Details
              </h2>

              {/* QR Code Placeholder */}
              <div className="mt-6 flex justify-center">
                <div className="relative flex h-48 w-48 items-center justify-center rounded-lg border border-dashed border-border bg-card">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-12 w-12 rounded-md bg-muted" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      QR Code
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {/* Bank Name */}
                <div className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-3">
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Bank
                    </span>
                    <span className="mt-0.5 block text-[15px] text-foreground">
                      {BANK_DETAILS.bankName}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_DETAILS.bankName, "bank")}
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Copy bank name"
                  >
                    {copied === "bank" ? (
                      <Check className="h-4 w-4 text-accent-2" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Account Name */}
                <div className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-3">
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Account Name
                    </span>
                    <span className="mt-0.5 block text-[15px] text-foreground">
                      {BANK_DETAILS.accountName}
                    </span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(BANK_DETAILS.accountName, "name")}
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Copy account name"
                  >
                    {copied === "name" ? (
                      <Check className="h-4 w-4 text-accent-2" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Account Number */}
                <div className="flex items-center justify-between rounded-md border border-border bg-card px-4 py-3">
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Account Number
                    </span>
                    <span className="mt-0.5 block font-mono text-[15px] tracking-wide text-foreground">
                      {BANK_DETAILS.accountNumber}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard(BANK_DETAILS.accountNumberClean, "number")
                    }
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="Copy account number"
                  >
                    {copied === "number" ? (
                      <Check className="h-4 w-4 text-accent-2" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Pricing reminder */}
              <div className="mt-6 rounded-md border border-primary/20 bg-primary/5 px-4 py-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Workshop Pass
                  </span>
                  <span className="font-display text-xl font-semibold text-foreground">
                    ₱2,000
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Instructions Card */}
          <Reveal delay={0.2}>
            <div className="rounded-lg border border-border bg-surface-elevated p-6 md:p-8">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                How to Confirm Your Seat
              </h2>

              <ol className="mt-6 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-[12px] font-medium text-foreground">
                    1
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium text-foreground">
                      Transfer the exact amount
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                      Use the bank details on the left. Make sure the amount
                      matches the ticket price.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-[12px] font-medium text-foreground">
                    2
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium text-foreground">
                      Take a screenshot
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                      Capture your payment confirmation or transaction receipt
                      from your banking app.
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-[12px] font-medium text-foreground">
                    3
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium text-foreground">
                      Email your proof of payment
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                      Send the screenshot along with your full name and contact
                      number to the email below.
                    </p>
                  </div>
                </li>
              </ol>

              {/* Email CTA */}
              <div className="mt-8 border-t border-border pt-6">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Send proof of payment to
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Workshop%20Reservation%20-%20Proof%20of%20Payment`}
                  className="group mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md cta-gradient px-5 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background animate-pulse-glow"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                </a>
                <p className="mt-3 text-center font-mono text-[10px] text-muted-foreground">
                  Include: Screenshot, Full Name, Contact Number
                </p>
              </div>

              {/* What happens next */}
              <div className="mt-8 rounded-md border border-border bg-card px-4 py-4">
                <h3 className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  What happens next?
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  Once we verify your payment, you&apos;ll receive a confirmation
                  email within 24-48 hours with your ticket and event details.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Footer note */}
        <Reveal delay={0.25}>
          <p className="mt-12 text-center text-[13px] text-muted-foreground">
            Questions?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              Reach out to us
            </a>{" "}
            and we&apos;ll help you out.
          </p>
        </Reveal>
      </div>
    </main>
  )
}
