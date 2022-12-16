import { AppLayout, CarouselButton } from '@styles/commonStyle';
import React, { ReactElement, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FC } from 'react'
import { CarouselBox, CarouselContainor, CarouselContent, CarouselTrack, SlidePage } from './style';


interface SlideProps {
	children: React.ReactNode;
}

interface CarouselProps {
  option:{
    height:string
  },
  banner?: React.ReactElement,
	children: React.ReactElement<SlideProps>[] | React.ReactElement<SlideProps>;
}

// export const Slide: FC<SlideProps> = ({ children }) => {
//   return <>{children}</>
// }

function isReactElements(arg: any): arg is React.ReactElement<SlideProps>[] {
  return arg.length !== undefined;
}

const Carousel = ({option, banner, children}:CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay,setIsAutoPlay] = useState(true)
  const [boxSize, setBoxSize] = useState<number | undefined>()

  const _carouselBox = useRef<HTMLDivElement>(null)
  const timer = useRef<NodeJS.Timeout>()

  // 다음 슬라이드로 이동
  const next = useCallback(() => {
    if(!isReactElements(children)) return
    
    if(currentSlide >= children.length - 1){
      setCurrentSlide(0)      
    }else{
      setCurrentSlide(currentSlide + 1);
    }
  },[currentSlide,children])

  // 이전 슬라이드로 이동
  const prev = useCallback(() => {
    if(!isReactElements(children)) return
    
    if(currentSlide === 0){
      setCurrentSlide(children.length - 1)      
    }else{
      setCurrentSlide(currentSlide - 1);
    }
  },[currentSlide,children])

  const pause = useCallback(() => setIsAutoPlay(false), [])
  const start = useCallback(() => setIsAutoPlay(true), [])

  // 자동 넘기기 기능
  useEffect(() => {
    clearTimeout(timer.current)
    if(isAutoPlay) timer.current = setTimeout(next, 2000)
  }, [next,isAutoPlay])

  // 가변적인 화면사이즈 대응
  useLayoutEffect(() => {
    setBoxSize(_carouselBox.current?.offsetWidth)
  }, [_carouselBox.current?.offsetWidth])

  return (
    <AppLayout>
      <CarouselContainor>
        <CarouselButton key='prev' className='prev' onClick={()=>{pause();prev();start();}}><img alt='prev' src='./img/leftArrow.png'></img></CarouselButton>
        <CarouselButton key='next' className='next' onClick={()=>{pause();next();start();}}><img alt='next' src='./img/rightArrow.png'></img></CarouselButton>
        
        <CarouselBox ref={_carouselBox} height={option.height}>
          <CarouselContent>
            <CarouselTrack contetWidth={boxSize ? boxSize : 0} currentSlide={currentSlide}>
              {Array.isArray(children) 
                ? children.map((res, index) => <SlidePage key={'slidepage_' + index} contetWidth={boxSize ? boxSize : 0}>{res}</SlidePage>)
                : children
              }
            </CarouselTrack>
              {banner ? banner: ''}
          </CarouselContent>
        </CarouselBox>
      </CarouselContainor>
    </AppLayout>
  )
}
export default Carousel
