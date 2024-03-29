import React, { ReactElement, useEffect } from 'react'
import { ImgBox, ThumbnailImgBox } from '@styles/commonStyle'
import Comment from '@components/common/comment'
import useInput from '@hooks/useInput'
import { useAppDispatch, useAppSelector, wrapper } from '@store/store'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { createBalanceOpinion, getBalanceDebatePost } from '@store/slices/balanceDebatePost'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import { 
  CommentBox,ContentBox, ContentTitle, DebateRulesBox, DetailDevateContainor,
  HeaderButtonBox,HeaderCategoryLine,HeaderInfoBox, IndexContainor, OpinionListBox, PostContentBox, 
  PostHeaderBox, RelatedPostsBox, OpinionSelect, OpinionSelectBox
} from '@styles/pages/debate-forum/common-post.style'
import { 
  BalanceOption, BalancePostCurrentSituationBox
} from '@styles/pages/debate-forum/balance-post.style'
import OpinionList from '@components/debate-forum/opinionList'
import axios from 'axios'
import { loadMyInfo } from '@store/slices/user'
import dayjs from 'dayjs'


const BalancePostPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const [comment,onChangeComment, setComment] = useInput('')
  const [selection,onChangeSelection] = useInput('A')

  const { pid } = router.query
  const postData = useAppSelector(state => state.balanceDebatePost.postData)

  const submitComment = async () => {
    try {
      await dispatch(createBalanceOpinion({
        postId:parseInt(pid as string),
        content:comment,
        selection,
      })).unwrap()
      await  dispatch(getBalanceDebatePost(pid as string)).unwrap()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(postData !== null || !pid) return
    const fetchData = async () => {
      try {
        await dispatch( getBalanceDebatePost(pid as string)).unwrap() 
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[pid])

  if (postData === null || postData === undefined) return

  return (
    <IndexContainor>
      <DetailDevateContainor>

        {/* 타이틀 부분 박스 */}
        <PostHeaderBox>
          <h1>{postData.title}</h1>

          <HeaderCategoryLine>
            <span>[{dayjs(postData.createdAt).format("YYYY-MM-DD HH:mm:ss") + ' - ' + '밸런스토론' + ' - ' + postData.category}]</span>
            {postData.createdAt}
            <HeaderButtonBox>
              <ImgBox></ImgBox>
            </HeaderButtonBox>
          </HeaderCategoryLine>

          <HeaderInfoBox>
            <p>※ 서로의 관점을 존중하고 서로 의견을 나누며 긍정적이고 발전적인 토론이 되길바랍니다.  ※</p>
            <span>페이지 하단에서 의견을 남기실 수 있습니다. ↓↓</span>
          </HeaderInfoBox>
        </PostHeaderBox>

        {/* 내용 */}

        <PostContentBox>
          <ThumbnailImgBox height='200' shadow={true}>
            <img src={postData.imgUrl ? postData.imgUrl : '/img/default-thumbnail.png' } alt="thumbnail-img" />
          </ThumbnailImgBox>

          <ContentTitle>[ 설명 ]</ContentTitle>
          <ContentBox><p>{postData.description}</p></ContentBox>
          
          <ContentTitle>[ 기사 ]</ContentTitle>
          <ContentBox>
            { postData.article 
              ? postData.article.split(',').map((res, index) => <Link href={res}>{res}</Link>)
              : ''
            }
          </ContentBox>
          
          <ContentTitle>[ 찬성 의견 ]</ContentTitle>
          <ContentBox><p>{postData.issue1}</p></ContentBox>
          

          <ContentTitle>[ 반대 의견 ]</ContentTitle>
          <ContentBox><p>{postData.issue2}</p></ContentBox>
        </PostContentBox>

        {/* 관련 포스트 추천 박스*/}
        <RelatedPostsBox></RelatedPostsBox>

        {/* 토론 현황 박스 */}
        <ContentTitle>[ 현황 ]</ContentTitle>
        <BalancePostCurrentSituationBox>
          
          <BalanceOption>
            {postData.OptionAList!.length > postData.OptionBList!.length 
              ? <ImgBox width='24'><img src='/img/crown.png' /></ImgBox> 
              : <></>
            }
            <h4>A. {postData.optionA}</h4>
            <p>{postData.OptionAList?.length} 명</p>
          </BalanceOption>

          <span>VS</span>

          <BalanceOption>
            {postData.OptionAList!.length < postData.OptionBList!.length 
              ? <ImgBox width='24'><img src='/img/crown.png' /></ImgBox> 
              : <></>
            }
            <h4>B. {postData.optionB}</h4>
            <p>{postData.OptionBList?.length} 명</p>
          </BalanceOption>
        </BalancePostCurrentSituationBox>

        {/* 토론규칙 */}
        <DebateRulesBox>
          <h3>토론규칙</h3>
          <p>
            한걸음 더 나아가기 위한 토론장임을 기억하고 서로 다른 생각, 관점, 의견의 차이를 인정 합시다.<br></br>
            정확하지 않은 정보는 혼란을 야기할 수 있으니 인용하려는 정보의 출처를 남겨주십시오<br></br>
            비방 및 욕설은 삭제 조치되고 차후 사이트 이용에 제제가 있을 수 있습니다.
          </p>
        </DebateRulesBox>
        
        {/* 밸런스 선택 */}
        <OpinionSelectBox>
          <span>선택지 :</span>
          <OpinionSelect onChange={onChangeSelection} value={selection}>
            <option value="A">A. {postData.optionA}</option>
            <option value="B">B. {postData.optionB}</option>
          </OpinionSelect>
          <p>* 두 가지 선택지 중 한 가지를 선택해주세요.</p>
        </OpinionSelectBox>
        
        {/* 의견 및 댓글 (따로 컴포넌트)*/}
        <ContentTitle>[ 의견작성 ]</ContentTitle>
        <CommentBox>
          <Comment 
            textState={comment} 
            setState={setComment} 
            onChangeState={onChangeComment} 
            submitFn={submitComment} 
          />
        </CommentBox>

        <ContentTitle>[ 의견 ]</ContentTitle>  
        <OpinionListBox>
          <OpinionList data={postData.BalanceOpinions} mode='balance'/>
        </OpinionListBox>
      </DetailDevateContainor>
    </IndexContainor>
  )
}

BalancePostPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store)=> async ({req, query}) => {
  const { pid } = query
  const cookie = req ? req.headers.cookie : ''
  
  if (req && cookie) { // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = cookie
  }
  if(pid) await store.dispatch(getBalanceDebatePost(pid as string));
  await store.dispatch(loadMyInfo())
  return {props: {}}
})

export default BalancePostPage
