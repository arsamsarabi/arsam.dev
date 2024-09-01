import { SVG } from './SVG'
import { SVG_DEFAULT_COLOR, SVG_DEFAULT_DIMENSION } from './common'
import { CustomIconProps } from './types'

export const LinkedInIcon = ({
  absoluteStrokeWidth: _,
  className,
  color = SVG_DEFAULT_COLOR,
  size = SVG_DEFAULT_DIMENSION,
}: CustomIconProps) => {
  return (
    <SVG size={size} className={className} viewBox="-2 4 24 24">
      <path
        fill={color}
        d="M0.92 11.32c-0.48 0-0.84 0.36-0.84 0.84v11.76c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-11.76c0-0.48-0.36-0.84-0.84-0.84zM1.84 8.16c0 0.508-0.412 0.92-0.92 0.92s-0.92-0.412-0.92-0.92c0-0.508 0.412-0.92 0.92-0.92s0.92 0.412 0.92 0.92zM15.28 11.68c-1.8-0.96-4.44-0.28-8.040 2v-1.52c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84v11.76c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-8.24c4.52-3.12 6.48-2.92 7.24-2.52 1.040 0.56 1.040 2.080 1.040 2.080v8.68c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-8.64c0-0.12 0-2.56-1.92-3.6z"
      ></path>
    </SVG>
  )
}
