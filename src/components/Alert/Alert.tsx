import { Icon, IconNamesType } from '#/components/Icon'
import {
  AlertDescription,
  AlertTitle,
  Alert as ShadAlert,
  type AlertProps as ShadAlertProps,
} from '#/components/ui/alert'

export type AlertProps = {
  icon: IconNamesType
  title: string
  description: string
  variant?: ShadAlertProps['variant']
}

export const Alert = ({
  icon,
  title,
  description,
  variant = 'default',
}: AlertProps) => {
  return (
    <ShadAlert variant={variant}>
      <Icon name={icon} />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </ShadAlert>
  )
}
