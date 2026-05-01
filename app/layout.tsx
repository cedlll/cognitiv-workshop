import type { Metadata } from 'next'
import { Inter, Syne, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Design x AI — A Half-Day Workshop · May 30, 2026 · BGC',
  description:
    'A hands-on, in-person workshop for product and UX designers ready to build fluency with AI tools. 20 seats only. May 30, 2026 at LgoConnects, BGC.',
  keywords: [
    'design workshop',
    'AI design',
    'UX design',
    'product design',
    'Manila workshop',
    'BGC events',
    'design tools',
    'AI tools',
  ],
  authors: [{ name: 'Cedric Lee', url: 'https://www.linkedin.com/in/cedmanila/' }],
  creator: 'Cedric Lee',
  openGraph: {
    title: 'Design x AI — A Half-Day Workshop · May 30, 2026 · BGC',
    description:
      'A hands-on workshop for designers ready to work with AI — not around it. May 30, 2026, BGC.',
    type: 'website',
    locale: 'en_PH',
    siteName: 'Design x AI Workshop',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design x AI — A Half-Day Workshop',
    description:
      'A hands-on workshop for designers ready to work with AI — not around it. May 30, 2026, BGC.',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
