import Image from 'next/image'
import { AnimateInView } from '#/components/animated'

export const HeroContent = () => {
  return (
    <AnimateInView from="top" className="center-child w-full flex-1">
      <div className="flex w-full flex-col items-center justify-around gap-4 px-8 md:w-5/6 md:px-0 xl:flex-row xl:gap-8">
        <div className="relative h-56 w-44 xl:w-[175px]">
          <Image
            src="/images/arsam.png"
            alt="Arsam"
            fill
            className="aspect-auto rounded-lg"
            priority
          />
        </div>
        <div className="flex flex-1 flex-col lg:gap-2">
          <p className="text-center font-heading text-4xl font-bold text-brand-primary-dark lg:text-5xl xl:text-4xl 2xl:text-5xl">
            Software Engineer
          </p>
          <p className="text-center font-heading text-4xl font-bold text-brand-primary-dark lg:text-5xl xl:text-4xl 2xl:text-5xl">
            Content Creator
          </p>
          <p className="mt-4 text-justify text-xl leading-normal text-gray-600 md:text-base 2xl:text-lg">
            Hi, I&apos;m{' '}
            <span className="font-heading text-2xl font-bold text-brand-primary 2xl:text-3xl">
              Arsam
            </span>{' '}
            👋🏼 I&apos;m a software engineer, content creator, product maker, and
            a life-long learner. I make products from scratch, and bring ideas
            to life!
          </p>
        </div>
      </div>
    </AnimateInView>
  )
}
