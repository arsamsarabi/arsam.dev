'use client'

import {
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WorkplaceIcon,
  WorkplaceShareButton,
} from 'next-share'
import { IconAndLabel } from '#/components/IconAndLabel'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'

export type ShareButtonProps = {
  slug: string
  title: string
  excerpt: string
  tags: Array<string>
}

export const ShareButton = ({
  title,
  slug,
  excerpt,
  tags,
}: ShareButtonProps) => {
  const url = `https://arsam.dev/blog/${slug}`

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IconAndLabel
          icon="share"
          label="Share"
          classNames={{
            root: 'rounded-md border border-brand-primary px-2 py-1 text-brand-primary',
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <FacebookShareButton
            url={url}
            quote={excerpt}
            hashtag={tags.map((t) => `#${t.replaceAll(' ', '_')}`).join(' ')}
          >
            <IconAndLabel label="Share on Facebook">
              <FacebookIcon size={24} round />
            </IconAndLabel>
          </FacebookShareButton>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <LinkedinShareButton url={url}>
            <IconAndLabel label="Share on LinkedIn">
              <LinkedinIcon size={24} round />
            </IconAndLabel>
          </LinkedinShareButton>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <RedditShareButton url={url} title={title}>
            <IconAndLabel label="Share on Reddit">
              <RedditIcon size={24} round />
            </IconAndLabel>
          </RedditShareButton>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <TwitterShareButton url={url} title={title}>
            <IconAndLabel label="Share on X">
              <TwitterIcon size={24} round />
            </IconAndLabel>
          </TwitterShareButton>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <WorkplaceShareButton url={url} quote={title}>
            <IconAndLabel label="Share on Workplace">
              <WorkplaceIcon size={24} round />
            </IconAndLabel>
          </WorkplaceShareButton>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <InstapaperShareButton url={url} title={title}>
            <IconAndLabel label="Save on Instapaper">
              <InstapaperIcon size={24} round />
            </IconAndLabel>
          </InstapaperShareButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
