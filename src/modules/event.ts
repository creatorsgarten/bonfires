import {EventStatus} from '@eventkit/core'

import {CombinedModuleFn, IModule} from '../@types'

export interface EventState {
  status: EventStatus
}

export interface EventEvents {
  [EventStatus.Draft]: void
  [EventStatus.Live]: void
}

type IEventModule = IModule<EventState, EventEvents, 'event'>

export const EventModule: CombinedModuleFn<[IEventModule]> = (store) => {
  const {on} = store

  on('@setup', () => ({event: {status: EventStatus.Draft}}))
  on('event/live', () => ({event: {status: EventStatus.Live}}))
}
