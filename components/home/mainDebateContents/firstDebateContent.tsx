import React from 'react'
import Link from 'next/link'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'

import { BalanceDebatePostDataState } from '@store/slices/balanceDebatePost/type'
import { IssueDebatePostDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebatePostDataState } from '@store/slices/prosConsDebatePost/type'
import styled from 'styled-components'
import { StyledCategory } from '@styles/commonStyle'

const MainContent = styled.div`
  height: 20rem;
  text-align: center;
  position: relative;
  ${NextImageBox} {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
`

const ContentLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  color: white;

  h2 {
    color: white;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
  }

  span {
    color: white;
    font-size: 1.4rem;
    text-align: right;
    padding: 0.6rem;
  }
`

const Category = styled(StyledCategory)`
  width: 8rem;
  font-size: 1.4rem;
`

interface Props {
  data: BalanceDebatePostDataState | IssueDebatePostDataState | ProsConsDebatePostDataState
  method: 'issue' | 'proscons' | 'balance'
}

const FirstDebateContent = ({ data, method }: Props) => (
  <MainContent key={`${method}Post_primary`}>
    <Link href={{ pathname: `/${method}-post/[pid]`, query: { pid: data.id } }}>
      <ContentLine>
        <Category>{data.category}</Category>
        <h2>{data.title}</h2>
        <span>조회수 {data.hits} </span>
      </ContentLine>

      <NextImageBox>
        <FitNextImage src={data.imgUrl ?? '/img/default-thumbnail.png'} alt="" />
      </NextImageBox>
    </Link>
  </MainContent>
)

export default FirstDebateContent
