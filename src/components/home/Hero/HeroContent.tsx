import Image from 'next/image'
import type { ReactNode } from 'react'
import { AnimateInView } from '#/components/animated'

export const HeroContent = () => {
  return (
    <AnimateInView from="top" className="center-child w-full flex-1">
      <div className="flex w-full flex-col items-center justify-around gap-4 xl:flex-row xl:gap-8">
        <div className="relative h-56 w-44 xl:w-[175px] 3xl:h-[320px] 3xl:w-[250px]">
          <Image
            src="/images/arsam.png"
            alt="Arsam"
            fill
            className="aspect-auto rounded-lg"
            priority
          />
        </div>
        <div className="flex flex-1 flex-col lg:gap-2">
          <LargeText>Software Engineer</LargeText>
          <LargeText>Content Creator</LargeText>
          <p className="mt-4 text-justify text-xl leading-normal text-gray-600 md:text-base 2xl:text-lg 3xl:text-2xl">
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

function LargeText({ children }: { children: ReactNode }) {
  return (
    <p className="text-center font-heading text-4xl font-bold text-brand-primary-dark sm:text-4xl xl:text-[2.5rem] 2xl:text-5xl 3xl:text-6xl">
      {children}
    </p>
  )
}
