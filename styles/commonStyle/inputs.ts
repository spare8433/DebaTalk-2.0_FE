import styled, { css } from 'styled-components'
import { InputStyle } from 'types/commonStyle'

// basic inputs css
const BasictInputsCss = css<{ styleOption?: InputStyle }>`
  width: ${({ styleOption }) => styleOption?.width?.getValue()};
  height: ${({ styleOption }) => styleOption?.height?.getValue()};
  font-size: ${({ styleOption }) => styleOption?.fontSize?.getValue() ?? '1.4rem'};
  font-weight: ${({ styleOption }) => styleOption?.fontWeight?.getValue() ?? 400};
  color: ${({ styleOption, theme }) =>
    styleOption?.fontColor?.getValue() ?? theme.colors.mainBlack};
`

// frequently used inputs css
const CommonInputCss = css`
  ${BasictInputsCss};
  outline: none;
  border-radius: 0.5rem;
  padding: 0;
  padding-left: 1.6rem;
  margin: 0 0 0.5rem;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.whiteGray};
  box-shadow: rgba(99, 99, 99, 0.3) 0 0.2rem 0.8rem 0;
`

// except for some basic styles input css
export const LessStyleInputsCss = css`
  ${BasictInputsCss};
  background: inherit;
  border: none;
  outline: none;
`

// basic input style
export const BasicTextInput = styled.input`
  ${BasictInputsCss};
`

// basic select style
export const BasicSelect = styled.select`
  ${BasictInputsCss};
`

// except for some basic styles input style
export const LessStyleInput = styled.input`
  ${LessStyleInputsCss}
`

// except for some basic styles select style
export const LessStyleSelect = styled.select`
  ${LessStyleInputsCss}
`

// frequently used input style
export const CommonInput = styled.input`
  ${CommonInputCss}
`

// frequently used select style
export const CommonInputSelect = styled.select`
  ${CommonInputCss}
`
