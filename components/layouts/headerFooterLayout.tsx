import Footer from "@components/footer";
import Header from "@components/header";
import React from "react"
import styled from "styled-components";

type WrapperProps = {
	children: React.ReactNode;
}

const LayoutContainor= styled.div`
  width: 100%;
  height: 100%;
`

const Main = styled.div`
  width: 100%;
  min-width: 1160px;
  margin: 0 auto;
`

export default function HeaderFooterLayout({ children }: WrapperProps) {
  return (
    <LayoutContainor>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainor>
  )
}