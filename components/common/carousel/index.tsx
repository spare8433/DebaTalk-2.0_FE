import { AppLayout, CarouselButton } from '@styles/commonStyle';
import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
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

  const _carouselBox = useRef<HTMLDivElement>(null)
  const timer = useRef<NodeJS.Timeout>()

  const next = useCallback(() => {
    if(!isReactElements(children)) return
    
    if(currentSlide >= children.length - 1){
      setCurrentSlide(0)      
    }else{
      setCurrentSlide(currentSlide + 1);
    }
  },[currentSlide,children])

  const prev = useCallback(() => {
    if(!isReactElements(children)) return
    
    if(currentSlide === 0){
      setCurrentSlide(children.length - 1)      
    }else{
      setCurrentSlide(currentSlide - 1);
    }
  },[currentSlide,children])

  useEffect(() => {
    clearTimeout(timer.current)
    if(isAutoPlay) timer.current = setTimeout(next, 2000)
  }, [next,isAutoPlay])

  const pause = () => setIsAutoPlay(false)
  const start = () => setIsAutoPlay(true)

  return (
    <AppLayout>
      <CarouselContainor>
        <CarouselButton key='prev' className='prev' onClick={()=>{pause();prev();start();}}><img alt='prev' src='./img/leftArrow.png'></img></CarouselButton>
        <CarouselButton key='next' className='next' onClick={()=>{pause();next();start();}}><img alt='next' src='./img/rightArrow.png'></img></CarouselButton>
        
        <CarouselBox ref={_carouselBox} height={option.height}>
          <CarouselContent>
            <CarouselTrack contetWidth={_carouselBox.current !== null ? _carouselBox.current.offsetWidth : 0} currentSlide={currentSlide}>
              {Array.isArray(children) 
                ? children.map((res, index) => <SlidePage key={'slidepage_' + index} contetWidth={_carouselBox.current !== null ? _carouselBox.current.offsetWidth : 0}>{res}</SlidePage>)
                : children
              }
            </CarouselTrack>
              {banner 
                ? banner
                : ''
              }
          </CarouselContent>

        </CarouselBox>
      </CarouselContainor>
      
    </AppLayout>
  )
}
export default Carousel