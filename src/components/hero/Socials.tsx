import { Icon } from '#/components/Icon'
import { MY_SOCIAL_LINKS } from '#/constants/socials'

export const Socials = () => {
  return (
    <div className="ml-auto flex items-center justify-center gap-4">
      {MY_SOCIAL_LINKS.map(({ link, name }) => {
        return (
          <a key={name} href={link} target="_blank" rel="noreferrer">
            <Icon name={name} size={22} className="text-brand-primary-dark" />
          </a>
        )
      })}
    </div>
  )
}
