import checkWH from '@utils/checkWH'
import styled from 'styled-components'

interface BasicStyle {
  width?: string,
  height?: string
}

interface AlignTextStyle extends BasicStyle {
  align?: 'center' | 'left' | 'right'
}

interface ImageBoxStyle extends BasicStyle {
  shadow?: boolean
}

interface ButtonStlye extends BasicStyle {
  fontSize?: string
}

interface InputBoxStyle extends BasicStyle {
  cssStyle?: string
}

export const AppLayout = styled.div<BasicStyle>`
  width: ${({width})=> width !== undefined ? '100%' : checkWH(width)};
  height: ${({height})=>checkWH(height)};
`

export const Containor = styled.div<BasicStyle>`
  width: 100%;
  height: 100%;
  min-width:${({width})=>checkWH(width)};
  position: relative;
  box-sizing: border-box;
`

export const Title = styled.div<AlignTextStyle>`
  color:${({theme}) => theme.colors.main};  
  border-bottom:solid 3px ${({theme}) => theme.colors.main};
  text-align : ${({align})=> align};
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
`

export const TitleBox=styled.div`
  color: black;
  font-size:32px;
  width: fit-content ;
  padding: 0 50px 10px;
  font-weight: 500;
  margin: 20px auto ;
  border-bottom: 4px solid ${({theme})=>theme.colors.main};
`

export const ImgBox = styled.div<ImageBoxStyle>`
  width: ${({width})=>checkWH(width)};
  height: auto;
  img{
    width: 100%;
    ${({shadow})=> {return shadow ? 'filter: drop-shadow(0px 2px 8px rgb(99 99 99 / 30%))' : ''}}
  }
`

export const FitImgBox = styled(ImgBox)`
  height:${({height})=>checkWH(height)};
  img{
    width: 100%;
    height: 100%;
    object-fit:cover;
  }
`

export const ThumbnailImgBox = styled(ImgBox)`
  height:${({height})=>checkWH(height)};
  img{
    width: 100%;
    height: 100%;
    object-fit:cover;
  }
`

export const HeaderInfoBox=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  p{
    font-weight: 400;
    line-height: 1.8;
    padding: 10px 0 20px;
    span{
      margin: 0 5px;
      font-size: 22px;
      color:${({theme})=> theme.colors.main};
      font-weight: 600;
    }
  }
`

export const StyledCategory = styled.div`
  background-color: ${({theme})=> theme.colors.main};
  color:white;
  padding: 8px;
  margin-right: 16px;
`

export const BasicSearchBox = styled.div`
  background-color: white;
  width: 280px;
  box-sizing: border-box;
  border: ${({theme})=> theme.colors.gray_2} 1px solid;
  border-radius:5px;
  display: flex;
  align-items: center;
  height: 32px;
  ${ImgBox} {
    /* margin: 0 8px; */
    margin-left: 10px;
  }
  input{
    color: ${({theme})=> theme.colors.gray_1};
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0 12px;
    outline: none;
    height: 100%;
    background: none;
    font-size: 16px;
    font-weight: 400;
  }
`

export const BasicSelectBox = styled.div`
  display: flex;
  align-items: center;
  select{
    border: ${({theme})=> theme.colors.gray_2} 1px solid;
    border-radius: 3px;
    padding: 4px 8px;
    color:${({theme})=> theme.colors.gray_1};
    font-weight: 400;
    outline: none;
  } 
`

export const CarouselButton = styled.div`
  position: absolute;
  top:50%;
  transform: translate(0, -50%);
  z-index: 2;
  width: auto;
  height: auto;
  &.prev{
    left: 0;
  }
  &.next{
    right: 0;
  }
`

export const BasicButton = styled.button<ButtonStlye>`
  width: ${({width})=>checkWH(width)};
  height: ${({height})=> height +'px'};
  font-size: ${({fontSize})=> fontSize +'px'};
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  border-radius:5px;
  font-weight: 600;
  cursor: pointer;
`

export const MainButton = styled(BasicButton)`
  background-color: ${({theme})=>theme.colors.main};
  color: white;
  border: 0;
`

export const SubButton = styled(BasicButton)`
  background-color: white;
  color: ${({theme})=>theme.colors.main};
  border: 1px solid ${({theme})=>theme.colors.gray_3};
`

export const LightGrayButton = styled(BasicButton)`
  background-color: white;
  color: ${({theme})=> theme.colors.gray_1};
  border: 1px solid ${({theme})=> theme.colors.gray_1};
`

export const BasicButtonBox = styled.div<BasicStyle>`
  width: ${({width})=>checkWH(width)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${MainButton},${SubButton}{
    margin-left: 10px;
  }
`

export const Line = styled.div<BasicStyle>`
  background-color: ${({theme})=>theme.colors.gray_3};
  height: ${({height})=> height +'px'};
  width: ${({width})=>checkWH(width)};
`

export const InputBox = styled.div<InputBoxStyle>`
  box-sizing: border-box;
  width: ${({width})=>checkWH(width)};
  margin-bottom: 8px;
  
  ${({cssStyle})=> cssStyle}

  input,select{
    width: 100%;
    height: ${({height})=>checkWH(height)};
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border-radius:5px;
    padding: 0;
    padding-left: 16px;
    margin: 0 0 5px;
    box-sizing: border-box;
    border: 1px solid ${({theme})=>theme.colors.gray_3};
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  }
  span{
    color: ${({theme})=>theme.colors.gray_3};
    margin-left :10px;
    font-size: 13px;
    font-weight:300;
  }
`

export const SelectBox = styled(InputBox)`
margin-left:10px; 
  select{
    color:${({theme})=> theme.colors.gray_1};
    padding-right: 8px;
    padding-left: 8px;
  }
`