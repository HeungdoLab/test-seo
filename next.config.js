/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // removeConsole: true,
    removeConsole: process.env.NODE_ENV === "production" ? true : false,
  },
};

module.exports = nextConfig;
