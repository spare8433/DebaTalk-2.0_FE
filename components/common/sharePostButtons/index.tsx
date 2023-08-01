import { LessStyleBtn } from '@styles/commonStyle/buttons'
import React, { useCallback } from 'react'
import {
  EmailShareButton,
  TwitterShareButton,
  FacebookShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
} from 'react-share'
import styled from 'styled-components'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '../fitNextImage'

interface Props {
  title: string
}

const ButtonBox = styled.div`
  display: flex;
  button {
    margin-left: 0.5rem;
  }
`

const PrintButton = styled(LessStyleBtn)`
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.whiteGray};
  width: 36px;
  height: 36px;
  position: relative;
  ${NextImageBox} {
    width: 18px;
    height: 18px;
    margin: 0 auto;
  }
`

const SharePostButtons = ({ title }: Props) => {
  const handlePrint = useCallback(() => {
    if (typeof window !== 'undefined') window.print()
  }, [])

  const currentUrl = typeof window !== 'undefined' ? window?.location.href : ''
  const emailBody = '링크를 통해 디베이톡에서 토론을 즐겨보세요'
  const currentTitle = `디베이톡 [${title}]`

  return (
    <ButtonBox>
      <PrintButton type="button" onClick={handlePrint}>
        <NextImageBox>
          <FitNextImage src="/img/print_white.png" alt="print" />
        </NextImageBox>
      </PrintButton>
      <EmailShareButton subject={currentTitle} url={currentUrl} body={emailBody}>
        <EmailIcon size={36} round />
      </EmailShareButton>
      <FacebookShareButton quote={currentTitle} url={currentUrl}>
        <FacebookIcon size={36} round />
      </FacebookShareButton>
      <TwitterShareButton title={currentTitle} url={currentUrl}>
        <TwitterIcon size={36} round />
      </TwitterShareButton>
    </ButtonBox>
  )
}

export default SharePostButtons
