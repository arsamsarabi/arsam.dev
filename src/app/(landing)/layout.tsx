import { Header } from '#/components/header'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="w-svw h-svh overflow-hidden flex flex-col items-center justify-start">
      <Header />
      {children}
    </main>
  )
}
