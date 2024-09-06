import type { Metadata } from 'next'
import { HomePage } from '#/components/home'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Arsam',
    description: 'Software engineer, Content creator',
    openGraph: {
      images: ['/images/logo.png/'],
    },
  }
}

export default function Home() {
  return <HomePage />
}
