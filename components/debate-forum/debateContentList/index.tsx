import React, { useCallback } from 'react'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssRem, CssString } from 'types/customCssType'
import FitNextImage from '@components/common/fitNextImage'
import { BalanceDebatePostDataState } from '@store/slices/balanceDebatePost/type'
import { ProsConsDebatePostDataState } from '@store/slices/prosConsDebatePost/type'
import {
  IssueDebateOpinionDataState,
  IssueDebatePostDataState,
} from '@store/slices/issueDebatePost/type'
import Pagination from '@components/common/pagination'
import { useRouter } from 'next/router'
import {
  BlueText,
  ContentBox,
  OtherInfoLine,
  PaginationBox,
  PostBox,
  RedText,
  TextBox,
  TextContentLine,
} from './style'

interface Props {
  method: 'issue' | 'balance' | 'proscons'
  page: string
}

const detailLinkType = {
  balance: 'balance-post',
  issue: 'issue-post',
  proscons: 'proscons-post',
}

const DebateContentList = ({ method, page }: Props) => {
  const balanceDebatePosts = useAppSelector((state) => state.balanceDebatePosts.postsData)
  const issueDebatePosts = useAppSelector((state) => state.issueDebatePosts.postsData)
  const prosConsDebatePosts = useAppSelector((state) => state.prosConsDebatePosts.postsData)

  // const [methodState, setMethodState] = useState(method)
  // const [pageState, setPageState] = useState(method)

  const router = useRouter()

  const avgScore = useCallback((arr: IssueDebateOpinionDataState[]) => {
    if (arr && arr.length > 0) {
      const scoreList = arr.map((res) => res.score)
      return (
        scoreList.reduce((sum, currentValue) => sum + currentValue, 0) / scoreList.length
      ).toFixed(2)
    }
    return 0
  }, [])

  const test = useCallback(
    (num: number) => {
      router.push({ pathname: '/debate-forum', query: { method, page: num } })
    },
    [method, router],
  )
  // const test = (num: number) => {
  //   console.log(num)
  //   router.push({ pathname: '/debate-forum', query: { method, page: num } })
  // }

  const postType = {
    balance: balanceDebatePosts,
    issue: issueDebatePosts,
    proscons: prosConsDebatePosts,
  }

  return (
    <ContentBox>
      {postType[method]?.rows?.map((res, index) => (
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
              <FitNextImage src={res.imgUrl ?? '/img/default-thumbnail.png'} alt="" />
            </NextImageBox>
            <TextBox>
              <h3>{res.title}</h3>
              <TextContentLine>{res.description}</TextContentLine>
              <OtherInfoLine>
                {method === 'balance' && (
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
                {method === 'proscons' && (
                  <>
                    <BlueText>
                      찬성 {(res as ProsConsDebatePostDataState).OptionAgreeList.length}
                    </BlueText>
                    <RedText>
                      반대 {(res as ProsConsDebatePostDataState).OptionOpposeList.length}
                    </RedText>
                    <span>의견 {(res as ProsConsDebatePostDataState).ProsConsOpinions.length}</span>
                  </>
                )}
                {method === 'issue' && (
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
      ))}
      <PaginationBox>
        <Pagination
          value={Number(page) - 1}
          bar={5}
          max={Math.ceil((postType[method]?.count ?? 0) / 4)}
          onChange={test}
        />
      </PaginationBox>
    </ContentBox>
  )
}

export default DebateContentList
