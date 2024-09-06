import { MiniProfile } from '#/components/blog/MiniProfile'
import { UnderConstruction } from '#/components/blog/UnderConstruction'
import { Sidebar } from '../Sidebar'

export const PostsPagesSidebar = () => {
  return (
    <Sidebar>
      <UnderConstruction />
      <MiniProfile />
    </Sidebar>
  )
}
