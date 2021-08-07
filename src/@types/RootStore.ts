import {EventState, EventEvents} from '../modules/event'

export interface RootState {
  event: EventState
}

export interface RootEvents {
  event: EventEvents
}
