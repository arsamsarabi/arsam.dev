import { MY_PROJECT_LINKS } from '#/constants/projects'
import { ProjectCard } from './ProjectCard'

export const ProjectsList = () => {
  return (
    <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
      {MY_PROJECT_LINKS.map(({ name, ...rest }) => {
        return <ProjectCard key={name} name={name} {...rest} />
      })}
    </ul>
  )
}
