import { FooterAction, HomeSection, SectionHeader } from '#/components/home'
import { MY_SOCIAL_LINKS } from '#/constants/socials'
import { ProjectsList } from './ProjectsList'

export const ProjectsSection = () => {
  return (
    <HomeSection
      bgColour="bg-brand-primary-light"
      Header={<SectionHeader icon="code" text="Projects" variant="light" />}
      Body={<ProjectsList />}
      Footer={
        <div className="ml-auto">
          <FooterAction
            icon="github"
            text="See more"
            link={MY_SOCIAL_LINKS.github}
            variant="light"
            external
          />
        </div>
      }
    />
  )
}
