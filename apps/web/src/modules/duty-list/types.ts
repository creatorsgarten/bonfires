import { EventQuery } from '@gql'

import { Single } from '../../utils/types'

export type Duty = Single<EventQuery['event']['today']['duties']>
