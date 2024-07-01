import { Archivo, Josefin_Sans } from 'next/font/google'

export const heading = Josefin_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-heading',
})

export const body = Archivo({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-body',
})
