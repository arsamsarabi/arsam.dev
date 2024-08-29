import { Alegreya, Comfortaa } from 'next/font/google'

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
