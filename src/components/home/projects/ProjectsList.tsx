import { MY_PROJECT_LINKS } from '#/constants/projects'
import { ProjectCard } from './ProjectCard'

export const ProjectsList = () => {
  return (
    <ul className="flex w-full flex-1 flex-col content-center items-center gap-8 lg:flex-row lg:flex-wrap lg:gap-4">
      {MY_PROJECT_LINKS.map(({ name, ...rest }) => {
        return <ProjectCard key={name} name={name} {...rest} />
      })}
    </ul>
  )
}
