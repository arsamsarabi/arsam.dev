import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '#/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2',
  {
    variants: {
      colour: {
        primary:
          'bg-brand-primary text-brand-primary-lightest hover:bg-brand-primary-dark hover:border-brand-primary-dark border-brand-primary',
        secondary:
          'bg-brand-secondary text-brand-secondary-lightest hover:bg-brand-secondary-dark hover:border-brand-secondary-dark border-brand-secondary',
        accent:
          'bg-brand-accent text-brand-accent-darkest hover:text-brand-accent-lightest hover:bg-brand-accent-dark hover:border-brand-accent-dark border-brand-accent',
        success:
          'bg-brand-success text-brand-success-lightest hover:bg-brand-success-dark hover:border-brand-success-dark border-brand-success',
        danger:
          'bg-brand-danger text-brand-danger-lightest hover:bg-brand-danger-dark hover:border-brand-danger-dark border-brand-danger',
        light:
          'bg-brand-primary-lightest text-brand-primary-darkest border-brand-primary-lightest',
        dark: 'bg-brand-primary-darkest text-brand-primary-lightest border-brand-primary-darkest',
      },
      variant: {
        filled: '',
        outline: 'border bg-transparent',
        ghost: 'border-0 bg-transparent',
        link: 'border-0 bg-transparent hover:bg-transparent underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        xs: 'h-9 px-4 md:h-7 rounded-md md:px-2',
        md: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        colour: 'primary',
        class: 'text-brand-primary hover:text-brand-primary-lightest',
      },
      {
        variant: 'outline',
        colour: 'secondary',
        class: 'text-brand-secondary hover:text-brand-secondary-lightest',
      },
      {
        variant: 'outline',
        colour: 'accent',
        class: 'text-brand-accent hover:text-brand-accent-lightest',
      },
      {
        variant: 'outline',
        colour: 'success',
        class: 'text-brand-success hover:text-brand-success-lightest',
      },
      {
        variant: 'outline',
        colour: 'danger',
        class: 'text-brand-danger hover:text-brand-danger-lightest',
      },
      {
        variant: 'outline',
        colour: 'light',
        class: 'text-brand-primary-lightest',
      },
      {
        variant: 'outline',
        colour: 'dark',
        class: 'text-brand-primary-darkest',
      },
      // ghost
      {
        variant: 'ghost',
        colour: 'primary',
        class: 'text-brand-primary hover:bg-brand-primary-lightest',
      },
      {
        variant: 'ghost',
        colour: 'secondary',
        class: 'text-brand-secondary hover:bg-brand-secondary-lightest',
      },
      {
        variant: 'ghost',
        colour: 'accent',
        class:
          'text-brand-accent hover:text-brand-accent-dark hover:bg-brand-accent-lightest',
      },
      {
        variant: 'ghost',
        colour: 'success',
        class: 'text-brand-success hover:bg-brand-success-lightest',
      },
      {
        variant: 'ghost',
        colour: 'danger',
        class: 'text-brand-danger hover:bg-brand-danger-lightest',
      },
      {
        variant: 'ghost',
        colour: 'light',
        class: 'text-brand-primary-lightest hover:bg-transparent',
      },
      {
        variant: 'ghost',
        colour: 'dark',
        class: 'text-brand-primary-darkest',
      },
      // link
      {
        variant: 'link',
        colour: 'primary',
        class: 'text-brand-primary',
      },
      {
        variant: 'link',
        colour: 'secondary',
        class: 'text-brand-secondary',
      },
      {
        variant: 'link',
        colour: 'accent',
        class: 'text-brand-accent',
      },
      {
        variant: 'link',
        colour: 'success',
        class: 'text-brand-success',
      },
      {
        variant: 'link',
        colour: 'danger',
        class: 'text-brand-danger',
      },
      {
        variant: 'link',
        colour: 'light',
        class: 'text-brand-primary-lightest',
      },
      {
        variant: 'link',
        colour: 'dark',
        class: 'text-brand-primary-darkest',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      colour: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  LeftIcon?: React.ReactNode
  RightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      colour,
      asChild = false,
      children,
      LeftIcon,
      RightIcon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, colour, className }))}
        ref={ref}
        {...props}
      >
        <>
          {LeftIcon}
          {children}
          {RightIcon}
        </>
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
