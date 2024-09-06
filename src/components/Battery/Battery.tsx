'use client'

import { useBattery } from 'react-use'
import { Icon } from '../Icon'
import { parseBatteryInformation } from './utils'

export const Battery = () => {
  const state = useBattery()

  if (!state.isSupported || !state.fetched) return null

  const { color, icon, percentage, text } = parseBatteryInformation(state)

  return (
    <div
      style={{
        border: `2px solid ${color.dark}`,
        backgroundColor: color.light,
        color: color.dark,
      }}
      className="flex items-center justify-start gap-2 rounded-md px-2 py-1 xl:px-4 xl:py-2"
    >
      <p className="text-md md:text-lg lg:text-sm xl:text-lg 2xl:text-xl">
        {percentage}
      </p>
      <Icon name={icon} />
      {' | '}
      <p className="text-md md:text-lg lg:text-sm xl:text-lg 2xl:text-xl">
        {text}
      </p>
    </div>
  )
}
