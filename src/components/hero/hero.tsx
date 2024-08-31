import Image from 'next/image'
import { Socials } from './Socials'

export const Hero = () => {
  return (
    <section className="center-child h-full flex-col">
      <div className="fixed left-0 right-0 top-0 z-50 flex h-12 items-center bg-brand-light px-8 md:bg-transparent">
        <h1 className="text-2xl text-brand-primary-dark">
          arsam<span className="text-text text-[14px] opacity-65">.dev</span>
        </h1>
      </div>

      <div className="center-child w-full flex-1">
        <div className="flex w-full flex-col items-center justify-around gap-4 px-8 md:w-5/6 md:px-0 xl:flex-row">
          <div className="relative h-56 w-44 xl:w-[175px]">
            <Image
              src="/images/arsam.JPG"
              alt="Arsam"
              fill
              className="aspect-auto rounded-lg mix-blend-luminosity"
              priority
            />
          </div>
          <div className="flex-1">
            <p className="text-center font-heading text-4xl font-bold text-brand-primary-dark lg:text-5xl xl:text-4xl 2xl:text-5xl">
              Software Engineer
            </p>
            <p className="text-center font-heading text-4xl font-bold text-brand-primary-dark lg:text-5xl xl:text-4xl 2xl:text-5xl">
              Content Creator
            </p>
            <p className="mt-4 text-justify text-xl leading-normal text-gray-600 md:text-base 2xl:text-lg">
              Hi, I&apos;m{' '}
              <span className="font-heading font-bold text-brand-primary">
                Arsam
              </span>{' '}
              👋🏼 I&apos;m a software engineer, content creator, product maker,
              and a life-long learner. I make products from scratch, and bring
              ideas to life!
            </p>
          </div>
        </div>
      </div>

      <div className="flex h-[40px] w-5/6 flex-row items-center justify-start pb-4 text-brand-primary-lightest">
        <Socials />
      </div>
    </section>
  )
}
