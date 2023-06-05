import { wrapper } from '@store/store';
import GlobalStyles from '@styles/globalStyle';
import theme from '@styles/theme';
import { NextPage } from 'next';
import React, { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// 일단 공식문서 내용이라 arrorw 형식으로 변경하지 않음
// eslint-disable-next-line react/function-component-definition
export default function MyApp({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {getLayout(<Component {...props.pageProps} />)}
      </ThemeProvider>
    </Provider>
  )
}
