import { Icon } from '#/components/Icon'
import { LandingSection } from '#/components/LandingSection'
import { Button } from '#/components/ui/button'
import { MyProjects } from './MyProjects'

export const Projects = () => {
  return (
    <LandingSection
      Header={
        <>
          <Icon name="code" className="text-brand-secondary-dark" />
          <h2 className="text-lg text-brand-secondary-dark">Projects</h2>
        </>
      }
      Body={
        <div className="py-8">
          <MyProjects />
        </div>
      }
      Footer={
        <Button
          variant="outline"
          size="xs"
          colour="dark"
          RightIcon={
            <Icon name="github" size={18} className="text-brand-primary-dark" />
          }
          className="ml-auto"
        >
          <a
            href="https://gitgub.com/arsamsarabi"
            className="text-xs text-brand-primary-dark"
          >
            See more
          </a>
        </Button>
      }
    />
  )
}
