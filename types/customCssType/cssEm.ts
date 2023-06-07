import CssValue from './cssValue'

export default class CssEm implements CssValue {
  private num: number

  constructor(num: number) {
    this.num = num
  }

  getValue() {
    return `${this.num}em`
  }
}
