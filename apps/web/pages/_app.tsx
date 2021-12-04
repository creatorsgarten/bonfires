import Head from 'next/head'
import { AppProps } from 'next/app'

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
