import React from 'react'
import styled, { css } from 'styled-components'
import { CssValue } from 'types/customCssType'

interface Props {
  value: number
  onChange: (value: number) => void
  max: number
  bar: number
  styleOption?: StyleOption
}

// onChange(value: 변경할 페이지 번호): 변경 핸들러
// max: 총 페이지 수
// bar: 한 개의 바에 표시될 버튼 개수

interface StyleOption {
  containerWidth?: CssValue
  containerMarginVertical?: CssValue
  containerMarginHorizontal?: CssValue
  cellWidth?: CssValue
  cellHeight?: CssValue
  fontSize?: CssValue
}

const Container = styled.div<{ styleOption?: StyleOption }>`
  width: ${({ styleOption }) => styleOption?.containerWidth?.getValue() ?? '100%'};
  text-align: center;
  font-size: ${({ styleOption }) => styleOption?.fontSize?.getValue() ?? '2.0rem'};
`

const Button = styled.a<{ styleOption?: StyleOption; isCurrent: boolean }>`
  color: #585858;
  text-decoration: nine;
  display: inline-block;
  width: ${({ styleOption }) => styleOption?.cellWidth?.getValue() ?? '3rem'};
  height: ${({ styleOption }) => styleOption?.cellHeight?.getValue() ?? '3rem'};

  &:hover {
    color: ${({ theme }) => theme.colors.main};
    font-weight: 700;
  }

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      font-weight: 700;
      color: ${({ theme }) => theme.colors.main};
      text-decoration: underline;
    `}
`

const algorithm = (value: number, bar: number, max?: number) => {
  if (!max) {
    return []
  }
  // 버튼 목록 그리기
  const pageLevel = Math.floor(value * (1 / bar))
  const pagination: number[] = []

  let i = pageLevel * bar
  while (i < pageLevel * bar + bar && i < max) {
    pagination[i] = i + 1
    i += 1
  }
  return pagination
}

const Pagination = (props: Props): JSX.Element => {
  const { value, onChange, max, bar, styleOption } = props
  const pagination = algorithm(value, bar, max)
  return (
    <Container styleOption={styleOption}>
      {pagination.map((num) => (
        <Button
          styleOption={styleOption}
          onClick={() => onChange(num)}
          isCurrent={num === value + 1}
        >
          {num}
        </Button>
      ))}
    </Container>
  )
}

export default Pagination
