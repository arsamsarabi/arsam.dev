import { MY_RECENT_EMPLOYERS } from '#/constants/employment'
import { MY_SOCIAL_LINKS } from '#/constants/socials'

export const WorkLog = () => {
  return (
    <section className="flex flex-col rounded-2xl border border-site-border bg-site-card p-6 md:row-span-2">
      <h2 className="mb-3 font-code text-sm font-medium text-site-muted">
        git log --work --tail 3
      </h2>
      <ol>
        {MY_RECENT_EMPLOYERS.slice(0, 3).map(
          ({ title, role, duration, link }, index) => (
            <li key={title} className="flex gap-4 py-2.5">
              <span
                aria-hidden="true"
                className={`mt-1.5 size-2.5 shrink-0 rounded-full border-2 ${
                  index === 0 ? 'border-site-live' : 'border-site-accent'
                }`}
              />
              <div className="flex flex-col gap-0.5">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-site-strong hover:text-site-accent"
                  >
                    {title}
                  </a>
                ) : (
                  <span className="font-semibold text-site-strong">
                    {title}
                  </span>
                )}
                <span className="text-sm">{role}</span>
                <span className="font-code text-xs text-site-muted">
                  {duration}
                </span>
              </div>
            </li>
          )
        )}
      </ol>
      <a
        href={MY_SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex min-h-11 items-center pt-4 font-code text-sm text-site-accent hover:text-site-strong"
      >
        more on LinkedIn ↗
      </a>
    </section>
  )
}
