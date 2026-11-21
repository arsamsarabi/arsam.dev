import type { Metadata } from 'next'
import { HomePage } from '#/components/home'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Arsam',
    description: 'Staff Software Engineer and product maker',
    openGraph: {
      images: ['/images/logo.png/'],
    },
  }
}

export default function Home() {
  return <HomePage />
}
