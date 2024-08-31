import { ReactNode } from 'react'

export type HomeSectionProps = {
  Header: ReactNode
  Body: ReactNode
  Footer: ReactNode
}

export const HomeSection = ({ Header, Body, Footer }: HomeSectionProps) => {
  return (
    <section className="center-child h-full flex-col">
      <div className="height-[40px] flex w-5/6 items-center justify-start gap-2 pt-4">
        {Header}
      </div>
      <div className="center-child w-5/6 flex-1 flex-col">{Body}</div>

      <div className="height-[40px] flex w-5/6 flex-row items-center justify-between pb-4">
        {Footer}
      </div>
    </section>
  )
}
