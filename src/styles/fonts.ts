import { Alegreya, Comfortaa, JetBrains_Mono } from 'next/font/google'

export const heading = Alegreya({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-heading',
})

export const body = Comfortaa({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-body',
})

export const code = JetBrains_Mono({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-code',
})
