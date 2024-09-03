import { MiniProfile } from '#/components/blog/MiniProfile'
import { UnderConstruction } from '#/components/blog/UnderConstruction'

export const AllPostsSidebar = () => {
  return (
    <aside className="flex w-full flex-col gap-4 lg:w-4/12">
      <UnderConstruction />
      <MiniProfile />
    </aside>
  )
}
