import Image from 'next/image'
import { ReactNode } from 'react'
import type { IconNamesType } from '#/components/Icon'
import { MooLogo, ONILogo } from './logos'

export type WorkExperience = {
  logo: {
    Comp: ReactNode
    w?: string
    h?: string
  }
  title: string
  role: string
  duration: string
  link: string
  icon: IconNamesType
}

export const MY_RECENT_EMPLOYERS: Array<WorkExperience> = [
  {
    logo: { Comp: <ONILogo /> },
    title: 'ONI',
    role: 'Senior Frontend Engineer',
    duration: 'Starting 16th September',
    link: 'https://oni.bio',
    icon: 'link',
  },
  {
    logo: { Comp: <MooLogo /> },
    title: 'MOO',
    role: 'Senior Software Engineer',
    duration: 'Aug 2021 - Sep 2024',
    link: 'https://moo.com',
    icon: 'link',
  },
  {
    logo: {
      Comp: (
        <Image
          src="/images/cxLoyalty.png"
          fill
          alt="CX loyalty logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ),
      h: '40px',
      w: '150px',
    },
    title: 'CX Loyalty',
    role: 'Mobile Application Developer',
    duration: 'May 2020 - Aug 2021',
    link: 'https://www.cxloyalty.com',
    icon: 'link',
  },
  {
    logo: {
      Comp: (
        <Image
          src="/images/sensyne.png"
          fill
          alt="Sensyne Health logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ),
      h: '40px',
      w: '200px',
    },
    title: 'Sensyne Health',
    role: 'Senior Frontend Developer',
    duration: 'Jan 2019 - Apr 2020',
    link: 'https://www.sensynehealth.com',
    icon: 'link',
  },
  {
    logo: {
      Comp: (
        <Image
          src="/images/ContactPartners.png"
          fill
          alt="ContactPartners logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ),
      h: '90px',
      w: '90px',
    },
    title: 'ContactPartners',
    role: 'Senior Frontend Developer',
    duration: 'May 2017 - Dec 2018',
    link: 'https://www.google.com/search?q=contactpartners',
    icon: 'broken-link',
  },
]
