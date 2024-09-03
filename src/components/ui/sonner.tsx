'use client'

import { Toaster as Sonner } from 'sonner'
import { Icon } from '#/components/Icon'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          error: '!text-brand-danger-dark',
          success: '!text-brand-success-dark',
          warning: 'text-yellow-400',
          info: '!text-brand-primary-dark',
        },
      }}
      richColors
      icons={{
        success: <Icon name="double-check" />,
        info: <Icon name="lightbulb" />,
        warning: <Icon name="sad" />,
        error: <Icon name="flame" />,
      }}
      {...props}
    />
  )
}

export { Toaster }
