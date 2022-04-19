/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['gsap']);
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withPlugins([withTM], nextConfig);
