import React from 'react'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import getConfig from 'next/config'
import { LimitOneLineText } from '@styles/commonStyle/texts'
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
  const { publicRuntimeConfig } = getConfig()
  const APISeverUrl = publicRuntimeConfig.API_SERVER_URL
  const hotDebatePosts = useAppSelector((state) => state.debatePosts.hotDebatePosts)

  return (
    <MainDebate>
      <DebateContentBox>
        <h1>이슈토론</h1>
        {hotDebatePosts?.issue.map((res, index) => {
          if (index === 0)
            return <FirstDebateContent key="issuePost_primary" data={res} method="issue" />
          return (
            <IssueSubContentBox key={`issuePost_${res.id}`}>
              <Link href={{ pathname: '/issue-post/[pid]', query: { pid: res.id } }}>
                <NextImageBox>
                  <FitNextImage
                    src={res.imgUrl ? `${APISeverUrl}${res.imgUrl}` : '/img/default-thumbnail.png'}
                    alt="issue-post-thumbnail"
                  />
                </NextImageBox>
                <ContentInfoBox>
                  <h3>{res.title}</h3>
                  <p>
                    의견 수 {res.opinionCount} &nbsp; 조회수 {res.hits}
                  </p>
                </ContentInfoBox>
              </Link>
            </IssueSubContentBox>
          )
        })}
      </DebateContentBox>

      <DebateContentBox>
        <h1>찬반토론</h1>
        {hotDebatePosts?.prosCons.map((res, index) => {
          if (index === 0)
            return <FirstDebateContent key="prosConsPost_primary" data={res} method="proscons" />
          return (
            <ProsConsSubContentBox key={`prosConsPost_${res.id}`}>
              <Link href={{ pathname: '/proscons-post/[pid]', query: { pid: res.id } }}>
                <h3>{res.title}</h3>
                <VoteGauge>
                  <BlueGauage
                    width={
                      res.opinionCount > 0
                        ? Math.ceil((res.agreeListCount / res.opinionCount) * 100)
                        : 50
                    }
                  />
                </VoteGauge>
                <VoteInfoLine>
                  <LimitOneLineText className="blue">찬성</LimitOneLineText>
                  <span>참여 {res.opinionCount}</span>
                  <LimitOneLineText className="red">반대</LimitOneLineText>
                </VoteInfoLine>
              </Link>
            </ProsConsSubContentBox>
          )
        })}
      </DebateContentBox>

      <DebateContentBox>
        <h1>밸런스토론</h1>
        {hotDebatePosts?.balance.map((res, index) => {
          if (index === 0)
            return <FirstDebateContent key="balancePost_primary" data={res} method="balance" />
          return (
            <ProsConsSubContentBox key={`balancePost_${res.id}`}>
              <Link href={{ pathname: '/balance-post/[pid]', query: { pid: res.id } }}>
                <h3>{res.title}</h3>
                <VoteGauge>
                  <BlueGauage
                    width={
                      res.optionAListCount > 0
                        ? Math.ceil((res.optionAListCount / res.opinionCount) * 100)
                        : 50
                    }
                  />
                </VoteGauge>
                <VoteInfoLine>
                  <LimitOneLineText className="blue">A. {res.optionA}</LimitOneLineText>
                  <span>참여 {res.opinionCount}</span>
                  <LimitOneLineText className="red">B. {res.optionB}</LimitOneLineText>
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
