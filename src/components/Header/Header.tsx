import { cn } from '#/utils/cn'
import { PartialRecord } from '#/utils/types'
import { Logo } from './Logo'
import { Navbar } from './Navbar'

type ClassNamesElements = 'root' | 'inner'

export type HeaderProps = {
  classNames?: PartialRecord<ClassNamesElements, string>
  showNav?: boolean
}

export const Header = ({ classNames, showNav = true }: HeaderProps) => {
  return (
    <header
      className={cn('z-50 flex w-screen bg-brand-light', classNames?.root)}
    >
      <div className={cn('flex items-center justify-start', classNames?.inner)}>
        <Logo />
        {showNav && <Navbar />}
      </div>
    </header>
  )
}
