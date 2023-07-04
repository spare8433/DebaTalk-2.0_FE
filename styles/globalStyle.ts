import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
// import { Noto_Sans_KR } from 'next/font/google'

// const NotoSansKR = Noto_Sans_KR({
//   weight: ['100', '300', '400', '500', '700', '900'],
//   style: 'normal',
//   subsets: ['latin'],
//   preload: true,
//   fallback: ['Arial'],
// })

const GlobalStyles = createGlobalStyle`
    ${normalize}
    * {
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 400;
      box-sizing: border-box;
      color: #3b3b3b;
    }
    html, body, #__next{
      width: 100%;
      height: 100%;
    }
    html {font-size: 10px;}
    body {
      background-color: #F5F5F5;
      box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6,p {
      margin: 0;
      font-weight: 500;
    }
    h1 {
      font-size: 2.4rem;
      font-weight: 700;
    }
    h2 {
      font-size: 2.2rem;
      font-weight: 700;
    }
    h3 {font-size: 2.0rem}
    h4 {font-size: 1.8rem}
    h5 {font-size: 1.6rem}
    h6 {font-size: 1.4rem}
    a {
      cursor: pointer;
      color:#3b3b3b;
      text-decoration: none;
      outline: none
    }
    a:hover, a:active {
      color:#3b3b3b;
      text-decoration: none;
    }
    div{
      box-sizing: border-box;
    }
    ul {
      padding: 0;
      margin: 0;
    }
`

export default GlobalStyles
