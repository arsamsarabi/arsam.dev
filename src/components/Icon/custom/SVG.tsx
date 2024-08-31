import type { PropsWithChildren } from 'react'

export type SVGProps = PropsWithChildren<{
  className?: string
  size: number | string
}>

export const SVG = ({ children, className, size }: SVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  )
}
