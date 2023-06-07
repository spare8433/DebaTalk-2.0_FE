import styled, { css } from 'styled-components'
import { LimitMultiLineTextStyle, LimitOneLineTextStyle } from 'types/commonStyle'

export const LimitOneLineText = styled.div<{ styleOption: LimitOneLineTextStyle }>`
  ${({ styleOption, theme }) => css`
    max-width: ${styleOption.maxWidth.getValue()};
    font-size: ${styleOption.fontSize?.getValue() ?? '1.4rem'};
    font-weight: ${styleOption.fontWeight?.getValue() ?? '400'};
    color: ${styleOption.fontColor?.getValue() ?? theme.colors.mainBlack};
  `}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const LimitMultiLineText = styled.div<{ styleOption: LimitMultiLineTextStyle }>`
  ${({ styleOption, theme }) => css`
    max-width: ${styleOption.maxWidth.getValue()};
    font-size: ${styleOption.fontSize?.getValue() ?? '1.4rem'};
    font-weight: ${styleOption.fontWeight?.getValue() ?? '400'};
    color: ${styleOption.fontColor?.getValue() ?? theme.colors.mainBlack};
    line-height: ${styleOption.lineHeight?.getValue() ?? 'inherit'};
    -webkit-line-clamp: ${styleOption.lineNumber.getValue()};
  `}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`
