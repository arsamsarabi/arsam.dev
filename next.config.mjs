import { withContentlayer } from 'next-contentlayer'

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
    ],
  },
}

export default withContentlayer(nextConfig)
