import {EventStatus} from '@eventkit/core'

import {IStore, PrefixEvents} from '../@types'

interface RootState {
  event: EventState
}

interface RootEvents {
  event: EventEvents
}

interface EventState {
  status: EventStatus
}

interface EventEvents {
  [EventStatus.Draft]: string
  [EventStatus.Live]: string
}

interface IModule<S> {
  id: string

  setup(store: IStore<S, PrefixEvents<RootEvents>>): void
}

const EventModule: IModule<EventState> = {
  id: 'event',

  setup(store) {
    const {on} = store

    on('@setup', () => ({status: EventStatus.Draft}))
    on('event/live', () => ({status: EventStatus.Live}))
  },
}

EventModule.id
