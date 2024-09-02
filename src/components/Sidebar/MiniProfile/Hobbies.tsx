import { Icon, IconNamesType } from '#/components/Icon'

const HOBBY_ICONS: Array<IconNamesType> = [
  'gamepad',
  'headphones',
  'video-frame-cut',
  'laptop',
  'book',
  'telescope',
  'hiking',
  'suitcase',
]

export const Hobbies = () => {
  return (
    <div className="flex items-center justify-between">
      {HOBBY_ICONS.map((hobby) => (
        <Icon key={hobby} name={hobby} size={28} />
      ))}
    </div>
  )
}
