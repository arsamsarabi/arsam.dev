import { Icon } from '#/components/Icon'
import { MY_SOCIAL_MEDIA } from '#/constants/socials'

const EMAIL = 'me@arsam.dev'

export const ContactCard = () => {
  return (
    <section
      aria-labelledby="contact-title"
      className="col-span-full flex flex-col gap-6 rounded-2xl border border-site-border bg-site-card px-6 py-8 sm:px-9 md:flex-row md:items-end md:justify-between"
    >
      <div className="flex flex-col gap-3">
        <p className="font-code text-sm text-site-muted">
          <span className="text-site-live">$</span> contact --say-hello
        </p>
        <h2
          id="contact-title"
          className="font-heading text-3xl font-bold text-site-strong"
        >
          Let&apos;s talk
        </h2>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex min-h-11 w-fit items-center gap-2 font-code text-lg text-site-accent underline-offset-4 hover:underline"
        >
          <Icon name="email" className="size-5" />
          {EMAIL}
        </a>
      </div>
      <ul className="flex flex-wrap gap-x-6 gap-y-2 font-code text-sm">
        {MY_SOCIAL_MEDIA.map(({ icon, link, text }) => (
          <li key={link}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${icon} (${text})`}
              className="inline-flex min-h-11 items-center gap-2 text-site-muted transition-colors hover:text-site-strong"
            >
              <Icon name={icon} className="size-5" />
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
