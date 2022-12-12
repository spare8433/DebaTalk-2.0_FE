import { ImgBox } from '@styles/commonStyle'
import React, { useEffect, useRef } from 'react'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import { BlueText, ContentBox, OtherInfoLine, PostBox, RedText, TextBox, TextContentLine } from './style'
import { BalanceDebatePostDataState } from '@store/slices/balanceDebatePost/type'
import { IssueDebatePostDataState } from '@store/slices/issueDebatePost/type'

type WrapperProps = {
  method : '밸런스토론' | '이슈토론' | '찬반토론'
}

const DebateContentBox = ({method}:WrapperProps) => {
  const balanceDebatePosts = useAppSelector(state => state.balanceDebatePosts.postsData)
  const issueDebatePosts = useAppSelector(state => state.issueDebatePosts.postsData)
  const postData = useRef<Array<any>>([])
  const detailLink = useRef<string>('')
  
  const postType: { [index:string]: BalanceDebatePostDataState[] | IssueDebatePostDataState[] | null } = {
    '밸런스토론' : balanceDebatePosts,
    '이슈토론' : issueDebatePosts,
    '찬반토론' : null
  }

  const detailLinkType: { [index:string] : string } = {
    '밸런스토론' : 'balance-post',
    '이슈토론' : 'issue-post',
    '찬반토론' : 'proscons-post'
  }

  return (
    <ContentBox>
      { postType[method] !== null && postType[method]!.map((res,index)=>{
        return <Link href={{pathname: `/debate-forum/${detailLinkType[method]}/[pid]`, query: { pid: res.id }}} key={'debatePostItmes'+index}>
          <a>
            <PostBox>
              <ImgBox shadow={true} width='160'><img src={res.imgUrl === null ? '/img/default-thumbnail.png' : res.imgUrl} alt=''></img></ImgBox>
              <TextBox>
                <h3>{res.title}</h3>
                <TextContentLine>{res.description}</TextContentLine>
                <OtherInfoLine>
                  { method === '밸런스토론' ? <><BlueText>A 선택 </BlueText><RedText>B 선택 </RedText></> : <></>}
                  { method === '찬반토론' ? <><BlueText>찬성 </BlueText><RedText>반대 </RedText></> : <></>}
                  { method === '이슈토론' ? <><span>점수 평균 :  </span></> : <></>}
                  <span>의견 {res.hits}</span>
                  <span>조회수 {res.hits}</span>
                </OtherInfoLine>           
              </TextBox>
            </PostBox>
          </a>
        </Link>
      })}
    </ContentBox>
  )
}

export default DebateContentBox