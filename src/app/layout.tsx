import '#/styles/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { NetworkStatus } from '#/components/NetworkStatus'
import { Toaster } from '#/components/ui/sonner'
import { body, code, heading } from '#/styles/fonts'
import { env } from '#/utils/env'

export const metadata: Metadata = {
  title: 'Arsam',
  description: 'Staff Software Engineer and product maker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
      </head>

      <body className={`${code.variable} ${heading.variable} ${body.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>

        {/* Must live inside <body>: siblings of <body> break hydration */}
        <Toaster />
        <NetworkStatus />

        <SpeedInsights />
        <Analytics />

        {env.GA4_ID && <GoogleAnalytics gaId={env.GA4_ID} />}
      </body>
    </html>
  )
}
