import { CssValue } from './customCssType'

export interface BasicStyle {
  width?: CssValue
  height?: CssValue
}

export interface TextStyle extends BasicStyle {
  fontSize?: CssValue
  fontColor?: CssValue
  fontWeight?: CssValue
}

export interface InputStyle extends TextStyle {
  fontSize?: CssValue
  fontColor?: CssValue
  fontWeight?: CssValue
}

export interface ButtonStlye extends BasicStyle {
  fontSize?: CssValue
  fontColor?: CssValue
  fontWeight?: CssValue
  borderRadius?: CssValue
  shadow?: CssValue
}

export interface NextImageButtonStyle extends ButtonStlye {
  objectFit?: CssValue
  objectPosition?: CssValue
}

export interface ImgBoxStyle extends BasicStyle {
  borderRadius?: CssValue
  objectFit?: CssValue
  objectPosition?: CssValue
  boxShadow?: CssValue
}

export interface SvgImgBoxStyle extends ImgBoxStyle {
  fill?: CssValue
}

export interface LimitOneLineTextStyle {
  maxWidth: CssValue
  fontSize?: CssValue
  fontWeight?: CssValue
  fontColor?: CssValue
}

export interface LimitMultiLineTextStyle {
  maxWidth: CssValue
  fontSize?: CssValue
  fontWeight?: CssValue
  fontColor?: CssValue
  lineNumber: CssValue
  lineHeight?: CssValue
}
