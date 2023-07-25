import { KeywordData } from '@store/slices/debatePosts/type'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Slide = styled.div`
  width: 100%;
  padding: 0 36px;
`

const Keyword = styled.div`
  width: 100%;
  margin: 20px 0;
  a {
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.deepGray};
    font-weight: 500;
    &:hover {
      font-weight: 700;
      color: #000;
    }
  }
  span {
    color: ${({ theme }) => theme.colors.whiteGray};
    font-size: 16px;
    align-self: center;
  }
`

interface Props {
  data?: KeywordData[]
  method: 'issue' | 'balance' | 'proscons'
}

const pathKeyword = {
  issue: '이슈토론',
  balance: '찬반토론',
  proscons: '밸런스토론',
}

const CarouselSlide = ({ data, method }: Props) => (
  <Slide>
    {data && data.length > 0 ? (
      data.map((res) => (
        <Keyword key={method + res.id}>
          <Link
            href={{
              pathname: `/${method}-post/[pid]`,
              query: { pid: res.id },
            }}
          >
            {res.title}
            <span> &nbsp;-&nbsp; {res.category}</span>
          </Link>
        </Keyword>
      ))
    ) : (
      <Keyword>
        <Link href={{ pathname: '/debate-forum', query: { method, page: '1' } }}>
          {pathKeyword[method]}의 최신 내용이 없네요 토론장 페이지로 이동해보세요 ^_^
        </Link>
      </Keyword>
    )}
  </Slide>
)

export default CarouselSlide
