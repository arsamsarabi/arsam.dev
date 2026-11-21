'use client'

import { MY_APPS, MY_PROJECT_LINKS } from '#/constants/projects'
import { MY_SOCIAL_LINKS } from '#/constants/socials'
import { useSendPageLoadedEvent } from '#/hooks/useSendPageLoadedEvent'
import { AppRow } from './AppRow'
import { ContactCard } from './ContactCard'
import { PackageCard } from './PackageCard'
import { SeeMoreCard } from './SeeMoreCard'
import { TerminalHero } from './TerminalHero'
import { ThemeToggle } from './ThemeToggle'
import { WorkLog } from './WorkLog'

const packages = MY_PROJECT_LINKS.filter(({ display }) => display)

export const HomePage = () => {
  useSendPageLoadedEvent({ page: 'Home page' })

  return (
    <div className="h-svh w-svw overflow-y-auto bg-site-bg bg-[image:var(--site-glow),linear-gradient(var(--site-overlay),var(--site-overlay)),var(--site-pattern)] font-body text-site-text">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 pb-16 pt-6 sm:px-6 sm:pt-10">
        <nav className="flex flex-wrap items-center gap-x-5 font-code text-sm">
          <span className="mr-auto inline-flex min-h-11 items-center text-site-accent">
            ~/arsam.dev
          </span>
          <ThemeToggle />
        </nav>

        {/*
          Bento on lg (4 columns, dense flow). DOM order drives placement:
          | hero 3x1                | work 1x2 |
          | featured pkg 2x1 | pkg  |          |
          | first app 3x1            | pkg      |
          |                          | pkg      |
          | npm more | second app 3x1           |
          | GH more  |                          |
          Each app row is its own nested grid (AppRow).
        */}
        <main className="grid grid-flow-row-dense grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <TerminalHero />
          <WorkLog />
          {packages.slice(0, 2).map((pkg, index) => (
            <PackageCard key={pkg.name} featured={index === 0} {...pkg} />
          ))}
          <AppRow
            app={MY_APPS[0]}
            reverse
            side={packages.slice(2, 4).map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          />
          <AppRow
            app={MY_APPS[1]}
            side={
              <>
                <SeeMoreCard
                  title="More packages on npm"
                  link="https://www.npmjs.com/~arsamsarabi"
                />
                <SeeMoreCard
                  title="More projects on GitHub"
                  link={MY_SOCIAL_LINKS.github}
                />
              </>
            }
          />
          <ContactCard />
        </main>
      </div>
    </div>
  )
}
