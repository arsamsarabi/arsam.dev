import type { PropsWithChildren } from 'react'

export type SVGProps = PropsWithChildren<{
  className?: string
  size: number | string
  viewBox?: string
}>

export const SVG = ({
  children,
  className,
  size,
  viewBox = '0 0 24 24',
}: SVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {children}
    </svg>
  )
}
