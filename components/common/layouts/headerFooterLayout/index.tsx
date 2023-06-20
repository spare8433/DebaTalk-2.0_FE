import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'

type WrapperProps = {
  children: React.ReactNode
}

const LayoutContainor = styled.div`
  width: 100%;
  height: 100%;
`

const Main = styled.div`
  width: 100%;
  min-width: 1160px;
  margin: 0 auto;
`

const HeaderFooterLayout = ({ children }: WrapperProps) => (
  <LayoutContainor>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </LayoutContainor>
)

export default React.memo(HeaderFooterLayout)
