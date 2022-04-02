import React from 'react'
import { Provider } from 'jotai'
import { ApolloProvider } from '@apollo/client'

import Head from 'next/head'
import { AppProps } from 'next/app'

import { setupIcon } from '../styles/icon'
import { createApolloClient } from '../utils/gql/createApolloClient'

import '../styles/reset.css'

const client = createApolloClient()
setupIcon()

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
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
