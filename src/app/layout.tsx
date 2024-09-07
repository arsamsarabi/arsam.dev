import '#/styles/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { NetworkStatus } from '#/components/NetworkStatus'
import { Toaster } from '#/components/ui/sonner'
import { body, code, heading } from '#/styles/fonts'
import { env } from '#/utils/env'

export const metadata: Metadata = {
  title: 'Arsam',
  description: 'Software engineer, Content creator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
      </head>

      <body className={`${code.variable} ${heading.variable} ${body.variable}`}>
        {children}
      </body>

      <Toaster />
      <NetworkStatus />

      <SpeedInsights />
      {env.GA4_ID && <GoogleAnalytics gaId={env.GA4_ID} />}
    </html>
  )
}
