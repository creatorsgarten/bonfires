import {v4} from 'uuid'

import {EventStatus} from '../@types/event/EventStatus'
import {CreateEventInput, IEvent} from '../@types/event/IEvent'

export const createEvent = (input: CreateEventInput): IEvent => ({
  ...input,
  id: v4(),
  status: EventStatus.Draft,
})
