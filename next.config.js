/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/ri-ctc-calculator-webinar' : '',
  assetPrefix: isProd ? '/ri-ctc-calculator-webinar' : '',
}

module.exports = nextConfig
