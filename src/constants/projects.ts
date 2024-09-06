export type ProjectType = {
  name: string
  title: string
  description: string
  link: string
  color: string
  badge: string
  display: boolean
}

export const MY_PROJECT_LINKS: Array<ProjectType> = [
  {
    title: 'arsam cli',
    name: 'arsam',
    description: "Arsam's résumé in the terminal",
    link: 'https://www.npmjs.com/package/arsam',
    color: 'var(--brand-danger)',
    badge: 'Outdated',
    display: false,
  },
  {
    title: 'fallguys-names',
    name: 'fallguys-names',
    description:
      'Fully customizable what-three-words generator with a default set of fallguys names.',
    link: 'https://www.npmjs.com/package/fallguys-names',
    color: 'var(--brand-success)',
    badge: 'Updated',
    display: false,
  },
  {
    title: 'awesome-mui-ripple',
    name: 'awesome-mui-ripple',
    description: 'Add MUI ripple effect to your React components',
    link: 'https://www.npmjs.com/package/awesome-mui-ripple',
    color: 'var(--brand-danger-light)',
    badge: 'Stale',
    display: true,
  },
  {
    title: 'konami-codes-react',
    name: '@arsams/konami-codes-react',
    description: 'A React hook that provides Konami codes functionality.',
    link: 'https://www.npmjs.com/package/@arsams/konami-codes-react',
    color: 'var(--brand-success)',
    badge: 'Updated',
    display: true,
  },
  {
    title: 'readable-http-codes',
    name: 'readable-http-codes',
    description:
      '0 dependancy, readable HTTP code enums, cleaning up your codebase!',
    link: 'https://www.npmjs.com/package/readable-http-codes',
    color: 'var(--brand-success)',
    badge: 'Updated',
    display: true,
  },
  {
    title: 'gh-calendar-scraper',
    name: 'gh-calendar-scraper',
    description: 'Scrapes a users GitHub contributions calendar',
    link: 'https://www.npmjs.com/package/gh-calendar-scraper',
    color: 'var(--brand-danger)',
    badge: 'Outdated',
    display: false,
  },
  {
    title: 'color-shades',
    name: '@arsams/color-shades',
    description: 'Color shades generator',
    link: 'https://www.npmjs.com/package/@arsams/color-shades',
    color: 'var(--brand-primary-light)',
    badge: 'WIP',
    display: true,
  },
  {
    title: 'konami-codes',
    name: '@arsams/konami-codes',
    description: 'A typescript class that provides Konami codes functionality.',
    link: 'https://www.npmjs.com/package/@arsams/konami-codes',
    color: 'var(--brand-success)',
    badge: 'Updated',
    display: false,
  },
]
