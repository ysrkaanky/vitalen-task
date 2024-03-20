/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*.tmdb.org',
        protocol: 'https',
      },
    ],
  },
}

export default nextConfig
