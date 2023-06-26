import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

export const BreadcrumbContainor = styled.ul`
  display: flex;
  align-items: center;
  height: 3rem;
  background-color: inherit;
  padding-left: 10px;
  li {
    list-style: none;
  }
  a {
    font-size: 1.3rem;
    padding: 0.5rem;
    margin: 0 0.5rem;
  }
`

const Breadcrumb = () => {
  const router = useRouter()

  return (
    <BreadcrumbContainor>
      {router.asPath === '/' ? (
        <li>
          <Link href="/">Home</Link>
          <span>{'>'}</span>
        </li>
      ) : (
        `Home${router.asPath.split('?')[0]}`.split('/').map((res, index, arr) => {
          let href = '/'
          for (let count = 0; count <= index; count += 1) {
            if (count > 0) href += `${arr[count]}/`
          }

          return (
            <li key={`breadcrumb_${index}`}>
              <Link href={href}>{res}</Link>
              <span>{'>'}</span>
            </li>
          )
        })
      )}
    </BreadcrumbContainor>
  )
}

export default Breadcrumb
