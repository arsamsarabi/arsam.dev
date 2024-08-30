import Image from 'next/image'
import { ReactNode } from 'react'
import { MooLogo } from '#/components/MooLogo'
import { ONILogo } from '#/components/ONILogo'

export type WorkExperience = {
  Logo: ReactNode
  title: string
  role: string
  duration: string
}

export const MY_RECENT_EMPLOYERS: Array<WorkExperience> = [
  {
    Logo: <ONILogo />,
    title: 'Oxford Nano Imaging',
    role: 'Senior Frontend Engineer',
    duration: 'September 2024',
  },
  {
    Logo: <MooLogo />,
    title: 'MOO',
    role: 'Senior Software Engineer',
    duration: 'August 2021 - September 2024',
  },
  {
    Logo: <Image src="/images/cxLoyalty_logo.gif" fill alt="CX loyalty logo" />,
    title: 'CX Loyalty',
    role: 'Mobile Application Developer',
    duration: 'May 2020 - August 2021',
  },
  {
    Logo: <Image src="/images/sensyne.png" fill alt="Sensyne Health logo" />,
    title: 'Sensyne Health',
    role: 'Senior Frontend Developer',
    duration: 'Jan 2019 - April 2020',
  },
  {
    Logo: (
      <Image src="/images/ContactPartners.jpg" fill alt="Sensyne Health logo" />
    ),
    title: 'Contact Partners',
    role: 'Senior Frontend Developer',
    duration: 'May 2017 - December 2018',
  },
]
