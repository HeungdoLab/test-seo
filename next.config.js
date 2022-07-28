import { PRODUCTION } from "./constants/strings";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === PRODUCTION ? true : false,
  },
};

module.exports = nextConfig;
