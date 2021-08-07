import {EventStatus} from '@eventkit/core'

import {IStore} from './@types/IStore'

interface EventState {
  status: EventStatus
}

interface EventEvents {
  [EventStatus.Draft]: string
  [EventStatus.Live]: string
}

interface IModule<S, E> {
  id: string

  setup(store: IStore<S, E>): void
}

const createModule = <S, E>(module: IModule<S, E>) => module

const EventModule = createModule<EventState, EventEvents>({
  id: 'event',

  setup(store) {
    store.on(EventStatus.Live, (state) => {
      // ?
    })
  },
})

EventModule.id
