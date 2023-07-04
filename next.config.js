/**
 * @type {import('next').NextConfig}
 */

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
}
