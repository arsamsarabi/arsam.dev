import { WorkExperience } from '#/constants/work'

export type EmployerCardProps = WorkExperience

export const EmployerCard = ({
  Logo,
  title,
  role,
  duration,
}: EmployerCardProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <div className="relative h-[200px] w-[200px]">{Logo}</div>
      <div>
        <p>{title}</p>
        <p>{role}</p>
        <p>{duration}</p>
      </div>
    </div>
  )
}
