import { MiniProfile } from '#/components/blog/MiniProfile'
import { UnderConstruction } from '#/components/blog/UnderConstruction'

export const PostsPagesSidebar = () => {
  return (
    <aside className="flex w-full flex-col gap-4 md:gap-6 lg:w-4/12 2xl:gap-8">
      <UnderConstruction />
      <MiniProfile />
    </aside>
  )
}
