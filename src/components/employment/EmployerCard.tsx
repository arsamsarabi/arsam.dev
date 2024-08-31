import { Icon } from '#/components/Icon'
import { WorkExperience } from '#/constants/work'

export type EmployerCardProps = WorkExperience

export const EmployerCard = ({
  logo: { Comp, h = 'auto', w = '150px' },
  title,
  role,
  duration,
  icon,
  link,
}: EmployerCardProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="center-child flex-1">
        <div
          className="relative"
          style={{
            height: h,
            width: w,
          }}
        >
          {Comp}
        </div>
      </div>
      <div className="flex h-[120px] w-full flex-col items-start justify-around space-y-1 rounded-bl-lg rounded-br-lg bg-brand-primary-dark p-4">
        <a href={link} target="_blank" rel="noreferrer" className="w-full">
          <div className="flex w-full items-center justify-between gap-2">
            <p className="font-heading text-2xl text-brand-accent-lightest md:text-xl">
              {title}
            </p>
            <Icon name={icon} size={20} color="var(--brand-accent-lightest)" />
          </div>
        </a>
        <p className="text-sm text-brand-primary-lightest">{role}</p>
        <p className="text-sm text-brand-primary-lightest">{duration}</p>
      </div>
    </div>
  )
}
