import Color from 'color'
import Link from 'next/link'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'

export type IntroTitleProps = {
  thumbnail: string
  title: string
  link: string
}

export const IntroTitle = ({ link, thumbnail, title }: IntroTitleProps) => {
  return (
    <Link href={link}>
      <div
        className="flex h-52 flex-col justify-end gap-4 bg-cover"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      >
        <div
          style={{
            backgroundColor: Color(BRAND_PRIMARY_DARKEST).alpha(0.85).string(),
          }}
          className="p-4"
        >
          <p className="text-xl text-brand-primary-lightest">{title}</p>
        </div>
      </div>
    </Link>
  )
}
