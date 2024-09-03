import { FooterAction, HomeSection, SectionHeader } from '#/components/home'
import { MY_SOCIAL_LINKS } from '#/constants/socials'
import { EmploymentCarousel } from './EmploymentCarousel'

export const EmploymentSection = () => {
  return (
    <HomeSection
      bgColour="bg-brand-primary"
      Header={
        <SectionHeader
          icon="briefcase"
          text="Recent employments"
          variant="light"
        />
      }
      Body={<EmploymentCarousel />}
      Footer={
        <div className="ml-auto">
          <FooterAction
            icon="linkedin"
            text="Learn more"
            link={MY_SOCIAL_LINKS.linkedin}
            variant="light"
            external
          />
        </div>
      }
    />
  )
}
