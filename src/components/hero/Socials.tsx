import { Icon } from '#/components/Icon'
import { MY_SOCIAL_LINKS, Socials as SocialSites } from '#/constants/socials'

export const Socials = () => {
  return (
    <div className="ml-auto flex items-center justify-center gap-8 pb-4 md:gap-4 md:pb-0">
      {(Object.keys(MY_SOCIAL_LINKS) as Array<SocialSites>).map((key) => {
        return (
          <a
            key={key}
            href={MY_SOCIAL_LINKS[key]}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name={key} size={22} className="text-brand-primary-dark" />
          </a>
        )
      })}
    </div>
  )
}
