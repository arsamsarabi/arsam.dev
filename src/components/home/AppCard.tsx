import { sendGAEvent } from '@next/third-parties/google'
import type { AppType } from '#/constants/projects'

export const AppCard = ({
  title,
  description,
  link,
  language,
  screenshot,
}: AppType) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      onClick={() =>
        sendGAEvent('event', 'Project link click', { value: { title } })
      }
      className="flex flex-col gap-4 rounded-2xl border border-site-border bg-site-card p-6 transition-colors hover:border-site-accent"
    >
      {/* Plain <picture> so the browser loads only the screenshot matching the OS theme */}
      <picture className="block aspect-[16/10] overflow-hidden rounded-xl border border-site-border bg-site-raised">
        <source srcSet={screenshot.dark} media="(prefers-color-scheme: dark)" />
        <img
          src={screenshot.light}
          alt={`${title} screenshot`}
          loading="lazy"
          className="size-full object-cover object-left-top"
        />
      </picture>
      <div className="flex items-baseline gap-3">
        <h2 className="font-body text-2xl font-semibold text-site-strong">
          {title}
        </h2>
        <span className="ml-auto font-code text-xs text-site-live">● live</span>
      </div>
      <p className="leading-relaxed">{description}</p>
      <span className="mt-auto font-code text-sm text-site-accent">
        {new URL(link).host} ↗ · {language}
      </span>
    </a>
  )
}
