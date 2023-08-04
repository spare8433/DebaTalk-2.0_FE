import FitNextImage from '@components/common/fitNextImage'
import { useAppSelector } from '@store/store'
import { LessStyleBtn } from '@styles/commonStyle/buttons'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Containor = styled.div`
  a {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 1000;
  }
`

const WritePostButton = styled(LessStyleBtn)`
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  align-items: center;
  justify-content: center;

  ${NextImageBox} {
    z-index: 1000;
    width: 4.8rem;
    height: 4.8rem;
  }
`

const WritePostStickyButton = () => {
  const user = useAppSelector((state) => state.user.myData)

  return (
    <Containor>
      <Link
        href={user ? 'debate-topic-board/write-post' : 'login'}
        onClick={() => !user && alert('로그인 이후 이용 가능하십니다.')}
      >
        <WritePostButton>
          <NextImageBox>
            <FitNextImage src="/img/edit-white.png" alt="edit-post" priority />
          </NextImageBox>
        </WritePostButton>
      </Link>
    </Containor>
  )
}
export default WritePostStickyButton
