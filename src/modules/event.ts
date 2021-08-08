import {EventStatus, ModuleFn, IModule} from '@eventkit/core'

export interface EventState {
  status: EventStatus
}

export interface EventEvents {
  [EventStatus.Draft]: void
  [EventStatus.Live]: void
}

export type IEventModule = IModule<EventState, EventEvents, 'event'>

export const EventModule: ModuleFn<[IEventModule]> = (store) => {
  const {on} = store

  on('@setup', () => ({event: {status: EventStatus.Draft}}))
  on('event/live', () => ({event: {status: EventStatus.Live}}))
}
