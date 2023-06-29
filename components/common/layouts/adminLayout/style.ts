import styled from 'styled-components'

export const AdminContainor = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const Nav = styled.div`
  min-width: 280px;
  padding: 30px 0;
  /* box-sizing: border-box; */
  background-color: #353535;
  height: 100%;
  float: left;
`

export const MenuBox = styled.div`
  margin: 20px 0;
  font-size: 18px;
  color: white;
  text-align: center;
  ul {
  }
  li {
    cursor: pointer;
  }
  span {
    margin-left: 20px;
  }
`

export const LogoBox = styled.div`
  text-align: center;
  padding-bottom: 10px;
  border-bottom: solid 2px ${({ theme }) => theme.colors.deepGray};
  a {
    display: flex;
    justify-content: center;
  }
`

export const ProfileBox = styled.div`
  padding: 20px 30px;
  border-bottom: solid 2px ${({ theme }) => theme.colors.deepGray};
`

export const MainBox = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`

// MainBox 헤더부분
export const BreadcrumbBox = styled.div`
  width: 100%;
  background-color: white;
`

// MainBox 에 가변되는 내용을 감싸는 박스
export const ContentBox = styled.div`
  max-width: 1120px;
  padding: 10px;
  box-sizing: border-box;
  background-color: white;
  margin: 10px;
`
