/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  }
}
