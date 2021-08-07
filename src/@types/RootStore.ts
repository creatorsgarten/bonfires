import {IStore, PrefixEvents} from '.'

import {EventState, EventEvents} from '../modules/event'

export interface RootState {
  event: EventState
}

export interface RootEvents {
  event: EventEvents
}

export interface IModule<S = RootState, E = PrefixEvents<RootEvents>> {
  id: string

  setup(store: IStore<S, E>): void
}
