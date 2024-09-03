import type { LucideProps } from 'lucide-react'

export type IconProps = LucideProps & {
  name: IconNamesType
  className?: string
}

export const IconNames = [
  'blog-post',
  'blog',
  'book',
  'briefcase',
  'broken-link',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'clapper-board',
  'code',
  'copy',
  'double-check',
  'email',
  'flag-iran',
  'flag-spain',
  'flag-uk',
  'flame',
  'forward',
  'gamepad',
  'github',
  'hammer',
  'headphones',
  'hiking',
  'home',
  'instagram',
  'laptop',
  'lightbulb',
  'link',
  'linkedin',
  'location',
  'menu-dots',
  'play',
  'sad',
  'share',
  'star-shine',
  'suitcase',
  'telescope',
  'video-frame-cut',
  'youtube',
] as const

export type IconNamesType = (typeof IconNames)[number]
