import Head from 'next/head'
import { AppProps } from 'next/app'

import '../styles/reset.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EventKit Dashboard</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default CustomApp
