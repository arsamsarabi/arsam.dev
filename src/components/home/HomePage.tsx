'use client'

import { MY_APPS, MY_PROJECT_LINKS } from '#/constants/projects'
import { MY_SOCIAL_LINKS, MY_SOCIAL_MEDIA } from '#/constants/socials'
import { useSendPageLoadedEvent } from '#/hooks/useSendPageLoadedEvent'
import { AppCard } from './AppCard'
import { PackageCard } from './PackageCard'
import { SeeMoreCard } from './SeeMoreCard'
import { TerminalHero } from './TerminalHero'
import { WorkLog } from './WorkLog'

const packages = MY_PROJECT_LINKS.filter(({ display }) => display)

export const HomePage = () => {
  useSendPageLoadedEvent({ page: 'Home page' })

  return (
    <div className="h-svh w-svw overflow-y-auto bg-site-bg bg-[image:linear-gradient(var(--site-overlay),var(--site-overlay)),var(--site-pattern)] font-body text-site-text">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 pb-16 pt-6 sm:px-6 sm:pt-10">
        <nav className="flex flex-wrap items-center gap-x-5 font-code text-sm">
          <span className="mr-auto text-site-accent">~/arsam.dev</span>
          {MY_SOCIAL_MEDIA.map(({ icon, link }) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center text-site-muted transition-colors hover:text-site-strong"
            >
              {icon}
            </a>
          ))}
        </nav>

        {/*
          Bento on lg (4 columns, dense flow). DOM order drives placement:
          | hero 3x1                | work 1x2 |
          | featured pkg 2x1 | pkg  |          |
          | app 2x1          | app 2x1         |
          | pkg | pkg | npm more | GitHub more |
        */}
        <main className="grid grid-flow-row-dense grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <TerminalHero />
          <WorkLog />
          {packages.slice(0, 2).map((pkg, index) => (
            <PackageCard key={pkg.name} featured={index === 0} {...pkg} />
          ))}
          {MY_APPS.map((app) => (
            <AppCard key={app.link} {...app} />
          ))}
          {packages.slice(2).map((pkg) => (
            <PackageCard key={pkg.name} {...pkg} />
          ))}
          <SeeMoreCard
            title="More packages on npm"
            link="https://www.npmjs.com/~arsamsarabi"
          />
          <SeeMoreCard
            title="More projects on GitHub"
            link={MY_SOCIAL_LINKS.github}
          />
        </main>
      </div>
    </div>
  )
}
