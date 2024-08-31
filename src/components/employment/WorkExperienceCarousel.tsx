import { Card, CardContent } from '#/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '#/components/ui/carousel'
import { MY_RECENT_EMPLOYERS } from '#/constants/work'
import { EmployerCard } from './EmployerCard'

export const WorkExperienceCarousel = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: 'start',
        loop: false,
      }}
    >
      <CarouselContent className="-ml-1">
        {MY_RECENT_EMPLOYERS.map((work) => (
          <CarouselItem
            key={work.title}
            className="pl-1 md:basis-1/2 2xl:basis-1/3"
          >
            <div className="p-1">
              <Card className="h-[300px] shadow-md shadow-brand-primary-light">
                <CardContent className="h-full p-0">
                  <EmployerCard {...work} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
