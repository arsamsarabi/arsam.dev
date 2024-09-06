'use client'

import { intervalToDuration } from 'date-fns'
import { BatteryState } from 'react-use/lib/useBattery'
import { IconNamesType } from '../Icon'

type BatteryLevel = 'full' | 'high' | 'low' | 'critical'

type ParsedBatteryState = {
  icon: IconNamesType
  percentage: string
  text: string
  color: {
    light: string
    dark: string
  }
}

const ICON_MAP: Record<BatteryLevel, IconNamesType> = {
  full: 'battery-full',
  high: 'battery-half',
  low: 'battery-low',
  critical: 'battery-critical',
}

const COLOR_MAP: Record<BatteryLevel, ParsedBatteryState['color']> = {
  full: { light: '#c0e4da', dark: '#10241e' },
  high: { light: '#c0e4da', dark: '#306c5b' },
  low: { light: '#ffe7de', dark: '#ff885b' },
  critical: { light: '#f8bac3', dark: '#8f3643' },
}

const getBatteryLevel = (state: BatteryState): BatteryLevel => {
  if (state.level === 1) return 'full'
  if (0.75 >= state.level && state.level >= 0.65) return 'high'
  if (0.65 >= state.level && state.level >= 0.2) return 'low'
  return 'critical'
}
const getBatteryText = (state: BatteryState) => {
  let text = 'Battery status'

  // Plugged
  if (state.charging) {
    if (state.chargingTime) {
      const time = intervalToDuration({
        start: 0,
        end: state.chargingTime * 1000,
      })
      const hours = time.hours && time.hours > 0 ? `${time.hours}h` : undefined
      const minutes =
        time.minutes && time.minutes > 0 ? `${time.minutes}m` : undefined
      const seconds =
        time.seconds && time.seconds > 0 ? `${time.seconds}s` : undefined
      const times = [hours, minutes, seconds].filter((val) => val).join(' and ')
      text = `${times} to fully charged.`
    } else {
      text = 'Charging'
    }
  }

  // Unplugged
  if (!state.charging) {
    if (state.dischargingTime) {
      const time = intervalToDuration({
        start: 0,
        end: state.dischargingTime * 1000,
      })
      const hours = time.hours && time.hours > 0 ? `${time.hours}h` : undefined
      const minutes =
        time.minutes && time.minutes > 0 ? `${time.minutes}m` : undefined
      const seconds =
        time.seconds && time.seconds > 0 ? `${time.seconds}s` : undefined
      const times = [hours, minutes, seconds].filter((val) => val).join(' & ')

      text = times.length ? `${times} left on battery.` : 'Fully charged.'
    } else {
      text = 'On battery power.'
    }
  }

  return text
}

export const parseBatteryInformation = (
  state: BatteryState
): ParsedBatteryState => {
  const level = getBatteryLevel(state)
  const color = COLOR_MAP[level]
  const icon = ICON_MAP[level]
  const percentage = `${(state.level * 100).toFixed(0)}%`
  const text = getBatteryText(state)

  return {
    color,
    icon,
    percentage,
    text,
  }
}
