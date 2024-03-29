/**
 * @type {import('next').NextConfig}
 */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self' fonts.googleapis.com fonts.gstatic.com;
  frame-src giscus.app
`

module.exports = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Not supported yet.
      pure: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.IMAGE_SERVER_PROTOCOL,
        hostname: process.env.IMAGE_SERVER_HOST,
        pathname: '/original/**',
      },
    ],
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_SERVER_URL: process.env.API_SERVER_URL,
  },
  async headers() {
    return [
      {
        // 모든 페이지에 대해 동일한 헤더를 설정
        source: '/(.*)', // 모든 경로
        headers: [
          {
            key: 'X-XSS-Protection', // XSS 방지
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy', // CSP 설정
            value: ContentSecurityPolicy.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
}
