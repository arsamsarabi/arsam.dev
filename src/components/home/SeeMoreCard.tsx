export type SeeMoreCardProps = {
  title: string
  link: string
}

export const SeeMoreCard = ({ title, link }: SeeMoreCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col justify-center gap-2 rounded-2xl border border-dashed border-site-border bg-site-card px-6 py-5 transition-colors hover:border-site-accent"
    >
      <span className="font-medium text-site-strong">{title} ↗</span>
      <span className="font-code text-xs text-site-muted">
        {link.replace('https://', '').replace('www.', '')}
      </span>
    </a>
  )
}
