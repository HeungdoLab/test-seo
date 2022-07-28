/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: ["transform-remove-console"],
  },
};

module.exports = nextConfig;
