import { ReactNode } from 'react'
import { cn } from '#/utils/cn'
import { PartialRecord } from '#/utils/types'

type ClassNamesElements =
  | 'wrapper'
  | 'inner'
  | 'header-wrapper'
  | 'body-wrapper'
  | 'footer-wrapper'

export type HomeSectionProps = {
  bgColour: string
  Body: ReactNode
  classNames?: PartialRecord<ClassNamesElements, string>
  Footer: ReactNode
  Header: ReactNode
}

export const HomeSection = ({
  bgColour,
  Body,
  classNames,
  Footer,
  Header,
}: HomeSectionProps) => {
  return (
    <div
      className={cn(
        'flex flex-col md:min-h-[85vh]',
        bgColour,
        classNames?.wrapper
      )}
    >
      <section
        className={cn(
          'center-child flex-1 flex-col px-8 py-4 lg:py-8 3xl:p-16',
          classNames?.inner
        )}
      >
        <HeadFootWrapper className={classNames?.['header-wrapper']}>
          {Header}
        </HeadFootWrapper>

        <div
          className={cn(
            'center-child w-full flex-1 flex-col py-10',
            classNames?.['body-wrapper']
          )}
        >
          {Body}
        </div>

        <HeadFootWrapper className={classNames?.['footer-wrapper']}>
          {Footer}
        </HeadFootWrapper>
      </section>
    </div>
  )
}

function HeadFootWrapper({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'height-[40px] flex w-full flex-row items-center justify-start gap-4',
        className
      )}
    >
      {children}
    </div>
  )
}
