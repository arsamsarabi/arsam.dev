import { SVG } from './SVG'
import { SVG_DEFAULT_COLOR, SVG_DEFAULT_DIMENSION } from './common'
import { CustomIconProps } from './types'

export const InstagramIcon = ({
  absoluteStrokeWidth: _,
  className,
  color = SVG_DEFAULT_COLOR,
  size = SVG_DEFAULT_DIMENSION,
}: CustomIconProps) => {
  return (
    <SVG size={size} className={className} viewBox="0 6 20 20">
      <path
        fill={color}
        d="M14.48 11.28c0 0.48-0.4 0.84-0.84 0.84-0.48 0-0.84-0.4-0.84-0.84 0-0.48 0.4-0.84 0.84-0.84 0.44-0.040 0.84 0.36 0.84 0.84zM17.76 11.64v8.72c0 2.48-2.040 4.52-4.52 4.52h-8.72c-2.48 0-4.52-2.040-4.52-4.52v-8.72c0-2.48 2.040-4.52 4.52-4.52h8.72c2.52 0 4.52 2.040 4.52 4.52zM16.080 11.64c0-1.56-1.28-2.84-2.84-2.84h-8.72c-1.56 0-2.84 1.28-2.84 2.84v8.72c0 1.56 1.28 2.84 2.84 2.84h8.72c1.6 0 2.88-1.28 2.88-2.84l-0.040-8.72zM13.52 16c0-2.56-2.080-4.64-4.64-4.64s-4.64 2.080-4.64 4.64 2.080 4.64 4.64 4.64 4.64-2.080 4.64-4.64zM11.84 16c0 1.64-1.32 2.96-2.96 2.96s-2.96-1.32-2.96-2.96 1.32-2.96 2.96-2.96 2.96 1.32 2.96 2.96z"
      ></path>
    </SVG>
  )
}
