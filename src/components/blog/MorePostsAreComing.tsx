import { Alert } from '#/components/Alert'

export const MorePostsAreComing = () => {
  return (
    <div className="mb-4 md:mb-6 2xl:mb-8">
      <Alert
        title="It's kind of quiet here.."
        description="I've just lunched my blog! I'm working hard to write more articles and create YouTube videos. Please check back again soon for more content."
        icon="star-shine"
        variant="primary"
      />
    </div>
  )
}
