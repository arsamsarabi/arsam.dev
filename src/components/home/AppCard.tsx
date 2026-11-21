import { sendGAEvent } from '@next/third-parties/google'
import { Icon, type IconNamesType } from '#/components/Icon'
import type { AppType } from '#/constants/projects'

const STATUS_STYLES: Record<
  AppType['status'],
  { icon: IconNamesType; className: string }
> = {
  development: { icon: 'hammer', className: 'text-site-warn' },
  beta: { icon: 'flask-conical', className: 'text-site-info' },
  production: { icon: 'circle-check', className: 'text-site-live' },
  maintenance: { icon: 'wrench', className: 'text-site-muted' },
}

const StatusLabel = ({ status }: { status: AppType['status'] }) => {
  const { icon, className } = STATUS_STYLES[status]
  return (
    <span
      className={`ml-auto inline-flex items-center gap-1.5 self-center font-code text-sm ${className}`}
    >
      <Icon name={icon} className="size-5" />
      {status}
    </span>
  )
}

export const AppCard = ({
  title,
  description,
  link,
  screenshot,
  status,
}: AppType) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      onClick={() =>
        sendGAEvent('event', 'Project link click', { value: { title } })
      }
      className="flex flex-col gap-5 rounded-2xl border border-site-border bg-site-card p-6 transition-colors hover:border-site-accent md:col-span-2 md:flex-row lg:col-span-3"
    >
      {/* Lazy images skip loading while display:none, so only the visible theme's screenshot downloads */}
      <div className="aspect-[16/10] shrink-0 overflow-hidden rounded-xl border border-site-border bg-site-raised md:w-1/2 lg:w-3/5">
        <img
          src={screenshot.light}
          alt={`${title} screenshot`}
          loading="lazy"
          className="size-full object-cover object-left-top dark:hidden"
        />
        <img
          src={screenshot.dark}
          alt={`${title} screenshot`}
          loading="lazy"
          className="hidden size-full object-cover object-left-top dark:block"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-baseline gap-3">
          <h2 className="font-body text-2xl font-semibold text-site-strong">
            {title}
          </h2>
          <StatusLabel status={status} />
        </div>
        <p className="leading-relaxed">{description}</p>
      </div>
    </a>
  )
}
