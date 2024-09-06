import '#/styles/one-dark.css'
import type { ReactNode } from 'react'
import { Footer } from '#/components/Footer'
import { Header } from '#/components/Header'

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[100%] flex-col items-start justify-start">
      <Header
        classNames={{
          root: 'w-screen px-8 py-4 2xl:py-8 lg:px-0',
          inner: 'container-max-w',
        }}
      />

      <div className="w-screen flex-1 overflow-y-auto">
        <div className="container-max-w flex h-[100%] flex-col">
          {children}
          <Footer className="mt-auto px-8 pb-8 pt-4 lg:px-0" />
        </div>
      </div>
    </div>
  )
}
