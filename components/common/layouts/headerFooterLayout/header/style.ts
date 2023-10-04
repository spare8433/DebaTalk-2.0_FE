import { NextImageBox } from '@styles/commonStyle/imgBox'
import styled, { css } from 'styled-components'

interface NotiImgBox {
  isNotification: boolean
}

export const IndexContainor = styled.header`
  width: 100%;
`

export const HeaderContainor = styled.div`
  width: 100%;
  border-bottom: #b2bec3 0.2rem solid;
  min-width: 1160px;
`

export const HeaderBox = styled.div`
  width: 1160px;
  height: 6rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;
`

export const LeftMenu = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const MainTopMenu = styled.ul`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  height: min-content;
  li {
    padding: 1.5rem 1rem;
    display: flex;
    align-items: flex-end;
    margin: 0 1.5rem;
    font-size: 1.8rem;
    list-style: none;
    cursor: pointer;
    font-weight: 500;

    a {
      font-weight: 500;
    }

    ${NextImageBox} {
      width: 2.2rem;
      height: 2.2rem;
      margin-left: 0.6rem;
    }
  }
`

export const BreadcrumbBox = styled.div`
  width: 1160px;
  margin: 0.5rem auto;
`

export const ProfileBox = styled.div`
  justify-content: flex-end;
  position: relative;
  display: flex;
  align-items: center;
  ${NextImageBox} {
    margin: 0 1rem 0 2rem;
  }
`
export const DropDown = styled.div`
  position: absolute;
  /* display: flex; */
  right: 0;
  top: 4.5rem;
  box-shadow: rgba(99, 99, 99, 0.3) 0 0.2rem 0.8rem 0;
  ul {
    top: 1rem;
    background-color: white;
    display: block;

    li {
      width: 16rem;
      height: 4rem;
      padding: 0;
      &:hover {
        background-color: #f1f2f6;
      }
      a {
        text-align: center;
        padding: 1.2rem 0;
        width: 100%;
        height: 100%;
      }

      font-size: 1.4rem;
      margin: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
    }
    button {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
  img {
    width: 1.8rem;
    position: absolute;
    top: -1.2rem;
    right: 1rem;
    text-align: right;
    margin: 0;
    height: auto;
  }
`

export const NotiDropDown = styled(DropDown)`
  right: -0.7rem;
  top: 4.5rem;
  ul {
    li {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 30rem;
    }
  }
`

export const DebateForumDropDown = styled(DropDown)`
  left: -1rem;
  top: 5rem;
  right: auto;
  ul {
    li {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 20rem;
      font-weight: 400;
    }
  }
`

export const NotiIconImgBox = styled.div<NotiImgBox>`
  position: relative;
  margin-right: 1rem;
  ${NextImageBox} {
    margin: 0;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: red;
    color: white;
    ${({ isNotification }) =>
      isNotification
        ? css`
            position: absolute;
            right: 0;
            top: 0;
            transform: translate(50%, -50%);
          `
        : css`
            display: none;
          `};
  }
`
