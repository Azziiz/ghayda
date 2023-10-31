/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      images: {
        domains: ['s3-alpha-sig.figma.com'],
      },
}

module.exports = nextConfig
