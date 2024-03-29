import { LessStyleBtn } from '@styles/commonStyle/buttons'
import styled from 'styled-components'

export const CarouselContainor = styled.div`
  position: relative;
`

export const CarouselBox = styled.div<{ height: string }>`
  width: 100%;
  height: ${(props) => `${props.height}px`};
  margin: 30px 0;
`

export const CarouselContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
`

export const CarouselTrack = styled.div<{ contetWidth?: number; currentSlide: number }>`
  width: ${({ contetWidth }) => (contetWidth ? `${contetWidth.toString()}px` : '10000px')};
  height: 100%;
  position: absolute;
  left: ${({ contetWidth, currentSlide }) =>
    contetWidth ? `${(contetWidth * currentSlide * -1).toString()}px` : '0'};
  top: 0;
  display: flex;
  transition: left 1s ease-in-out;
`

export const CarouselButton = styled(LessStyleBtn)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 10;
  width: 2.8rem !important;
  height: 5.2rem !important;

  &.prev {
    left: 1rem;
  }
  &.next {
    right: 1rem;
  }
`

export const SlidePage = styled.div<{ contetWidth?: number }>`
  min-width: ${({ contetWidth }) => (contetWidth ? `${contetWidth.toString()}px` : '100%')};
  height: 100%;
`
