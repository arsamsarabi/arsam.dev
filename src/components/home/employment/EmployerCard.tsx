import { WorkExperience } from '#/constants/employment'
import { DisplayCardDescription } from '../DisplayCard/DisplayCardDescription'
import { EmploymentCardLink } from './EmploymentCardLink'

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
      <div className="flex h-[160px] w-full flex-col items-start justify-start space-y-1 rounded-bl-lg rounded-br-lg bg-brand-primary-dark p-4 3xl:h-[180px]">
        <EmploymentCardLink title={title} link={link} icon={icon} />
        <DisplayCardDescription className="sm:text-sm">
          {role}
        </DisplayCardDescription>
        <DisplayCardDescription className="!mt-auto sm:text-sm">
          {duration}
        </DisplayCardDescription>
      </div>
    </div>
  )
}
