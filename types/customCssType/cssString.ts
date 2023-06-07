import CssValue from './cssValue'

export default class CssString implements CssValue {
  private num: number | string

  constructor(num: number | string) {
    this.num = num
  }

  getValue() {
    return `${this.num}`
  }
}
