import { BasicButtonBox } from '@styles/commonStyle'
import checkWH from '@utils/checkWH'
import styled from 'styled-components'


export const ModalBox = styled.div<{width:string}>`
  width: ${({width})=>checkWH(width)};
  height: auto;
  padding: 8px;
`
export const BackBord = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 50%;
  z-index: 2000;
`

export const ModalHead = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  p { font-size: 16px }
`

export const ContentBox = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: white;
`

export const ModalBtnBox = styled(BasicButtonBox)`
  justify-content: center
`