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
      value: { page, ...rest },
    })
  }, [])
}
