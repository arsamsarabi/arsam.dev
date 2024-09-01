import type { PropsWithChildren } from 'react'

export const Code = (props: PropsWithChildren) => (
  <code
    className="rounded-sm bg-brand-primary-lightest px-1 py-[1px] text-brand-secondary-dark"
    {...props}
  />
)
