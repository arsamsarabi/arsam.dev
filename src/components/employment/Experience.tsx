import { FooterAction, HomeSection, SectionHeader } from '#/components/home'
import { MY_SOCIAL_LINKS } from '#/constants/socials'
import { WorkExperienceCarousel } from './WorkExperienceCarousel'

export const Experience = () => {
  return (
    <HomeSection
      Header={
        <SectionHeader
          icon="briefcase"
          text="Recent employments"
          variant="dark"
        />
      }
      Body={<WorkExperienceCarousel />}
      Footer={
        <div className="ml-auto">
          <FooterAction
            icon="linkedin"
            text="Learn more"
            link={MY_SOCIAL_LINKS.linkedin}
            variant="dark"
            external
          />
        </div>
      }
    />
  )
}
