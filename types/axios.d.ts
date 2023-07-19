import 'axios'

declare module 'axios' {
  export interface HeadersDefaults {
    Cookie?: string
  }
}
