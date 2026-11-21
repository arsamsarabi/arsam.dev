import { FooterAction, HomeSection, SectionHeader } from '#/components/home'
import { MY_APPS } from '#/constants/projects'
import { MY_SOCIAL_LINKS } from '#/constants/socials'
import { ProjectsList } from '../projects/ProjectsList'

export const AppsSection = () => {
  return (
    <HomeSection
      bgColour="bg-brand-primary-dark"
      Header={<SectionHeader icon="laptop" text="Apps" variant="light" />}
      Body={<ProjectsList projects={MY_APPS} />}
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
