import FitNextImage from '@components/common/fitNextImage'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import React, { useCallback } from 'react'
import { CssRem, CssString } from 'types/customCssType'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import {
  IssueDebateOpinionDataState,
  IssueDebatePostDataState,
} from '@store/slices/issueDebatePost/type'
import { BalanceDebatePostDataState } from '@store/slices/balanceDebatePost/type'
import { ProsConsDebatePostDataState } from '@store/slices/prosConsDebatePost/type'
import getConfig from 'next/config'
import {
  BlueText,
  ContentBox,
  OtherInfoLine,
  PostBox,
  RedText,
  TextBox,
  TextContentLine,
} from './style'

const detailLinkType: { [index: string]: string } = {
  balance: 'balance-post',
  issue: 'issue-post',
  proscons: 'proscons-post',
}

const SearchedDebatePost = () => {
  const { publicRuntimeConfig } = getConfig()
  const APISeverUrl = publicRuntimeConfig.API_SERVER_URL
  const searchedPostData = useAppSelector((state) => state.debatePosts.integratedDebatePostData)

  const avgScore = useCallback((arr: IssueDebateOpinionDataState[]) => {
    if (arr && arr.length > 0) {
      const scoreList = arr.map((res) => res.score)
      return (
        scoreList.reduce((sum, currentValue) => sum + currentValue, 0) / scoreList.length
      ).toFixed(2)
    }
    return 0
  }, [])

  return (
    <ContentBox>
      {searchedPostData && searchedPostData.length > 0 ? (
        searchedPostData.map((res) => (
          <Link
            href={{
              pathname: `/debate-forum/${detailLinkType[`${res.method ?? ''}`]}/[pid]`,
              query: { pid: res.id },
            }}
            key={`debatePostItmes-${res.method}-${res.id}`}
          >
            <PostBox>
              <NextImageBox
                styleOption={{
                  width: new CssRem(16),
                  height: new CssRem(16),
                  boxShadow: new CssString('rgba(99, 99, 99, 0.3) 0px 2px 8px 0px'),
                }}
              >
                <FitNextImage
                  src={res.imgUrl ? `${APISeverUrl}${res.imgUrl}` : '/img/default-thumbnail.png'}
                  alt=""
                />
              </NextImageBox>
              <TextBox>
                <h4>{res.title}</h4>
                <TextContentLine>{res.description}</TextContentLine>
                <OtherInfoLine>
                  {res.method === 'balance' && (
                    <>
                      <BlueText>
                        A 선택 {(res as BalanceDebatePostDataState).OptionAList.length}
                      </BlueText>
                      <RedText>
                        B 선택 {(res as BalanceDebatePostDataState).OptionBList.length}
                      </RedText>
                      <span>의견 {(res as BalanceDebatePostDataState).BalanceOpinions.length}</span>
                    </>
                  )}
                  {res.method === 'proscons' && (
                    <>
                      <BlueText>
                        찬성 {(res as ProsConsDebatePostDataState).OptionAgreeList.length}
                      </BlueText>
                      <RedText>
                        반대 {(res as ProsConsDebatePostDataState).OptionOpposeList.length}
                      </RedText>
                      <span>
                        의견 {(res as ProsConsDebatePostDataState).ProsConsOpinions.length}
                      </span>
                    </>
                  )}
                  {res.method === 'issue' && (
                    <>
                      <span>
                        점수 평균 : {avgScore((res as IssueDebatePostDataState).IssueOpinions)}
                      </span>
                      <span>의견 {(res as IssueDebatePostDataState).IssueOpinions.length}</span>
                    </>
                  )}
                  <span>조회수 {res.hits}</span>
                </OtherInfoLine>
              </TextBox>
            </PostBox>
          </Link>
        ))
      ) : (
        <h6>검색 내용이 없습니다</h6>
      )}
    </ContentBox>
  )
}

export default SearchedDebatePost
