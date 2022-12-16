import React, { useEffect } from 'react'

import {FitImgBox, Title} from '@styles/commonStyle'
import { 
  BlueGauage, Category, ContentInfoBox, ContentLine, DebateContentBox, MainContent,
  MainDebate, ProsConsSubContentBox, IssueSubContentBox, VoteGauge, VoteInfoLine } from './style'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@store/store'
import Link from 'next/link'
import { BalanceDebatePostDataState } from '@store/slices/balanceDebatePost/type'
import { IssueDebatePostDataState } from '@store/slices/issueDebatePost/type'
import { ProsConsDebatePostDataState } from '@store/slices/prosConsDebatePost/type'

const MainDebateContent = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const hotDebateTopics = useAppSelector(state=>state.debatePosts.debatePostsData);

  type test = {
    (
      data:BalanceDebatePostDataState | IssueDebatePostDataState | ProsConsDebatePostDataState,
      keyName:string
    ):JSX.Element
  }

  // 메인 노출 콘텐츠 생성
  const createMainContent:test = (data, keyName) => {
    return ( 
      <MainContent key={keyName + '_primary'}>
        <Link href={{pathname: '/debate-forum/detail-debatepost/[pid]',query: { pid: data.id }}}><a>
          <ContentLine>
            <Category>{data.category}</Category>
            <h2>{data.title}</h2>
            <span>조회수 {data.hits} </span>
          </ContentLine>
            
          <FitImgBox><img src={data.imgUrl === null ? './img/default-thumbnail.png' : data.imgUrl } alt="" /></FitImgBox>
        </a></Link>
      </MainContent>
    )
  }
  
  return (
    <MainDebate>
      <DebateContentBox>
        <Title align='center'>이슈토론</Title>
        {hotDebateTopics !== null && hotDebateTopics.issue.map((res,index)=>{
          if(index === 0) 
            return createMainContent(res,'issuePost')
          else return(
            <IssueSubContentBox key={'issuePost_' + index}>
              <Link href={{pathname: '/debate-forum/issue-post/[pid]', query: { pid: res.id }}}><a>
                <FitImgBox><img src={res.imgUrl === null ? './img/default-thumbnail.png' : res.imgUrl } alt="" /></FitImgBox>
                <ContentInfoBox>
                  <h3>{res.title}</h3>
                  <p>의견 수 {res.IssueOpinions ? res.IssueOpinions.length : 0} 조회수 {res.hits}</p>
                </ContentInfoBox>
              </a></Link>
            </IssueSubContentBox>
          )
        })}                
      </DebateContentBox>

      <DebateContentBox>
        <Title align='center'>찬반토론</Title>
        {hotDebateTopics !== null && hotDebateTopics.prosCons.map((res,index)=>{
          if(index === 0) 
            return createMainContent(res,'prosConsPost')
          else return(
            <ProsConsSubContentBox key={'prosConsPost_' + index}>
              <Link href={{pathname: '/debate-forum/prosCons-post/[pid]', query: { pid: res.id }}}><a>
                <h3>{res.title}</h3>
                <VoteGauge><BlueGauage width='70'/></VoteGauge>
                <VoteInfoLine>
                  <p>찬성 {res.OptionAgreeList ? res.OptionAgreeList.length : 0}</p>
                  <p>참여 {res.ProsConsOpinions ? res.ProsConsOpinions.length : 0}</p>
                  <p>반대 {res.OptionOpposeList ? res.OptionOpposeList.length : 0}</p>
                </VoteInfoLine>
              </a></Link>
            </ProsConsSubContentBox>
          )         
        })}                
      </DebateContentBox>

      <DebateContentBox>
        <Title align='center'>밸런스토론</Title>
        {hotDebateTopics !== null && hotDebateTopics.balance.map((res,index)=>{
          if(index === 0) 
            return createMainContent(res,'balancePost')
          else return(
            <ProsConsSubContentBox key={'balancePost_' + index}>
              <Link href={{pathname: '/debate-forum/balance-post/[pid]', query: { pid: res.id }}}><a>
                <h3>{res.title}</h3>
                <VoteGauge><BlueGauage width='70'/></VoteGauge>
                <VoteInfoLine>
                  <p>A. {res.OptionAList ? res.OptionAList.length : 0}</p>
                  <p>참여 {res.BalanceOpinions ? res.BalanceOpinions.length : 0}</p>
                  <p>B. {res.OptionBList ? res.OptionBList.length : 0}</p>
                </VoteInfoLine>
              </a></Link>
            </ProsConsSubContentBox>
          )
        })}                
      </DebateContentBox>
    </MainDebate>
  )
}

export default MainDebateContent
