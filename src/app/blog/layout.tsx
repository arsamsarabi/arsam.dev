import type { ReactNode } from 'react'
import { Header } from '#/components/Header'

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
