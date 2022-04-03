import React from 'react'
import { Provider } from 'jotai'
import { ApolloProvider } from '@apollo/client'

import Head from 'next/head'
import { AppProps } from 'next/app'

import { setupIcon } from '../styles/icon'
import { apolloClient } from '../modules/apollo'

import '../styles/reset.css'

setupIcon()

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Provider>
        <ApolloProvider client={apolloClient}>
          <Head>
            <title>EventKit Dashboard</title>
          </Head>

          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    </React.StrictMode>
  )
}

export default CustomApp
