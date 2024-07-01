import { PropsWithChildren } from 'react'
import { Header } from './header'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="w-svw h-svh overflow-hidden flex flex-col items-center justify-start">
      <Header />
      {children}
    </main>
  )
}
