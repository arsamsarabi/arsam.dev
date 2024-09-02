import Color from 'color'
import { AnimateInView } from '#/components/animated'
import { Skeleton } from '#/components/ui/skeleton'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'

export const PostPreviewSkeleton = () => {
  return (
    <AnimateInView
      from="bottom"
      className="flex h-[400px] w-full items-end overflow-hidden rounded-lg bg-contain bg-no-repeat shadow-md shadow-brand-primary-darkest sm:h-[300px] lg:bg-cover"
      style={{
        backgroundImage: 'url(/blog/placeholder.jpg)',
      }}
    >
      <div
        className="w-full space-y-4 p-4 md:space-y-2"
        style={{
          backgroundColor: Color(BRAND_PRIMARY_DARKEST).alpha(0.85).string(),
        }}
      >
        <div className="space-y-2">
          <p className="font-heading text-3xl text-brand-primary-lightest md:text-2xl lg:text-xl xl:text-2xl">
            Working on it!
          </p>
          <Skeleton className="h-6 w-3/12 bg-brand-primary-lightest lg:h-4" />
          <Skeleton className="h-6 w-11/12 bg-brand-primary-lightest lg:h-4" />
          <Skeleton className="h-6 w-10/12 bg-brand-primary-lightest lg:h-4" />
        </div>

        <div className="flex w-full items-center justify-between border-t border-brand-primary-light pt-2">
          <Skeleton className="h-6 w-24 bg-brand-primary-lightest lg:h-4" />
          <Skeleton className="h-6 w-24 bg-brand-primary-lightest lg:h-4" />
        </div>
      </div>
    </AnimateInView>
  )
}
