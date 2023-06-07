import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      background: string
      mainBlack: string
      deepGray: string
      gray: string
      whiteGray: string
      softBlue: string
      softPink: string
    }
    device: {
      mobile: string
      tablet: string
      laptop: string
      desktop: string
      wideDesktop: string
    }
  }
}
