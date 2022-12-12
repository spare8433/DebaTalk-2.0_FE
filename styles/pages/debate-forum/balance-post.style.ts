import { ImgBox } from "@styles/commonStyle"
import styled from "styled-components"
import { PostCurrentSituationBox } from "./common-post.style"

export const BalancePostCurrentSituationBox = styled(PostCurrentSituationBox)`
  display: flex;
  align-items: center;
  span{
    font-size: 24px;
    font-weight: 500;
  }
`

export const BalanceOption = styled.div`
  position: relative;
  flex:1;
  text-align: center;
  h4 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  p{}
  ${ImgBox} {
    position: absolute;
    left: 0;
    top: 0;
  }
`







