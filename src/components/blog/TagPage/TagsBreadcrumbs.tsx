import { Icon } from '#/components/Icon'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '#/components/ui/breadcrumb'

type BlogBreadcrumbsProps = {
  tag: string
}

export const TagsBreadcrumbs = ({ tag }: BlogBreadcrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/blog">
            <div className="flex items-center gap-1">
              <Icon name="blog" />
              Blog
            </div>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>
            <div className="flex items-center gap-1">
              <Icon name="blog-post" />
              {tag}
            </div>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
