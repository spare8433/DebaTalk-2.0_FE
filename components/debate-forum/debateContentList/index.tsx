import React from 'react'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssRem, CssString } from 'types/customCssType'
import FitNextImage from '@components/common/fitNextImage'
import {
  BlueText,
  ContentBox,
  OtherInfoLine,
  PostBox,
  RedText,
  TextBox,
  TextContentLine,
} from './style'

interface Props {
  method: '밸런스토론' | '이슈토론' | '찬반토론'
}

const detailLinkType = {
  밸런스토론: 'balance-post',
  이슈토론: 'issue-post',
  찬반토론: 'prosCons-post',
}

const DebateContentList = ({ method }: Props) => {
  const balanceDebatePosts = useAppSelector((state) => state.balanceDebatePosts.postsData)
  const issueDebatePosts = useAppSelector((state) => state.issueDebatePosts.postsData)
  const prosConsDebatePosts = useAppSelector((state) => state.prosConsDebatePosts.postsData)

  const postType = {
    밸런스토론: balanceDebatePosts,
    이슈토론: issueDebatePosts,
    찬반토론: prosConsDebatePosts,
  }

  return (
    <ContentBox>
      {postType[method]?.map((res, index) => (
        <Link
          href={{
            pathname: `/debate-forum/${detailLinkType[method]}/[pid]`,
            query: { pid: res.id },
          }}
          key={`debatePostItmes${index}`}
        >
          <PostBox>
            <NextImageBox
              styleOption={{
                width: new CssRem(16),
                height: new CssRem(16),
                boxShadow: new CssString('rgba(99, 99, 99, 0.3) 0px 2px 8px 0px'),
              }}
            >
              <FitNextImage src={res.imgUrl ?? '/img/default-thumbnail.png'} alt="" />
            </NextImageBox>
            <TextBox>
              <h3>{res.title}</h3>
              <TextContentLine>{res.description}</TextContentLine>
              <OtherInfoLine>
                {method === '밸런스토론' && (
                  <>
                    <BlueText>A 선택 </BlueText>
                    <RedText>B 선택 </RedText>
                  </>
                )}
                {method === '찬반토론' && (
                  <>
                    <BlueText>찬성 </BlueText>
                    <RedText>반대 </RedText>
                  </>
                )}
                {method === '이슈토론' && <span>점수 평균 : </span>}
                <span>의견 {res.hits}</span>
                <span>조회수 {res.hits}</span>
              </OtherInfoLine>
            </TextBox>
          </PostBox>
        </Link>
      ))}
    </ContentBox>
  )
}

export default DebateContentList
