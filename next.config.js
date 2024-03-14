/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
  },
  
  basePath: '/AouiniPeinture',
  assetPrefix: '/AouiniPeinture/',
  output: 'export',
};

module.exports = nextConfig;