import { AppLayout, ImgBox } from '@styles/commonStyle'
import styled from 'styled-components'

export const AdminContainor = styled(AppLayout)`
 display: flex;
`

export const Nav = styled.div`
  min-width: 280px;
  padding:30px 0;
  /* box-sizing: border-box; */
  background-color: #353535;
  height: 100%;
  float:left;
`

export const MenuBox = styled.div`
  margin: 20px 0;
  font-size: 18px;
  color: white;
  text-align: center; 
  ul{
    
  }
  li{
    cursor: pointer;
  }
  span{
    margin-left:20px ;
  }
`

export const SlideMenuTitle = styled.div`
  text-align: center;
  display: flex; 
  align-items: center;
  box-sizing: border-box;
`

export const SlideMenuList = styled.div`
  background-color: ${({theme})=>theme.colors.gray_1};
  p{
    color: white;
    font-size: 16px;
    padding: 12px 0;
    margin: 0;
  }
`

export const LogoBox = styled.div`
  text-align: center;
  padding-bottom: 10px;
  border-bottom: solid 2px ${({theme})=>theme.colors.gray_1};

  ${ImgBox} {
    margin: 0 auto;
  }
`

export const ProfileBox = styled.div`
  padding: 20px 30px;
  border-bottom: solid 2px ${({theme})=>theme.colors.gray_1};
`

export const MainBox = styled.div`
  width: 100%;
`

// main 헤더부분
export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color:white;
  padding-left:10px;
`

// MainBox 에 가변되는 내용을 감싸는 박스
export const ContentBox = styled.div`
  max-width: 1120px;
  padding: 10px;
  box-sizing: border-box;
  background-color:white;
  margin: 10px;
`