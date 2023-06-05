import { ImgBox, LightGrayButton, MainButton, SubButton } from '@styles/commonStyle'
import React from 'react'
import { BackBord, ContentBox, ModalBox, ModalBtnBox, ModalHead } from './style'

type WrapperProps = {
  title?:string,
  visible: boolean,
  childern: React.ReactNode,
  turnOff: () => void,
  option: {
    width:string,
  }
}

const indxe = ({childern,turnOff,option,title}:WrapperProps) => {
  return (
    <ModalBox width={option.width} >
      <BackBord />

      <ModalHead>
        <p>{title}</p>
        <ImgBox><img src="./img/cancle_white" alt="cancle" /></ImgBox>
      </ModalHead>
      
      <ContentBox>
        {childern}
      </ContentBox>
    
    </ModalBox>
  )
}

export default indxe