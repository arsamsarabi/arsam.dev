import '#/styles/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
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

      {env.GA4_ID && <GoogleAnalytics gaId={env.GA4_ID} />}
    </html>
  )
}
