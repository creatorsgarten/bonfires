import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { setupIcon } from '../styles/icon'
import { createApolloClient } from '../core/gql/createApolloClient'

import '../styles/reset.css'

const client = createApolloClient()
setupIcon()

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Head>
          <title>EventKit Dashboard</title>
        </Head>

        <Component {...pageProps} />
      </ApolloProvider>
    </React.StrictMode>
  )
}

export default CustomApp
