import {EventStatus} from '@eventkit/core'
import {RootEvents, RootState} from 'src/@types/RootStore'

import {IModule, PrefixEvents} from '../@types'

export interface EventState {
  status: EventStatus
}

export interface EventEvents {
  [EventStatus.Draft]: void
  [EventStatus.Live]: void
}

type IEventModule = IModule<RootState, PrefixEvents<RootEvents>>

export const EventModule: IEventModule = {
  id: 'event',

  setup(store) {
    const {on} = store

    on('@setup', () => ({event: {status: EventStatus.Draft}}))
    on('event/live', () => ({event: {status: EventStatus.Live}}))
  },
}

EventModule.id
