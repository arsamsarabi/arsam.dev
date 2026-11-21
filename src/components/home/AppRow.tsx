import type { ReactNode } from 'react'
import type { AppType } from '#/constants/projects'
import { AppCard } from './AppCard'

export type AppRowProps = {
  app: AppType
  // Two small cards stacked beside the app on large screens
  side: ReactNode
  // Put the stack on the left of the app instead of the right
  reverse?: boolean
}

export const AppRow = ({ app, side, reverse = false }: AppRowProps) => {
  return (
    <div className="col-span-full grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <AppCard {...app} />
      <div
        className={`grid gap-5 md:col-span-2 md:grid-cols-2 lg:col-span-1 lg:grid-cols-1 ${reverse ? 'lg:order-first' : ''}`}
      >
        {side}
      </div>
    </div>
  )
}
