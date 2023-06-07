import CssValue from './cssValue'

export default class CssNone implements CssValue {
  getValue() {
    return 'none'
  }
}
