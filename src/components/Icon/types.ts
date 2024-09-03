import type { LucideProps } from 'lucide-react'

export type IconProps = LucideProps & {
  name: IconNamesType
  className?: string
}

export const IconNames = [
  'blog',
  'blog-post',
  'book',
  'briefcase',
  'broken-link',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'clapper-board',
  'code',
  'email',
  'flag-iran',
  'flag-spain',
  'flag-uk',
  'forward',
  'gamepad',
  'github',
  'hammer',
  'headphones',
  'hiking',
  'home',
  'instagram',
  'laptop',
  'link',
  'linkedin',
  'location',
  'menu-dots',
  'play',
  'share',
  'star-shine',
  'suitcase',
  'telescope',
  'youtube',
  'video-frame-cut',
] as const

export type IconNamesType = (typeof IconNames)[number]
