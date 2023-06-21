import React from 'react'
import Link from 'next/link'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'

import { BalanceDebatePostDataState } from '@store/slices/balanceDebatePost/type'
import { IssueDebatePostDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebatePostDataState } from '@store/slices/prosConsDebatePost/type'
import { Category, ContentLine, MainContent } from './style'

interface Props {
  data: BalanceDebatePostDataState | IssueDebatePostDataState | ProsConsDebatePostDataState
  keyName: string
}

const FirstDebateContent = ({ data, keyName }: Props) => (
  <MainContent key={`${keyName}_primary`}>
    <Link href={{ pathname: '/debate-forum/detail-debatepost/[pid]', query: { pid: data.id } }}>
      <ContentLine>
        <Category>{data.category}</Category>
        <h2>{data.title}</h2>
        <span>조회수 {data.hits} </span>
      </ContentLine>

      <NextImageBox>
        <FitNextImage src={data.imgUrl ? data.imgUrl : '/img/default-thumbnail.png'} alt="" />
      </NextImageBox>
    </Link>
  </MainContent>
)

export default FirstDebateContent
