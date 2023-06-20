import Link from 'next/link'
import React from 'react'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssRem } from 'types/customCssType'
import FitNextImage from '@components/common/fitNextImage'
import {
  FooterContainor,
  FooterContentBox,
  FooterLayout,
  InformationLine,
  ServiceLine,
} from './style'

const Footer = () => (
  <FooterLayout>
    <FooterContainor>
      <FooterContentBox>
        <ServiceLine>
          <Link href="/">고객센터</Link>
          <Link href="/">이용약관</Link>
          <Link href="/">개인정보 취급방침</Link>
        </ServiceLine>
        <InformationLine>
          사업자등록번호 : 0000-00-00000 <br />
          주소 : 000 0000 0000 <br />
          대표번호 : 070-0000-0000 <br />
          팩스 : 0000-00-00000 <br />
          E-mail : 000000@naver.com <br />
          <br />
          <span>Copyright © spare8433</span>
        </InformationLine>
      </FooterContentBox>

      <NextImageBox styleOption={{ width: new CssRem(25), height: new CssRem(6) }}>
        <FitNextImage src="/img/logo_white.png" alt="" />
      </NextImageBox>
    </FooterContainor>
  </FooterLayout>
)

export default Footer
