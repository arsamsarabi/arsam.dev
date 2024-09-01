import { type VariantProps, cva } from 'class-variance-authority'
import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '#/utils/cn'

const pillVariants = cva(
  'text-nowrap inline-flex max-w-min items-center rounded-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        light: 'bg-brand-primary-lightest text-brand-primary-darkest',
        dark: 'border-r-brand-primary-darkest text-brand-primary-lightest',
        primary: 'bg-brand-primary text-brand-accent-lightest',
        secondary: 'bg-brand-secondary text-brand-accent-lightest',
        accent: 'bg-brand-accent text-brand-accent-lightest',
        success: 'bg-brand-success text-brand-accent-lightest',
        danger: 'bg-brand-danger text-brand-accent-lightest',
      },
      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-2 py-1 text-sm',
        lg: 'px-2 py-1 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface PillProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof pillVariants> {}

export const Pill = forwardRef<HTMLParagraphElement, PillProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(pillVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

Pill.displayName = 'Pill'
