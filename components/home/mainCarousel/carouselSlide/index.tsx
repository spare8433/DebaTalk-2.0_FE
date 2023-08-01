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
  margin: 2rem 0;

  a {
    display: flex;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.deepGray};
    font-weight: 500;
    &:hover {
      font-weight: 700;
      color: #000;
    }
  }
  h1 {
    color: inherit;
    font-weight: 600;
    font-size: 28px;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    color: ${({ theme }) => theme.colors.whiteGray};
    font-size: 1.6rem;
    margin-left: 1rem;
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
            <h1>{res.title}</h1>
            <span> &nbsp;-&nbsp; {res.category}</span>
          </Link>
        </Keyword>
      ))
    ) : (
      <Keyword>
        <Link href={{ pathname: '/debate-forum', query: { method, page: '1' } }}>
          <h1>{pathKeyword[method]}의 최신 내용이 없네요 토론장 페이지로 이동해보세요 ^_^</h1>
        </Link>
      </Keyword>
    )}
  </Slide>
)

export default CarouselSlide
