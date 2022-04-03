import React, { Suspense } from 'react'
import { Provider } from 'jotai'
import { ApolloProvider } from '@apollo/client'

import Head from 'next/head'
import { AppProps } from 'next/app'

import { setupIcon } from '../styles/icon'
import { apolloClient } from '../modules/apollo'
import { ErrorBoundary } from '../modules/ui/ErrorBoundary'

import '../styles/reset.css'

setupIcon()

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ErrorBoundary>
        <Suspense fallback={<div />}>
          <Provider>
            <ApolloProvider client={apolloClient}>
              <Head>
                <title>EventKit Dashboard</title>
              </Head>

              <Component {...pageProps} />
            </ApolloProvider>
          </Provider>
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  )
}

export default App
