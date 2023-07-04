import React from 'react'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import FirstDebateContent from './firstDebateContent'
import {
  BlueGauage,
  ContentInfoBox,
  DebateContentBox,
  MainDebate,
  ProsConsSubContentBox,
  IssueSubContentBox,
  VoteGauge,
  VoteInfoLine,
} from './style'

const MainDebateContent = () => {
  const hotDebateTopics = useAppSelector((state) => state.debatePosts.debatePostsData)

  return (
    <MainDebate>
      <DebateContentBox>
        <h1>이슈토론</h1>
        {hotDebateTopics?.issue.map((res, index) => {
          if (index === 0) return <FirstDebateContent data={res} method="issue" />
          return (
            <IssueSubContentBox key={`issuePost_${index}`}>
              <Link href={{ pathname: '/issue-post/[pid]', query: { pid: res.id } }}>
                <NextImageBox>
                  <FitNextImage
                    src={res.imgUrl ? res.imgUrl : '/img/default-thumbnail.png'}
                    alt=""
                  />
                </NextImageBox>
                <ContentInfoBox>
                  <h3>{res.title}</h3>
                  <p>
                    의견 수 {res.IssueOpinions ? res.IssueOpinions.length : 0} 조회수 {res.hits}
                  </p>
                </ContentInfoBox>
              </Link>
            </IssueSubContentBox>
          )
        })}
      </DebateContentBox>

      <DebateContentBox>
        <h1>찬반토론</h1>
        {hotDebateTopics?.prosCons.map((res, index) => {
          if (index === 0) return <FirstDebateContent data={res} method="proscons" />
          return (
            <ProsConsSubContentBox key={`prosConsPost_${index}`}>
              <Link href={{ pathname: '/proscons-post/[pid]', query: { pid: res.id } }}>
                <h3>{res.title}</h3>
                <VoteGauge>
                  <BlueGauage width="70" />
                </VoteGauge>
                <VoteInfoLine>
                  <p>찬성 {res.OptionAgreeList ? res.OptionAgreeList.length : 0}</p>
                  <p>참여 {res.ProsConsOpinions ? res.ProsConsOpinions.length : 0}</p>
                  <p>반대 {res.OptionOpposeList ? res.OptionOpposeList.length : 0}</p>
                </VoteInfoLine>
              </Link>
            </ProsConsSubContentBox>
          )
        })}
      </DebateContentBox>

      <DebateContentBox>
        <h1>밸런스토론</h1>
        {hotDebateTopics?.balance.map((res, index) => {
          if (index === 0) return <FirstDebateContent data={res} method="balance" />
          return (
            <ProsConsSubContentBox key={`balancePost_${index}`}>
              <Link href={{ pathname: '/balance-post/[pid]', query: { pid: res.id } }}>
                <h3>{res.title}</h3>
                <VoteGauge>
                  <BlueGauage width="70" />
                </VoteGauge>
                <VoteInfoLine>
                  <p>A. {res.OptionAList ? res.OptionAList.length : 0}</p>
                  <p>참여 {res.BalanceOpinions ? res.BalanceOpinions.length : 0}</p>
                  <p>B. {res.OptionBList ? res.OptionBList.length : 0}</p>
                </VoteInfoLine>
              </Link>
            </ProsConsSubContentBox>
          )
        })}
      </DebateContentBox>
    </MainDebate>
  )
}

export default MainDebateContent
