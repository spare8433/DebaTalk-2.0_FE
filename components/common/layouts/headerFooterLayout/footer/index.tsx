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
          github: <Link href="https://github.com/spare8433">https://github.com/spare8433</Link>
          <br />
          blog: <Link href="https://spare8433.tistory.com">https://spare8433.tistory.com</Link>
          <br />
          E-mail : byeongchan8433@gmail.com <br />
          <h5>Copyright © spare8433</h5>
        </InformationLine>
      </FooterContentBox>

      <NextImageBox styleOption={{ width: new CssRem(25), height: new CssRem(6) }}>
        <FitNextImage src="/img/logo_white.png" alt="" />
      </NextImageBox>
    </FooterContainor>
  </FooterLayout>
)

export default Footer
