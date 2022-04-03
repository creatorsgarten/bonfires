import { atom } from 'jotai'

import { createApolloClient } from '../../utils/gql/createApolloClient'

export const apolloClient = createApolloClient()

export const apolloAtom = atom(apolloClient)
