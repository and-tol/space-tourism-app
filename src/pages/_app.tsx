import '../styles/design-token.css'
import '../styles/globals.css'
import '../styles/utilites.css'

import type { AppProps } from 'next/app'
import { Meta } from '../layout'
import React from 'react'
import { AppContextProvider, IMenuContext } from '../context/app.context'

function MyApp({ Component, pageProps }: AppProps & IMenuContext) {
  return (
    <>
      <Meta />
      <AppContextProvider >
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}

export default MyApp
