/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dash-connect-backend.vercel.app', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dash-connect-backend.vercel.app',
        port: '',
        pathname: '**/*',
      },
      {
        protocol: 'http',
        hostname: 'localhost:4000',
        port: '',
        pathname: '**/*',
      },
    ],
  },
}

module.exports = nextConfig 