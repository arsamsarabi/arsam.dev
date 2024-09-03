import { Alert } from '#/components/Alert'

export const UnderConstruction = () => {
  return (
    <Alert
      title="Under construction!"
      description="This page is being actively worked on. Come back later for a better experience."
      icon="hammer"
      variant="danger"
    />
  )
}
