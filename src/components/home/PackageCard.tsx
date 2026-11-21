import { sendGAEvent } from '@next/third-parties/google'
import type { ProjectType } from '#/constants/projects'

export const PackageCard = ({
  name,
  title,
  description,
  link,
  badge,
  featured = false,
}: ProjectType & { featured?: boolean }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      onClick={() =>
        sendGAEvent('event', 'Project link click', { value: { title } })
      }
      className={`flex flex-col gap-2 rounded-2xl border border-site-border bg-site-card px-6 py-5 transition-colors hover:border-site-accent ${featured ? 'lg:col-span-2' : ''}`}
    >
      <span
        className={`font-code font-medium text-site-strong ${featured ? 'text-lg' : ''}`}
      >
        {name}
      </span>
      <span className={`leading-relaxed ${featured ? 'text-base' : 'text-sm'}`}>
        {description}
      </span>
      <span className="mt-auto pt-1 font-code text-xs text-site-muted">
        npm · {badge.toLowerCase()}
      </span>
    </a>
  )
}
