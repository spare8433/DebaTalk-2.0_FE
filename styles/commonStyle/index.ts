import styled, { css } from 'styled-components'
import { BasicStyle } from 'types/commonStyle'

// basic category style
export const StyledCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  padding: 0.8rem;
  margin-right: 1.6rem;
`

// border Line style
export const Line = styled.div<{ styleOption: BasicStyle }>`
  ${({ styleOption, theme }) => css`
    background-color: ${theme.colors.whiteGray};
    width: ${styleOption?.width?.getValue() ?? '100%'};
    height: ${styleOption?.height?.getValue() ?? '0.2rem'};
  `};
`
