import createJiti from 'jiti'
import { withContentlayer } from 'next-contentlayer2'
import { fileURLToPath } from 'node:url'

const jiti = createJiti(fileURLToPath(import.meta.url))
jiti('./src/utils/env')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'img.shields.io',
      },
      {
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

export default withContentlayer(nextConfig)
