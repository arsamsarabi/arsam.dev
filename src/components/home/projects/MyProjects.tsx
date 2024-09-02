import Image from 'next/image'
import { AnimateInView } from '#/components/animated'
import { MY_PROJECT_LINKS } from '#/constants/projects'

export const MyProjects = () => {
  return (
    <ul className="flex w-full flex-1 flex-col content-center items-center gap-8 lg:flex-row lg:flex-wrap lg:gap-4">
      {MY_PROJECT_LINKS.map(
        ({ display, description, link, name, title, color, badge }) => {
          if (!display) return null
          return (
            <li
              key={name}
              className="flex h-[300px] w-full md:h-[280px] md:w-[85%] lg:h-[220px] lg:w-[48%]"
            >
              <a
                className="h-full w-full"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <AnimateInView
                  from="bottom"
                  className="flex h-full w-full flex-col overflow-hidden rounded-md bg-brand-primary-lightest"
                >
                  <div className="flex h-[50%] flex-col justify-around bg-brand-primary-dark p-4 lg:space-y-1">
                    <p className="font-heading text-3xl text-brand-accent-lightest md:text-2xl lg:text-xl">
                      {title}
                    </p>
                    <p className="text-sm text-brand-primary-lightest lg:text-xs">
                      {description}
                    </p>
                  </div>
                  <div className="flex h-[50%] flex-col items-start justify-around p-4 md:gap-2">
                    <p
                      className="inline-flex items-center rounded-md px-4 py-1 text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 lg:px-1.5 lg:text-sm xl:px-2.5 xl:py-0.5 xl:text-xs"
                      style={{
                        backgroundColor: color,
                      }}
                    >
                      {badge}
                    </p>
                    <div className="relative h-[32px] w-[200px] lg:h-[24px] lg:w-[160px]">
                      <Image
                        src={`https://img.shields.io/npm/dm/${name}`}
                        alt={name}
                        fill
                        priority
                      />
                    </div>
                  </div>
                </AnimateInView>
              </a>
            </li>
          )
        }
      )}
    </ul>
  )
}
