export type WorkExperience = {
  title: string
  role: string
  duration: string
  link?: string
}

export const MY_RECENT_EMPLOYERS: Array<WorkExperience> = [
  {
    title: 'ONI',
    role: 'Staff Software Engineer',
    duration: 'Sep 2024 - Present',
    link: 'https://oni.bio',
  },
  {
    title: 'MOO',
    role: 'Senior Software Engineer',
    duration: 'Aug 2021 - Sep 2024',
    link: 'https://moo.com',
  },
  {
    title: 'CX Loyalty',
    role: 'Mobile Application Developer',
    duration: 'May 2020 - Aug 2021',
    link: 'https://www.cxloyalty.com',
  },
  {
    title: 'Sensyne Health',
    role: 'Senior Frontend Developer',
    duration: 'Jan 2019 - Apr 2020',
    link: 'https://www.sensynehealth.com',
  },
  {
    title: 'ContactPartners',
    role: 'Senior Frontend Developer',
    duration: 'May 2017 - Dec 2018',
  },
]
