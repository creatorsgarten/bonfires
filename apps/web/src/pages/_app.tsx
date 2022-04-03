import React from 'react'
import { Provider } from 'jotai'
import { ApolloProvider } from '@apollo/client'

import Head from 'next/head'
import { AppProps } from 'next/app'

import { setupIcon } from '../styles/icon'
import { apolloClient } from '../modules/store/apollo'

import '../styles/reset.css'

setupIcon()

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <Provider>
          <Head>
            <title>EventKit Dashboard</title>
          </Head>

          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </React.StrictMode>
  )
}

export default CustomApp
