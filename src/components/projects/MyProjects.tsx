import Image from 'next/image'
import { MY_PROJECT_LINKS } from '#/constants/projects'

export const MyProjects = () => {
  return (
    <ul className="flex w-full flex-1 flex-row flex-wrap content-center items-center gap-4">
      {MY_PROJECT_LINKS.map(
        ({ display, description, link, name, title, color, badge }) => {
          if (!display) return null
          return (
            <li key={name} className="flex h-[180px] w-[48%]">
              <a
                className="h-full w-full"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-brand-primary-lightest">
                  <div className="flex h-[50%] flex-col gap-2 bg-brand-primary-dark p-4">
                    <p className="font-heading text-xl text-brand-accent-lightest">
                      {title}
                    </p>
                    <p className="text-xs text-brand-primary-lightest">
                      {description}
                    </p>
                  </div>
                  <div className="flex h-[50%] flex-col items-start gap-2 p-4">
                    <p
                      className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold text-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      style={{
                        backgroundColor: color,
                      }}
                    >
                      {badge}
                    </p>
                    <Image
                      src={`https://img.shields.io/npm/dm/${name}`}
                      width={160}
                      height={40}
                      alt={name}
                    />
                  </div>
                </div>
              </a>
            </li>
          )
        }
      )}
    </ul>
  )
}
