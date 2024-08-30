import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from '@icons-pack/react-simple-icons'
import { type LucideProps } from 'lucide-react'
import { ReactNode } from 'react'
import { BriefcaseIcon } from './custom/BriefcaseIcon'
import { ForwardIcon } from './custom/ForwardIcon'
import { NotebookIcon } from './custom/NotebookIcon'
import { PlayIcon } from './custom/PlayIcon'
import { IconNamesType } from './types'

export const ICONS: Record<IconNamesType, (props: LucideProps) => ReactNode> = {
  instagram: SiInstagram,
  linkedin: SiLinkedin,
  github: SiGithub,
  youtube: SiYoutube,
  play: PlayIcon,
  blog: NotebookIcon,
  forward: ForwardIcon,
  briefcase: BriefcaseIcon,
}
