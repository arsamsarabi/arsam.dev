import { Icon } from './Icon'
import { Button } from './ui/button'

export const Experience = () => {
  return (
    <section className="center-child h-full flex-col">
      <div className="height-[40px] flex w-5/6 items-center justify-start gap-2 pt-4 text-brand-primary-lightest">
        <Icon name="briefcase" className="text-brand-primary-dark" />
        <h2 className="text-lg text-brand-primary-dark">Experience</h2>
      </div>
      <div className="center-child w-5/6 flex-1 flex-col"></div>

      <div className="height-[40px] flex w-5/6 flex-row items-center justify-end pb-4 text-brand-primary-lightest">
        <Button
          variant="outline"
          RightIcon={
            <Icon
              name="linkedin"
              size={22}
              className="text-brand-primary-dark"
            />
          }
          size="sm"
        >
          <a
            href="https://linkedin.com/in/arsam"
            className="text-xs uppercase text-brand-primary-dark"
          >
            Learn more
          </a>
        </Button>
      </div>
    </section>
  )
}
