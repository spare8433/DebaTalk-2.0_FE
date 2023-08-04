import FitNextImage from '@components/common/fitNextImage'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import React, { useCallback } from 'react'
import { CssRem, CssString } from 'types/customCssType'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import { IssueDebatePostDataState } from '@store/slices/issueDebatePost/type'
import { BalanceDebatePostDataState } from '@store/slices/balanceDebatePost/type'
import { ProsConsDebatePostDataState } from '@store/slices/prosConsDebatePost/type'
import dayjs from 'dayjs'
import Pagination from '@components/common/pagination'
import { useRouter } from 'next/router'
import {
  BlueText,
  ContentBox,
  LeftPart,
  OtherInfoLine,
  PaginationBox,
  PostBox,
  RedText,
  RightPart,
  TextBox,
  TextContentLine,
} from './style'

const detailLinkType: { [index: string]: string } = {
  balance: 'balance-post',
  issue: 'issue-post',
  proscons: 'proscons-post',
  topic: 'debate-topic-board/debate-topic-post',
}

const postType: { [index: string]: string } = {
  balance: '밸런스 토론',
  issue: '이슈 토론',
  proscons: '찬반 토론',
  topic: '주제 추천',
}

interface Props {
  page?: number | null
  limit?: number | null
  searchText?: string | null
}

const SearchedDebatePost = ({ page, limit, searchText }: Props) => {
  const router = useRouter()
  const searchedPostData = useAppSelector((state) => state.debatePosts.integratedDebatePostData)
  const currentPage = page ?? 1
  const currentLimit = limit ?? 8
  const currentSearchText = searchText ?? ''

  const changePage = useCallback(
    (num: number) => {
      router.push({
        pathname: '/integrate-search',
        query: { limit: currentLimit, page: num, searchText: currentSearchText },
      })
    },
    [currentLimit, currentSearchText, router],
  )

  return (
    <ContentBox>
      {searchedPostData && searchedPostData.data.length > 0 ? (
        searchedPostData.data.map((res) => (
          <Link
            href={{
              pathname: `/${res.method && detailLinkType[`${res.method}`]}/[pid]`,
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
                  src={res.imgUrl ?? '/img/default-thumbnail.png'}
                  alt="thumbnail"
                  priority
                />
              </NextImageBox>
              <TextBox>
                <h4>{res.title}</h4>
                <TextContentLine>{res.description}</TextContentLine>
                <OtherInfoLine>
                  <LeftPart>
                    {res.method === 'balance' && (
                      <>
                        <BlueText>
                          A 선택 {(res as BalanceDebatePostDataState).optionAListCount}
                        </BlueText>
                        <RedText>
                          B 선택 {(res as BalanceDebatePostDataState).optionBListCount}
                        </RedText>
                      </>
                    )}
                    {res.method === 'proscons' && (
                      <>
                        <BlueText>
                          찬성 {(res as ProsConsDebatePostDataState).agreeListCount}
                        </BlueText>
                        <RedText>
                          반대 {(res as ProsConsDebatePostDataState).opposeListCount}
                        </RedText>
                      </>
                    )}
                    {res.method === 'issue' && (
                      <span>
                        점수 평균 : {(res as IssueDebatePostDataState).opinionAvgScore ?? '집계전'}
                      </span>
                    )}
                    <span>의견 {res.opinionCount}</span>
                    <span>조회수 {res.hits}</span>
                  </LeftPart>
                  <RightPart>
                    {`${dayjs(res.createdAt).format('YYYY-MM-DD')} - ${
                      res.method && postType[res.method]
                    } - ${res.category}`}
                  </RightPart>
                </OtherInfoLine>
              </TextBox>
            </PostBox>
          </Link>
        ))
      ) : (
        <h6>검색 내용이 없습니다</h6>
      )}
      <PaginationBox>
        <Pagination
          value={Number(currentPage) - 1}
          bar={5}
          max={Math.ceil((searchedPostData?.count ?? 0) / currentLimit)}
          onChange={changePage}
        />
      </PaginationBox>
    </ContentBox>
  )
}

export default SearchedDebatePost
