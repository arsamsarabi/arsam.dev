import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    GA4_ID: z.string().min(1),
  },
  client: {},

  runtimeEnv: {
    GA4_ID: process.env.GA4_ID,
  },
})
