import { SVG } from './SVG'
import { SVG_DEFAULT_COLOR, SVG_DEFAULT_DIMENSION } from './common'
import { CustomIconProps } from './types'

export const ChevronUpIcon = ({
  absoluteStrokeWidth: _,
  className,
  color = SVG_DEFAULT_COLOR,
  size = SVG_DEFAULT_DIMENSION,
}: CustomIconProps) => {
  return (
    <SVG size={size} className={className}>
      <path
        d="M19 15L12 9L10.25 10.5M5 15L7.33333 13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  )
}
