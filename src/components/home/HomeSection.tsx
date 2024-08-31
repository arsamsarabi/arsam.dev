import { ReactNode } from 'react'
import { cn } from '#/utils/cn'

export type HomeSectionProps = {
  Header: ReactNode
  Body: ReactNode
  Footer: ReactNode
  bgColour: string
}

export const HomeSection = ({
  Header,
  Body,
  Footer,
  bgColour,
}: HomeSectionProps) => {
  return (
    <div className={cn('flex flex-col md:min-h-[85vh]', bgColour)}>
      <section className="center-child flex-1 flex-col py-8">
        <div className="height-[40px] flex w-5/6 items-center justify-start gap-2">
          {Header}
        </div>

        <div className="center-child w-full flex-1 flex-col px-8 py-10 md:w-5/6 md:px-0">
          {Body}
        </div>

        <div className="height-[40px] flex w-5/6 flex-row items-center justify-between">
          {Footer}
        </div>
      </section>
    </div>
  )
}
