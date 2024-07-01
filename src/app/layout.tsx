import '#/styles/globals.css'
import type { Metadata } from 'next'
import { Layout } from '#/components/layout'
import { Providers } from '#/components/providers'
import { body, heading } from '#/styles/fonts'

export const metadata: Metadata = {
  title: 'Arsam',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" src="/scripts/noflash.js" />
      </head>
      <body className={`${heading.variable} ${body.variable}`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
