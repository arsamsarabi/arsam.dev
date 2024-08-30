import { SVG_DEFAULT_COLOR, SVG_DEFAULT_DIMENSION } from './common'
import { CustomIconProps } from './types'

export const ForwardIcon = ({
  width = SVG_DEFAULT_DIMENSION,
  height = SVG_DEFAULT_DIMENSION,
  color = SVG_DEFAULT_COLOR,
  className,
  absoluteStrokeWidth: _,
}: CustomIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.5 12L14.5 7M19.5 12L14.5 17M19.5 12L13 12M9.5 12C7.83333 12 4.5 13 4.5 17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
