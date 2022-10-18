import React from "react"
import styled from "styled-components";

type WrapperProps = {
	children: React.ReactNode;
}

const WrapperConatinor= styled.div`
  width: 100%;
  height: 100%;
`

export default function WrapperLayout({ children }: WrapperProps) {
  return (
     <WrapperConatinor>{children}</WrapperConatinor>
  )
}