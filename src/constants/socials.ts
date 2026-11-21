import { IconNamesType } from '#/components/Icon'

export type Socials = 'github' | 'linkedin' | 'instagram'

export const MY_SOCIAL_LINKS: Record<Socials, string> = {
  github: 'https://github.com/arsamsarabi',
  linkedin: 'https://linkedin.com/in/arsam',
  instagram: 'https://instagram.com/arsamsarabi',
}

export type SocialMedia = {
  icon: IconNamesType
  text: string
  link: string
}

export const MY_SOCIAL_MEDIA: Array<SocialMedia> = [
  {
    icon: 'github',
    text: 'arsamsarabi',
    link: MY_SOCIAL_LINKS.github,
  },
  {
    icon: 'instagram',
    text: 'arsamsarabi',
    link: MY_SOCIAL_LINKS.instagram,
  },
  {
    icon: 'linkedin',
    text: 'arsam',
    link: MY_SOCIAL_LINKS.linkedin,
  },
]
