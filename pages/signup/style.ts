import { MainButton } from '@styles/commonStyle'
import styled from 'styled-components'

export const SginUpContainor = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* border: 8px solid ${({theme})=> theme.colors.gray_2}; */
  border-left: 0;
  border-right: 0;
  padding: 16px 20px;
`

export const SginUpBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;
  border: 1px solid ${({theme})=> theme.colors.gray_3};
  border-radius: 5px;
  background-color: ${({theme})=> theme.colors.background};
  h2{
    width: 350px;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }
`

export const SginUpButton = styled(MainButton)`
  margin-top: 20px;
`