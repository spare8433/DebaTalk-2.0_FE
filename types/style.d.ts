import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      background: string
      gray_1: string
      gray_2: string
      gray_3: string
      soft_blue: string,
      soft_pink: string,
    }
  }
}
