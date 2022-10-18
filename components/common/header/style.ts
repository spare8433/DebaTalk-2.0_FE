import { ImgBox } from '@styles/commonStyle'
import styled, { css } from 'styled-components'

interface NotiImgBox {
  isNotification:boolean
}

export const IndexContainor = styled.div`
  width: 100%;
`

export const HeaderContainor = styled.div`
  width: 100%;
  border-bottom: #b2bec3 2px solid;
  min-width: 1160px;
`

export const HeaderBox = styled.div`
  width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ul{
    display: flex;
    align-items : center;
    justify-content: space-between;
    font-weight: 500;
    height: min-content;
    li{
      margin: 0 25px;
      padding :15px 0 ;
      font-size: 22px;
      list-style: none;
      cursor: pointer;
    }
  }
`

export const HeaderBreadcrumb = styled.div`
  width: 1160px;
  margin:0 auto;
  padding: 10px 0;
`

export const ProfileBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${ImgBox}{ 
    margin:0 10px 0 20px;
  }
`
export const DropDown = styled.div`
  position: absolute;
  /* display: flex; */
  right: 0px;
  top:45px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  ul {
    top:10px;
    background-color: white;
    display: block;
    
    li {
      &:hover{
        background-color: #f1f2f6;
      }
      width: 160px;
      padding: 12px 16px;
      font-size: 14px;
      margin: 0;
      box-sizing: border-box;
    }
  }
  img{
    width: 18px;
    position: absolute;
    top:-12px;
    right: 10px;
    text-align: right;
    margin: 0;
    height: auto;
  }
`

export const NotiDropDown = styled(DropDown)`
  right: -7px;
  top: 45px;
  ul {
    li{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;  
      width: 300px;
    }
  }
`

export const DebateForumDropDown = styled(DropDown)`
    left: -10px;
    top: 50px;
    right: auto;
  ul {
    li{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;  
      width: 200px;
    }
  }
`

export const NotiIconImgBox = styled(ImgBox)<NotiImgBox>`
  position: relative;

  span {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: red;
    color: white;
    ${({isNotification}) => {
      return (isNotification ? 
        css`
          position: absolute;
          right: 0;
          top:0;
          transform:translate(20%,-20%) ;
        `
        : css`
          display: none;
        `
      )
    }};
  }
`