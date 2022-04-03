import { atom } from 'jotai'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import { createApolloClient } from '../../utils/gql/createApolloClient'

type Client = ApolloClient<NormalizedCacheObject>

export const apolloClient = createApolloClient()

export const apolloAtom = atom<Client | null>(apolloClient)
