import { Icon, type IconNamesType } from '#/components/Icon'

type IconAndTextProps = {
  icon: IconNamesType
  text: string
}

export const IconAndText = ({ icon, text }: IconAndTextProps) => {
  return (
    <div className="flex items-center gap-2">
      <Icon name={icon} size={22} />
      <p className="truncate text-sm">{text}</p>
    </div>
  )
}
