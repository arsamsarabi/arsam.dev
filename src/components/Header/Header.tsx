import { cn } from '#/utils/cn'
import { Logo } from './Logo'
import { Navbar } from './Navbar'

export type HeaderProps = {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn('z-50 flex w-screen bg-brand-light', className)}>
      <div className="container-max-w flex h-14 items-center justify-start space-x-16 px-8 lg:px-0">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}
