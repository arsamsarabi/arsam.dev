import { SVG_DEFAULT_COLOR, SVG_DEFAULT_DIMENSION } from './common'
import { CustomIconProps } from './types'

export const PlayIcon = ({
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
        d="M3 12L3 18.9671C3 21.2763 5.53435 22.736 7.59662 21.6145L10.7996 19.8727M3 8L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L14.0026 18.131"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
