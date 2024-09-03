import { Icon } from '#/components/Icon'
import { Toaster as Sonner } from '#/components/ui/sonner'

export const Toaster = () => {
  return (
    <Sonner
      richColors
      theme="light"
      icons={{
        success: <Icon name="double-check" />,
        info: <Icon name="lightbulb" />,
        warning: <Icon name="sad" />,
        error: <Icon name="flame" />,
      }}
      toastOptions={{
        classNames: {
          error: '!text-brand-danger-dark',
          success: '!text-brand-success-dark',
          warning: 'text-yellow-400',
          info: '!text-brand-primary-dark',
        },
      }}
    />
  )
}
