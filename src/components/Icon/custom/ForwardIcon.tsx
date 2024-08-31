import { SVG } from './SVG'
import { SVG_DEFAULT_COLOR, SVG_DEFAULT_DIMENSION } from './common'
import { CustomIconProps } from './types'

export const ForwardIcon = ({
  absoluteStrokeWidth: _,
  className,
  color = SVG_DEFAULT_COLOR,
  size = SVG_DEFAULT_DIMENSION,
}: CustomIconProps) => {
  return (
    <SVG size={size} className={className}>
      <path
        d="M19.5 12L14.5 7M19.5 12L14.5 17M19.5 12L13 12M9.5 12C7.83333 12 4.5 13 4.5 17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  )
}
