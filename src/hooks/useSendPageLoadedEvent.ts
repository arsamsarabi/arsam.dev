'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { useEffect } from 'react'

type Args = {
  page: string
} & {
  [key in string]: string
}

export const useSendPageLoadedEvent = ({ page, ...rest }: Args) => {
  useEffect(() => {
    sendGAEvent('event', 'Page loaded', {
      value: { page, mode: 'sendGAEvent("event",', ...rest },
    })

    sendGAEvent({
      event: 'Page loaded',
      data: { page, mode: 'sendGAEvent({},', ...rest },
      value: { page, mode: 'sendGAEvent({},', ...rest },
    })
  }, [])
}
