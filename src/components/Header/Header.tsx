import { cn } from '#/utils/cn'
import { Logo } from './Logo'
import { Navbar } from './Navbar'

export type HeaderProps = {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        'z-50 flex h-12 items-center space-x-16 bg-brand-light px-8',
        className
      )}
    >
      <Logo />
      <Navbar />
    </header>
  )
}
