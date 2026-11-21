export type ProjectType = {
  name: string
  title: string
  description: string
  link: string
  badge: string
  display: boolean
}

export const MY_PROJECT_LINKS: Array<ProjectType> = [
  {
    title: 'grit',
    name: '@arsams/grit',
    description:
      'An opinionated Git assistant: interactive TUI and scriptable CLI.',
    link: 'https://www.npmjs.com/package/@arsams/grit',
    badge: 'New',
    display: true,
  },
  {
    title: 'arsam cli',
    name: 'arsam',
    description: 'My portfolio as an interactive terminal app.',
    link: 'https://www.npmjs.com/package/arsam',
    badge: 'Updated',
    display: true,
  },
  {
    title: 'mockkit',
    name: '@arsams/mockkit',
    description: 'Framework-agnostic toolkit for MSW mocking.',
    link: 'https://www.npmjs.com/package/@arsams/mockkit',
    badge: 'New',
    display: true,
  },
  {
    title: 'mockkit-react',
    name: '@arsams/mockkit-react',
    description: 'React hooks and a control panel for @arsams/mockkit.',
    link: 'https://www.npmjs.com/package/@arsams/mockkit-react',
    badge: 'New',
    display: true,
  },
  {
    title: 'fallguys-names',
    name: 'fallguys-names',
    description:
      'Fully customizable what-three-words generator with a default set of fallguys names.',
    link: 'https://www.npmjs.com/package/fallguys-names',
    badge: 'Updated',
    display: false,
  },
  {
    title: 'awesome-mui-ripple',
    name: 'awesome-mui-ripple',
    description: 'Add MUI ripple effect to your React components',
    link: 'https://www.npmjs.com/package/awesome-mui-ripple',
    badge: 'Stale',
    display: false,
  },
  {
    title: 'konami-codes-react',
    name: '@arsams/konami-codes-react',
    description: 'A React hook that provides Konami codes functionality.',
    link: 'https://www.npmjs.com/package/@arsams/konami-codes-react',
    badge: 'Updated',
    display: true,
  },
  {
    title: 'readable-http-codes',
    name: 'readable-http-codes',
    description:
      '0 dependancy, readable HTTP code enums, cleaning up your codebase!',
    link: 'https://www.npmjs.com/package/readable-http-codes',
    badge: 'Updated',
    display: true,
  },
  {
    title: 'gh-calendar-scraper',
    name: 'gh-calendar-scraper',
    description: 'Scrapes a users GitHub contributions calendar',
    link: 'https://www.npmjs.com/package/gh-calendar-scraper',
    badge: 'Outdated',
    display: false,
  },
  {
    title: 'color-shades',
    name: '@arsams/color-shades',
    description: 'Color shades generator',
    link: 'https://www.npmjs.com/package/@arsams/color-shades',
    badge: 'WIP',
    display: true,
  },
  {
    title: 'konami-codes',
    name: '@arsams/konami-codes',
    description: 'A typescript class that provides Konami codes functionality.',
    link: 'https://www.npmjs.com/package/@arsams/konami-codes',
    badge: 'Updated',
    display: false,
  },
]

export type AppType = {
  title: string
  description: string
  link: string
  language: string
  screenshot: { light: string; dark: string }
}

export const MY_APPS: Array<AppType> = [
  {
    title: 'Homa',
    description:
      'Self-hostable calendar with two-way CalDAV, Google and Microsoft sync, ICS subscriptions, and the Jalali calendar in English and Farsi.',
    link: 'https://homa.day',
    language: 'TypeScript',
    screenshot: {
      light: '/images/apps/homa-light.webp',
      dark: '/images/apps/homa-dark.webp',
    },
  },
  {
    title: 'Linkdean',
    description:
      'Self-hostable bookmarks with folders, tags, full-text search and encrypted vaults for private links.',
    link: 'https://linkdean.app',
    language: 'Rust',
    screenshot: {
      light: '/images/apps/linkdean-light.webp',
      dark: '/images/apps/linkdean-dark.webp',
    },
  },
]
