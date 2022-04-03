import { EventDocument } from '@gql'

import { atomWithQuery } from '../apollo'

export const eventAtom = atomWithQuery((get) => ({ query: EventDocument }))
