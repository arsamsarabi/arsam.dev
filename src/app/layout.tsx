import '#/styles/globals.css'
import type { Metadata } from 'next'
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
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  )
}
