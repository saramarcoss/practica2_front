
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: '/table',
        destination: '/add',
  
      },
    ]
  }
}
