'use client'

import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { cn } from '#/utils/cn'

export type AnimateInProps = PropsWithChildren<{
  className?: string
}>

export const AnimateIn = ({ children, className }: AnimateInProps) => {
  return (
    <motion.div
      className={cn('relative', className)}
      initial={{ opacity: 0, top: -40 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
