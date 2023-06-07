import styled, { css } from 'styled-components'
import { ButtonStlye } from 'types/commonStyle'

// basic button style
export const BasicButton = styled.button<{ styleOption?: ButtonStlye }>`
  ${({ styleOption, theme }) => css`
    width: ${styleOption?.width?.getValue() ?? '100%'};
    height: ${styleOption?.height?.getValue() ?? '100%'};
    box-shadow: ${styleOption?.shadow?.getValue() ?? 'rgba(99, 99, 99, 0.3) 0px 2px 8px 0px'};
    border-radius: ${styleOption?.borderRadius?.getValue() ?? '5.0rem'};
    font-size: ${styleOption?.fontSize?.getValue() ?? '1.6rem'};
    font-weight: ${styleOption?.fontWeight?.getValue() ?? 500};
    color: ${styleOption?.fontColor?.getValue() ?? theme.colors.mainBlack};
  `};
  padding: 0;
  border: 0;
  cursor: pointer;
`

// less style btn
export const LessStyleBtn = styled(BasicButton)`
  background-color: inherit;
  box-shadow: none;
`

export const PrimaryButton = styled(BasicButton)`
  ${({ styleOption, theme }) => css`
    background-color: ${theme.colors.main};
    color: ${styleOption?.fontColor?.getValue() ?? 'white'};
  `};
`

export const SubButton = styled(BasicButton)`
  ${({ styleOption, theme }) => css`
    background-color: white;
    color: ${styleOption?.fontColor?.getValue() ?? theme.colors.main};
    border: 1px solid ${theme.colors.whiteGray};
  `};
`

export const LightGrayButton = styled(BasicButton)`
  ${({ styleOption, theme }) => css`
    background-color: white;
    color: ${styleOption?.fontColor?.getValue() ?? theme.colors.deepGray};
    border: 1px solid ${theme.colors.deepGray};
  `};
`
