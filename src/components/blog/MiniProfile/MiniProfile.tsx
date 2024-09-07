'use client'

import { sendGAEvent } from '@next/third-parties/google'
import Color from 'color'
import { AppImage } from '#/components/AppImage'
import { Icon } from '#/components/Icon'
import { IconAndLabel } from '#/components/IconAndLabel'
import { FadeInView } from '#/components/animated'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'
import { MY_SOCIAL_MEDIA } from '#/constants/socials'

export const MiniProfile = () => {
  return (
    <FadeInView className="w-full overflow-hidden rounded-md bg-white shadow-md shadow-black/15">
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
        <Icon name="clapper-board" color="var(--brand-primary-lightest)" />
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
          <a
            href="mailto:me@arsam.dev"
            className="flex-1"
            onClick={() =>
              sendGAEvent('event', 'Email link click', {
                source: 'mini profile',
              })
            }
          >
            <IconAndLabel icon="email" label="me@arsam.dev" />
          </a>

          <IconAndLabel icon="location" label="Oxford, UK" />

          {MY_SOCIAL_MEDIA.map(({ icon, link, text }) => {
            return (
              <a
                key={icon}
                href={link}
                className="flex-1"
                onClick={() =>
                  sendGAEvent('event', 'Social link click', {
                    source: 'mini profile',
                    platform: text,
                  })
                }
              >
                <IconAndLabel icon={icon} label={text} />
              </a>
            )
          })}
        </div>
      </div>
    </FadeInView>
  )
}
