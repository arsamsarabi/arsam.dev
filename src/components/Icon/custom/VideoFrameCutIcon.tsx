import { SVG } from './SVG'
import { SVG_DEFAULT_COLOR, SVG_DEFAULT_DIMENSION } from './common'
import { CustomIconProps } from './types'

export const VideoFrameCutIcon = ({
  absoluteStrokeWidth: _,
  className,
  color = SVG_DEFAULT_COLOR,
  size = SVG_DEFAULT_DIMENSION,
}: CustomIconProps) => {
  return (
    <SVG size={size} className={className}>
      <path
        d="M22 10C22 7.17157 22 5.75736 21.1213 4.87868C20.2426 4 18.8284 4 16 4H15.5M22 14C22 16.8284 22 18.2426 21.1213 19.1213C20.2426 20 18.8284 20 16 20H15.5M8.5 4H8C5.17157 4 3.75736 4 2.87868 4.87868C2 5.75736 2 7.17157 2 10V14C2 16.8284 2 18.2426 2.87868 19.1213C3.75736 20 5.17157 20 8 20H8.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 4V20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 4V20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.5 9L7 9M21.5 9L17 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.5 15L7 15M21.5 15L17 15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.1384 2H10.8616C10.4777 2 10.237 2.41474 10.4275 2.74807L11.5659 4.74029C11.7578 5.07619 12.2422 5.07619 12.4341 4.74029L13.5725 2.74807C13.763 2.41474 13.5223 2 13.1384 2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.1384 22H10.8616C10.4777 22 10.237 21.5853 10.4275 21.252L11.5659 19.2597C11.7578 18.9238 12.2422 18.9238 12.4341 19.2597L13.5725 21.252C13.763 21.5853 13.5223 22 13.1384 22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 11.5V12.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 7.5V8.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 15.5V16.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </SVG>
  )
}
