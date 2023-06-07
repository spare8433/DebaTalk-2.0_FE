import styled, { css } from 'styled-components'
import { ImgBoxStyle, SvgImgBoxStyle } from 'types/commonStyle'

export const BasicImgBox = styled.div<{ styleOption?: ImgBoxStyle }>`
  ${({ styleOption }) => css`
    width: ${styleOption?.width?.getValue() ?? '100%'};
    height: ${styleOption?.height?.getValue() ?? '100%'};
    border-radius: ${styleOption?.borderRadius?.getValue() ?? 'initial'};
    box-shadow: ${styleOption?.boxShadow?.getValue() ?? 'initial'};
    img {
      width: 100%;
      height: 100%;
      object-fit: ${styleOption?.objectFit?.getValue() ?? 'initial'};
      object-position: ${styleOption?.objectPosition?.getValue() ?? 'initial'};
    }
  `};
`

export const SvgImgBox = styled(BasicImgBox)<{ styleOption?: SvgImgBoxStyle }>`
  ${({ styleOption }) => css`
    svg {
      fill: ${styleOption?.fill?.getValue() ?? 'initial'};
      width: 100%;
      height: 100%;
      object-fit: ${styleOption?.objectFit?.getValue() ?? 'initial'};
      object-position: ${styleOption?.objectPosition?.getValue() ?? 'initial'};
      border-radius: inherit;
    }
  `};
`

export const NextImageBox = styled(BasicImgBox)<{ styleOption?: SvgImgBoxStyle }>`
  position: relative;
  img {
    border-radius: inherit;
  }
`
