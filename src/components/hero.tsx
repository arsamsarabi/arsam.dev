import Image from 'next/image'
import { Icon } from './Icon'

export const Hero = () => {
  return (
    <section className="center-child h-full flex-col">
      <div className="fixed left-6 top-4">
        <h1 className="text-2xl text-brand-primary-dark">
          arsam<span className="text-text text-[14px] opacity-65">.dev</span>
        </h1>
      </div>

      <div className="center-child w-full flex-1 flex-col">
        <div className="flex w-5/6 items-center justify-around gap-4">
          <Image
            className="rounded-xl mix-blend-luminosity"
            src="/images/arsam.JPG"
            width={180}
            height={180}
            alt="Arsam"
          />
          <div>
            <p className="text-center font-heading text-5xl font-bold text-brand-primary-dark">
              Software Engineer
            </p>
            <p className="text-center font-heading text-5xl font-bold text-brand-primary-dark">
              Content Creator
            </p>
            <p className="text-md mt-4 text-justify leading-normal text-gray-600">
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
        <div className="ml-auto flex items-center justify-center gap-4">
          <Icon name="github" size={22} className="text-brand-primary-dark" />
          <Icon name="linkedin" size={22} className="text-brand-primary-dark" />
          <Icon name="youtube" size={22} className="text-brand-primary-dark" />
          <Icon
            name="instagram"
            size={22}
            className="text-brand-primary-dark"
          />
        </div>
      </div>
    </section>
  )
}
