import { DefaultTheme } from 'styled-components'

const colors = {
  main: '#A38AF8',
  background: '#F5F5F5',
  mainBlack: '#3B3B3B',
  deepGray: '#707070',
  gray: '#9B9B9B',
  whiteGray: '#ACACAC',
  softBlue: '#7291E6',
  softPink: '#E67292',
}

const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
  wideDesktop: '1600px',
}

const device = {
  mobile: `screen and (min-width: ${deviceSizes.mobile})`,
  tablet: `screen and (min-width: ${deviceSizes.tablet})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
  desktop: `screen and (min-width: ${deviceSizes.desktop})`,
  wideDesktop: `screen and (min-width: ${deviceSizes.wideDesktop})`,
}

const theme: DefaultTheme = {
  colors,
  device,
}

export default theme
