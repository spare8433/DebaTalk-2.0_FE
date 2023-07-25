import React, { useCallback } from 'react'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssRem, CssString } from 'types/customCssType'
import FitNextImage from '@components/common/fitNextImage'
import { BalanceDebatePostDataState } from '@store/slices/balanceDebatePost/type'
import { ProsConsDebatePostDataState } from '@store/slices/prosConsDebatePost/type'
import { IssueDebatePostDataState } from '@store/slices/issueDebatePost/type'
import Pagination from '@components/common/pagination'
import { useRouter } from 'next/router'
import getConfig from 'next/config'
import dayjs from 'dayjs'
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

interface Props {
  method: 'issue' | 'balance' | 'proscons'
  page?: number | null
  limit?: number | null
}

const detailLinkType = {
  balance: 'balance-post',
  issue: 'issue-post',
  proscons: 'proscons-post',
}

const DebateContentList = ({ method, page, limit }: Props) => {
  const router = useRouter()
  const { publicRuntimeConfig } = getConfig()
  const APISeverUrl = publicRuntimeConfig.API_SERVER_URL
  const balanceDebatePosts = useAppSelector((state) => state.balanceDebatePosts.postsData)
  const issueDebatePosts = useAppSelector((state) => state.issueDebatePosts.postsData)
  const prosConsDebatePosts = useAppSelector((state) => state.prosConsDebatePosts.postsData)

  const currentPage = page ?? 1
  const currentLimit = limit ?? 6

  const changePage = useCallback(
    (num: number) => {
      router.push({ pathname: '/debate-forum', query: { method, limit: currentLimit, page: num } })
    },
    [currentLimit, method, router],
  )

  const postType = {
    balance: balanceDebatePosts,
    issue: issueDebatePosts,
    proscons: prosConsDebatePosts,
  }
  if (!postType[method]) return <ContentBox>데이터가 존재하지 않습니다.</ContentBox>

  return (
    <ContentBox>
      {postType[method]!.data.map((res, index) => (
        <Link
          href={{
            pathname: `/${detailLinkType[method]}/[pid]`,
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
              <FitNextImage
                src={res.imgUrl ? `${APISeverUrl}${res.imgUrl}` : '/img/default-thumbnail.png'}
                alt=""
              />
            </NextImageBox>
            <TextBox>
              <h3>{res.title}</h3>
              <TextContentLine>{res.description}</TextContentLine>
              <OtherInfoLine>
                <LeftPart>
                  {method === 'balance' && (
                    <>
                      <BlueText>
                        A 선택 {(res as BalanceDebatePostDataState).optionAListCount}
                      </BlueText>
                      <RedText>
                        B 선택 {(res as BalanceDebatePostDataState).optionBListCount}
                      </RedText>
                    </>
                  )}
                  {method === 'proscons' && (
                    <>
                      <BlueText>
                        찬성 {(res as ProsConsDebatePostDataState).agreeListCount}
                      </BlueText>
                      <RedText>반대 {(res as ProsConsDebatePostDataState).opposeListCount}</RedText>
                    </>
                  )}
                  {method === 'issue' && (
                    <span>
                      점수 평균 :{' '}
                      {(res as IssueDebatePostDataState).opinionAvgScore
                        ? Number((res as IssueDebatePostDataState).opinionAvgScore).toFixed(2)
                        : '집계전'}
                    </span>
                  )}
                  <span>의견 {res.opinionCount}</span>
                  <span>조회수 {res.hits}</span>
                </LeftPart>

                <RightPart>{`${dayjs(res.createdAt).format('YYYY-MM-DD')} - ${
                  res.category
                }`}</RightPart>
              </OtherInfoLine>
            </TextBox>
          </PostBox>
        </Link>
      ))}
      <PaginationBox>
        <Pagination
          value={currentPage - 1}
          bar={5}
          max={Math.ceil((postType[method]?.count ?? 0) / currentLimit)}
          onChange={changePage}
        />
      </PaginationBox>
    </ContentBox>
  )
}

export default DebateContentList
