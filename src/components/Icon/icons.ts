import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from '@icons-pack/react-simple-icons'
import { type LucideProps } from 'lucide-react'
import { ReactNode } from 'react'
import {
  BriefcaseIcon,
  BrokenLinkIcon,
  CodeIcon,
  ForwardIcon,
  LinkIcon,
  NotebookIcon,
  PlayIcon,
} from './custom'
import { IconNamesType } from './types'

export const ICONS: Record<IconNamesType, (props: LucideProps) => ReactNode> = {
  'broken-link': BrokenLinkIcon,
  blog: NotebookIcon,
  briefcase: BriefcaseIcon,
  code: CodeIcon,
  forward: ForwardIcon,
  github: SiGithub,
  instagram: SiInstagram,
  link: LinkIcon,
  linkedin: SiLinkedin,
  play: PlayIcon,
  youtube: SiYoutube,
}
