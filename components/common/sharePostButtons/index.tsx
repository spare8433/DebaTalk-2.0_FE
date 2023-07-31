import { LessStyleBtn } from '@styles/commonStyle/buttons'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
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
  const { publicRuntimeConfig } = getConfig()
  const webServerUrl = publicRuntimeConfig.WEB_SERVER_URL
  const router = useRouter()
  const handlePrint = useCallback(() => {
    if (typeof window !== 'undefined') window.print()
  }, [])

  return (
    <ButtonBox>
      <PrintButton type="button" onClick={handlePrint}>
        <NextImageBox>
          <FitNextImage src="/img/print_white.png" alt="print" />
        </NextImageBox>
      </PrintButton>
      <EmailShareButton subject={title} url={webServerUrl + router.pathname} body={webServerUrl}>
        <EmailIcon size={36} round />
      </EmailShareButton>
      <FacebookShareButton quote={title} url={webServerUrl + router.pathname}>
        <FacebookIcon size={36} round />
      </FacebookShareButton>
      <TwitterShareButton title={title} url={webServerUrl + router.pathname}>
        <TwitterIcon size={36} round />
      </TwitterShareButton>
    </ButtonBox>
  )
}

export default SharePostButtons
