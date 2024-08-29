import { Alegreya, Mulish } from 'next/font/google'

export const heading = Alegreya({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-heading',
})

export const body = Mulish({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-body',
})
