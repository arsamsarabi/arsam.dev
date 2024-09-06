import { PropsWithChildren } from 'react'
import { Icon, type IconNamesType } from '#/components/Icon'
import { cn } from '#/utils/cn'
import type { PartialRecord } from '#/utils/types'

type ClassNamesElements = 'root' | 'icon' | 'label'

type IconAndTextProps = PropsWithChildren<{
  icon?: IconNamesType
  label: string
  classNames?: PartialRecord<ClassNamesElements, string>
}>

export const IconAndLabel = ({
  icon,
  label,
  classNames,
  children,
}: IconAndTextProps) => {
  return (
    <div className={cn('flex items-center gap-2', classNames?.root)}>
      {icon ? <Icon name={icon} className={cn(classNames?.icon)} /> : children}
      <p className={cn('truncate text-sm', classNames?.label)}>{label}</p>
    </div>
  )
}
