import {EventStatus} from '@eventkit/core'

import {IModule} from '../@types'

export interface EventState {
  status: EventStatus
}

export interface EventEvents {
  [EventStatus.Draft]: void
  [EventStatus.Live]: void
}

export const EventModule: IModule = {
  id: 'event',

  setup(store) {
    const {on} = store

    on('@setup', () => ({event: {status: EventStatus.Draft}}))
    on('event/live', () => ({event: {status: EventStatus.Live}}))
  },
}
