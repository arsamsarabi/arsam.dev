import { FadeInView } from '#/components/animated'
import { Card, CardContent } from '#/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselDotButton,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '#/components/ui/carousel'
import { MY_RECENT_EMPLOYERS } from '#/constants/employment'
import { EmployerCard } from './EmployerCard'

export const EmploymentCarousel = () => {
  return (
    <Carousel
      className="mx-4 w-full"
      opts={{
        loop: false,
      }}
    >
      <CarouselContent className="-ml-1">
        {MY_RECENT_EMPLOYERS.map((work) => (
          <CarouselItem
            key={work.title}
            className="gap-4 sm:basis-1/2 md:basis-full xl:basis-1/2"
          >
            <FadeInView className="-1">
              <Card className="h-[300px] shadow-md shadow-brand-primary-darkest 3xl:h-[420px]">
                <CardContent className="h-full p-0">
                  <EmployerCard {...work} />
                </CardContent>
              </Card>
            </FadeInView>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <CarouselPrevious color="var(--brand-primary-lightest)" />
          <CarouselNext color="var(--brand-primary-lightest)" />
        </div>
        <div className="flex items-center gap-2">
          {MY_RECENT_EMPLOYERS.map((employment, index) => {
            return <CarouselDotButton key={employment.title} index={index} />
          })}
        </div>
      </div>
    </Carousel>
  )
}
