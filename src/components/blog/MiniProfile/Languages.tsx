import { Icon, IconNamesType } from '#/components/Icon'

const COUNTRY_FLAGS: Array<IconNamesType> = [
  'flag-iran',
  'flag-uk',
  'flag-spain',
]

export const Languages = () => {
  return (
    <div className="flex items-center justify-between">
      {COUNTRY_FLAGS.map((language) => (
        <Icon key={language} name={language} />
      ))}
    </div>
  )
}
