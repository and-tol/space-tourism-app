import '../styles/design-token.css'
import '../styles/globals.css'
import '../styles/utilites.css'

import type { AppProps } from 'next/app'
import { Meta } from '../layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Meta />
    <Component {...pageProps} />
    </>
}

export default MyApp
