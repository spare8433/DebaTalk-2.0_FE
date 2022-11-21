import { ImgBox } from '@styles/commonStyle'
import React, { useEffect, useRef } from 'react'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import { BlueText, ContentBox, OtherInfoLine, PostBox, RedText, TextBox, TextContentLine } from './style'

type WrapperProps = {
  method : string
}

const DebateContentBox = ({method}:WrapperProps) => {
  const balanceDebatePosts = useAppSelector(state => state.balanceDebatePosts.postsData)
  const postData = useRef<Array<any>>([])
  const detailLink = useRef<string>('')
  
  useEffect(()=>{
    const fetchContent = async () => {

      switch (method) {
        case '밸런스토론':
          postData.current = balanceDebatePosts !== null  ? balanceDebatePosts : []
          detailLink.current = 'balance-post'
          break;      
        default:
          break;
      }
    }

    fetchContent();
  },[balanceDebatePosts,method])

  return (
    <ContentBox>
      {postData.current.map((res,index)=>{
        return <Link href={{pathname: `/debate-forum/${detailLink.current}/[pid]`, query: { pid: res.id }}} key={'debatePostItmes'+index}>
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