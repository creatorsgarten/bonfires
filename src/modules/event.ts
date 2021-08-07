import {EventStatus} from '@eventkit/core'
import {RootEvents} from 'src/@types/RootStore'

import {IModule, PrefixEvents} from '../@types'

export interface EventState {
  status: EventStatus
}

export interface EventEvents {
  [EventStatus.Draft]: string
  [EventStatus.Live]: string
}

type IEventModule = IModule<EventState, PrefixEvents<RootEvents>>

const EventModule: IEventModule = {
  id: 'event',

  setup(store) {
    const {on} = store

    on('@setup', () => ({status: EventStatus.Draft}))
    on('event/live', () => ({status: EventStatus.Live}))
  },
}

EventModule.id
