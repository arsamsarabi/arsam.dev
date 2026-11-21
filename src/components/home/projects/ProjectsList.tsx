import type { ProjectType } from '#/constants/projects'
import { ProjectCard } from './ProjectCard'

export const ProjectsList = ({
  projects,
}: {
  projects: Array<ProjectType>
}) => {
  return (
    <ul className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
      {projects.map(({ name, ...rest }) => {
        return <ProjectCard key={name} name={name} {...rest} />
      })}
    </ul>
  )
}
