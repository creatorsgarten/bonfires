import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { createApolloClient } from '../gql/client'

import '../styles/reset.css'

const client = createApolloClient()

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>EventKit Dashboard</title>
      </Head>

      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default CustomApp
