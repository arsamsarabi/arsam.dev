import { SVG } from './SVG'
import { SVG_DEFAULT_COLOR, SVG_DEFAULT_DIMENSION } from './common'
import { CustomIconProps } from './types'

export const CodeIcon = ({
  absoluteStrokeWidth: _,
  className,
  color = SVG_DEFAULT_COLOR,
  size = SVG_DEFAULT_DIMENSION,
}: CustomIconProps) => {
  return (
    <SVG size={size} className={className}>
      <path
        d="M16 11L17.6965 12.5268C19.239 13.9151 20.0103 14.6093 20.0103 15.5C20.0103 16.3907 19.239 17.0849 17.6965 18.4732L16 20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.00005 4.82959L6.30358 6.35641C4.76102 7.74471 3.98975 8.43886 3.98975 9.32959C3.98975 10.2203 4.76102 10.9145 6.30358 12.3028L8.00005 13.8296"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </SVG>
  )
}
