import React, { useEffect } from 'react'

import {FitImgBox, Title} from '@styles/commonStyle'
import { 
  BlueGauage, Category, ContentInfoBox, ContentLine, DebateContentBox, MainContent,
  MainDebate, ProsConsSubContentBox, SubjectSubContentBox, VoteGauge, VoteInfoLine } from './style'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@store/store'
import { debatePostData } from '@store/slices/debatePosts'
import Link from 'next/link'

export const MainDebateContent = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const hotDebateTopics = useAppSelector(state=>state.debatePosts.hotDebateTopics);

  // 메인 노출 콘텐츠 생성
  const createMainContent = (data:debatePostData, keyName:string) => {
    return ( 
      <MainContent key={keyName + '_primary'}>
        <Link href={{pathname: '/debate-forum/detail-debatepost/[pid]',query: { pid: data.id }}}><a>
            <ContentLine>
              <Category>{data.category}</Category>
              <h2>{data.title}</h2>
              <span>의견 {'댓글 수'} 조회수 {data.hits} </span>
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
        {hotDebateTopics !== null && hotDebateTopics.subject.map((res,index)=>{
          if(index === 0) 
            return createMainContent(res,'subjectPost')
          else return(
            <SubjectSubContentBox key={'subjectPost_' + index}>
              <Link href={{pathname: '/debate-forum/detail-debatepost/[pid]', query: { pid: res.id }}}><a>
                <FitImgBox><img src={res.imgUrl === null ? './img/default-thumbnail.png' : res.imgUrl } alt="" /></FitImgBox>
                <ContentInfoBox>
                  <h3>{res.title}</h3>
                  <p>의견 수 {'댓글 수'} 추천수 {'추천수'}</p>
                </ContentInfoBox>
              </a></Link>
            </SubjectSubContentBox>
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
              <Link href={{pathname: '/debate-forum/detail-debatepost/[pid]', query: { pid: res.id }}}><a>
                <h3>{res.title}</h3>
                <VoteGauge><BlueGauage width='70'/></VoteGauge>
                <VoteInfoLine>
                  <p>찬성 {'찬성퍼센트'}</p>
                  <p>{'전체인원 수'} 참여</p>
                  <p>반대 {'반대퍼센트'}</p>
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
              <Link href={{pathname: '/debate-forum/detail-debatepost/[pid]', query: { pid: res.id }}}><a>
                <h3>{res.title}</h3>
                <VoteGauge><BlueGauage width='70'/></VoteGauge>
                <VoteInfoLine>
                  <p>1. {'1번 인원'}</p>
                  <p>{'전체인원 수'} 참여</p>
                  <p>2. {'2번 인원'}</p>
                </VoteInfoLine>
              </a></Link>
            </ProsConsSubContentBox>
          )
        })}                
      </DebateContentBox>
    </MainDebate>
  )
}
