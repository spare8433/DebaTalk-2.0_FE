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
    margin: 0 0.5rem;
  }
  a {
    font-size: 1.3rem;
    padding: 0.5rem;
  }
`

const Breadcrumb = () => {
  const router = useRouter()

  console.log(`Home${router.asPath}`.split('/'))
  console.log(`Home${router.asPath}`)
  console.log(router.asPath)
  console.log(router.asPath.split('/'))
  return (
    <BreadcrumbContainor>
      {router.asPath === '/' ? (
        <>
          <li>
            <Link href="/">Home</Link>
          </li>
          <span>{'>'}</span>
        </>
      ) : (
        `Home${router.asPath}`.split('/').map((res, index, arr) => {
          let href = '/'
          for (let count = 0; count <= index; count += 1) {
            if (count > 0) href += `${arr[count]}/`
          }

          return (
            <>
              <li>
                <Link href={href}>{res}</Link>
              </li>
              <span>{'>'}</span>
            </>
          )
        })
      )}
    </BreadcrumbContainor>
  )
}

export default Breadcrumb
