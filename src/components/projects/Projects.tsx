import { FooterAction, HomeSection, SectionHeader } from '#/components/home'
import { MY_SOCIAL_LINKS } from '#/constants/socials'
import { MyProjects } from './MyProjects'

export const Projects = () => {
  return (
    <HomeSection
      Header={<SectionHeader icon="code" text="Projects" variant="dark" />}
      Body={<MyProjects />}
      Footer={
        <div className="ml-auto">
          <FooterAction
            icon="github"
            text="See more"
            link={MY_SOCIAL_LINKS.github}
            variant="dark"
            external
          />
        </div>
      }
    />
  )
}
