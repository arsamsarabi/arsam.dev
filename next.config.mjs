/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig
