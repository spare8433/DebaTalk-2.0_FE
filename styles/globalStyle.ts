import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
    ${normalize}
    * {
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
      font-weight: 400;
      box-sizing: border-box;
      font-family: 'Noto Sans KR', sans-serif;   
    }
    h1,h2,h3,h4,h5,h6,p {
      margin: 0;
    }
    h1 {font-size: 2.4rem}
    h2 {font-size: 2.2rem}
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
    select,input,textarea{
      font-family: 'Noto Sans KR', sans-serif;   
    }
`

export default GlobalStyles
