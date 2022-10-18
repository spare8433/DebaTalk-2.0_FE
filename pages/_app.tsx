import WrapperLayout from '@components/common/layouts/wrapperLayout';
import { wrapper } from '@store/store';
import GlobalStyles from '@styles/globalStyle';
import theme from '@styles/theme';
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import React, { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, ...rest }: AppPropsWithLayout ) {
  const {store, props} = wrapper.useWrappedStore(rest);
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