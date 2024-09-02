import Color from 'color'
import { AppImage } from '#/components/AppImage'
import { Icon } from '#/components/Icon'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'
import { MY_SOCIAL_MEDIA } from '#/constants/socials'
import { IconAndText } from './IconAndText'

export const MiniProfile = () => {
  return (
    <div className="w-full overflow-hidden rounded-md bg-white shadow-lg">
      <AppImage
        alt="Arsam"
        src="/images/arsam.png"
        classNames={{
          container: 'overflow-hidden h-[250px] sm:h-[350px] lg:h-[240px]',
          image: 'relative rounded-none sm:-top-[100px] lg:-top-[25px]',
        }}
      />

      <div
        className="flex items-center px-6 py-3"
        style={{
          backgroundColor: Color(BRAND_PRIMARY_DARKEST).alpha(1).string(),
        }}
      >
        <Icon
          name="clapper-board"
          color="var(--brand-primary-lightest)"
          size={24}
        />
        <p className="mx-3 text-sm font-semibold text-brand-primary-lightest">
          I&apos;m starting a YouTube channel!
        </p>
      </div>

      <div className="flex flex-col gap-4 px-6 py-4">
        <div className="flex flex-col gap-0">
          <h1 className="text-3xl font-semibold text-brand-primary-dark">
            Arsam Sarabi
          </h1>

          <p className="text-md text-brand-primary-light">
            Software engineer, Content creator
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <a href="mailto:me@arsam.dev" className="flex-1">
            <IconAndText icon="email" text="me@arsam.dev" />
          </a>

          <IconAndText icon="location" text="Oxford, UK" />

          {MY_SOCIAL_MEDIA.map(({ icon, link, text }) => {
            return (
              <a key={icon} href={link} className="flex-1">
                <IconAndText icon={icon} text={text} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
