import { Icon } from '#/components/Icon'
import { LandingSection } from '#/components/LandingSection'
import { Button } from '#/components/ui/button'
import { WorkExperienceCarousel } from './WorkExperienceCarousel'

export const Experience = () => {
  return (
    <LandingSection
      Header={
        <>
          <Icon name="briefcase" className="text-brand-primary-dark" />
          <h2 className="text-lg text-brand-primary-dark">
            Recent employments
          </h2>
        </>
      }
      Body={<WorkExperienceCarousel />}
      Footer={
        <Button
          variant="outline"
          size="xs"
          colour="dark"
          RightIcon={
            <Icon
              name="linkedin"
              size={18}
              className="text-brand-primary-dark"
            />
          }
          className="ml-auto"
        >
          <a
            href="https://linkedin.com/in/arsam"
            className="text-xs text-brand-primary-dark"
          >
            Learn more
          </a>
        </Button>
      }
    />
  )
}
