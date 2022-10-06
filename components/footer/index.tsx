import Link from 'next/link'
import React from 'react'
import { FooterContentBox, FooterImgBox, FooterLayout, InformationLine, ServiceLine } from './style'

const Footer = () => {
  return (
    <FooterLayout height='300'>
      <FooterContentBox>
        <ServiceLine>
          <Link href="/">
            <a onClick={()=>alert('준비중입니다')}>고객센터</a>
          </Link>
          <span>|</span>
          <a onClick={()=>alert('준비중입니다')}>이용약관</a>
          <span>|</span>
          <a onClick={()=>alert('준비중입니다')}>개인정보 취급방침</a>
        </ServiceLine>
        <InformationLine>
          사업자등록번호 : 0000-00-00000 <br />
          주소 : 000 0000  0000 <br />
          대표번호  : 070-0000-0000 <br />
          팩스 : 0000-00-00000 <br />
          E-mail : 000000@naver.com <br /><br />
          <span>Copyright © spare8433</span>
        </InformationLine>
      </FooterContentBox>

      <FooterImgBox>
        <img src="./img/logo_white.png" alt="" />
      </FooterImgBox>
    </FooterLayout>
  )
}

export default Footer
