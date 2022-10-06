import WrapperLayout from '@components/layouts/wrapperLayout';
import { wrapper } from '@store/store';
import GlobalStyles from '@styles/globalStyle';
import theme from '@styles/theme';
import type { AppProps } from 'next/app'
import React from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';

export default function MyApp({ Component, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <GlobalStyles /> 
        <WrapperLayout>
          <Component {...props.pageProps} />
        </WrapperLayout>
      </ThemeProvider>
    </Provider>
  )
}