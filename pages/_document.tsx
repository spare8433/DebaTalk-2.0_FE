import React from 'react'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    // css-in-js 방식 스타일 적용 부분
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        // head 추가 부분
        styles: (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
            <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
              rel="stylesheet"
            />
            <link rel="apple-touch-icon" sizes="57x57" href="/img/icons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/img/icons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/img/icons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/img/icons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/img/icons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/img/icons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/img/icons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/img/icons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-icon-180x180.png" />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/img/icons/android-icon-192x192.png"
            />
            <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/img/icons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/img/icons/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            <title>디베이톡</title>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
