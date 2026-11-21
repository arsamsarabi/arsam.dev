const dots = ['bg-brand-danger', 'bg-brand-warning', 'bg-brand-success']

export const TerminalHero = () => {
  return (
    <section className="col-span-full overflow-hidden rounded-2xl border border-site-border bg-site-card lg:col-span-3">
      <div className="flex items-center gap-2 border-b border-site-border px-4 py-3">
        {dots.map((colour) => (
          <span
            key={colour}
            aria-hidden="true"
            className={`size-3 rounded-full ${colour}`}
          />
        ))}
        <span className="ml-3 font-code text-xs text-site-muted">zsh</span>
      </div>
      <div className="flex flex-col gap-4 px-6 pb-10 pt-8 font-code sm:px-9">
        <p className="text-site-muted">
          <span className="text-site-live">$</span> npx arsam
        </p>
        <h1 className="font-heading text-5xl font-bold leading-none text-site-strong sm:text-7xl">
          Arsam Sarabi
        </h1>
        <p className="text-lg text-site-accent sm:text-xl">
          Staff Software Engineer @ ONI
        </p>
        <p className="max-w-xl font-body text-base leading-relaxed sm:text-lg">
          I make products from scratch: self-hostable apps, Git tooling and
          small npm packages.
        </p>
        <p className="text-site-muted" aria-hidden="true">
          <span className="text-site-live">$</span>{' '}
          <span className="inline-block h-[18px] w-2.5 translate-y-[3px] bg-site-strong motion-safe:animate-pulse" />
        </p>
      </div>
    </section>
  )
}
