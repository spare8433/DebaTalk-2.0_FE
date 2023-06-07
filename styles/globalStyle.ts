import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
    ${normalize}
    * {
      box-sizing: border-box;
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
    a {
      cursor: pointer;
      color:black;
      text-decoration: none;
      outline: none
    }
    a:hover, a:active {
      color:black;
      text-decoration: none;
    }
    div{
      box-sizing: border-box;
    }
    select,input,textarea{
      font-family: 'Noto Sans KR', sans-serif;   
    }
`

export default GlobalStyles
